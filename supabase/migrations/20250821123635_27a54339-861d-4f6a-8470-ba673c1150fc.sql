-- Create purchases table for social proof notifications
CREATE TABLE public.purchases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stripe_payment_intent_id TEXT UNIQUE,
  customer_name TEXT NOT NULL, -- Anonymized name like "Max M."
  product_name TEXT NOT NULL, -- "Study System" or "Study System PRO"  
  amount INTEGER NOT NULL, -- Amount in cents
  currency TEXT DEFAULT 'eur',
  purchased_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.purchases ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access (for social proof display)
CREATE POLICY "Public can view purchases" 
ON public.purchases 
FOR SELECT 
USING (true);

-- Create policy for webhook function to insert new purchases
CREATE POLICY "Webhook can insert purchases" 
ON public.purchases 
FOR INSERT 
WITH CHECK (true);

-- Create index for better performance when fetching recent purchases
CREATE INDEX idx_purchases_purchased_at ON public.purchases (purchased_at DESC);

-- Create function to anonymize customer names
CREATE OR REPLACE FUNCTION public.anonymize_customer_name(full_name TEXT)
RETURNS TEXT AS $$
BEGIN
  -- Convert "Max Mustermann" to "Max M."
  RETURN TRIM(SPLIT_PART(full_name, ' ', 1)) || ' ' || 
         LEFT(TRIM(SPLIT_PART(full_name, ' ', 2)), 1) || '.';
END;
$$ LANGUAGE plpgsql;