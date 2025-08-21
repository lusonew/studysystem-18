import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[STRIPE-WEBHOOK] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep('Webhook received');
    
    const stripeKey = Deno.env.get('STRIPE_SECRET_KEY');
    if (!stripeKey) throw new Error('STRIPE_SECRET_KEY is not set');

    // Initialize Supabase client with service role key to bypass RLS
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      { auth: { persistSession: false } }
    );

    const stripe = new Stripe(stripeKey, { apiVersion: '2023-10-16' });
    
    const body = await req.text();
    const signature = req.headers.get('stripe-signature');
    
    if (!signature) {
      logStep('ERROR: No Stripe signature found');
      return new Response('Missing Stripe signature', { status: 400 });
    }

    // Verify webhook signature for security
    const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET');
    let event;
    
    if (webhookSecret) {
      // Production: verify signature (async version for Deno)
      event = await stripe.webhooks.constructEventAsync(body, signature, webhookSecret);
      logStep('Webhook signature verified');
    } else {
      // Development: parse directly (less secure)
      event = JSON.parse(body);
      logStep('WARNING: Webhook signature not verified - add STRIPE_WEBHOOK_SECRET for production');
    }
    logStep('Event received', { type: event.type, id: event.id });

    // Handle successful payment events
    if (event.type === 'checkout.session.completed' || event.type === 'payment_intent.succeeded') {
      const session = event.data.object;
      logStep('Processing payment event', { sessionId: session.id });

      // Extract customer information
      let customerName = 'Anonymous';
      let customerEmail = '';
      
      if (session.customer_details?.email) {
        customerEmail = session.customer_details.email;
        customerName = session.customer_details.name || customerEmail.split('@')[0];
      } else if (session.customer_email) {
        customerEmail = session.customer_email;
        customerName = customerEmail.split('@')[0];
      }

      // Extract only the first name from customer name
      let firstName = 'Anonymous';
      
      if (customerName && customerName !== 'Anonymous') {
        // Extract first name (everything before the first space)
        firstName = customerName.split(' ')[0].trim();
        
        // Ensure we have a valid first name
        if (!firstName || firstName.length === 0) {
          firstName = 'Anonymous';
        }
      }

      // Determine product name based on amount
      const amount = session.amount_total || session.amount;
      let productName = 'Study System';
      
      if (amount >= 9900) { // €99 or more = PRO version
        productName = 'Study System PRO';
      }

      // Insert purchase record
      const { error: insertError } = await supabase
        .from('purchases')
        .insert({
          stripe_payment_intent_id: session.payment_intent || session.id,
          customer_name: firstName,
          product_name: productName,
          amount: amount,
          currency: session.currency || 'eur',
          purchased_at: new Date().toISOString()
        });

      if (insertError) {
        logStep('ERROR: Failed to insert purchase', { error: insertError });
        throw insertError;
      }

      logStep('Purchase recorded successfully', { 
        customer: firstName, 
        product: productName, 
        amount: amount 
      });
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep('ERROR in webhook', { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});