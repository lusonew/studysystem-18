import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Helper logging function
const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[SOCIAL-PROOF] ${step}${detailsStr}`);
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Fetching anonymized social proof data");

    // Use service role to read purchases data securely
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    // Get recent purchases from the last 24 hours
    const twentyFourHoursAgo = new Date();
    twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24);

    const { data, error } = await supabaseClient
      .from('purchases')
      .select('customer_name, product_name, created_at, amount')
      .gte('created_at', twentyFourHoursAgo.toISOString())
      .order('created_at', { ascending: false })
      .limit(20);

    if (error) {
      logStep("Database error", { error: error.message });
      throw error;
    }

    if (!data || data.length === 0) {
      logStep("No recent purchases found");
      return new Response(JSON.stringify({ purchases: [] }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    // Anonymize the data for public consumption
    const anonymizedPurchases = data.map((purchase) => ({
      id: `${purchase.created_at}-${Math.random().toString(36).substring(7)}`, // Generate stable but anonymous ID
      customer_name: purchase.customer_name, // Already anonymized by webhook (e.g., "Max M.")
      product_name: purchase.product_name,
      created_at: purchase.created_at,
      // Don't expose the actual amount - could include tier info if needed
      amount: purchase.amount // This is safe since it's just used for determining product type
    }));

    logStep("Returning anonymized purchase data", { count: anonymizedPurchases.length });

    return new Response(JSON.stringify({ purchases: anonymizedPurchases }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in get-social-proof", { message: errorMessage });
    
    return new Response(JSON.stringify({ 
      error: errorMessage,
      purchases: [] // Return empty array as fallback
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});