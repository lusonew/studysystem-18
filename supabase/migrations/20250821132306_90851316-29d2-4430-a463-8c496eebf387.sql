-- Remove the broken policy since this table is for anonymous purchases
DROP POLICY IF EXISTS "Users can view own purchases" ON public.purchases;

-- Add comment to clarify table purpose
COMMENT ON TABLE public.purchases IS 'Stores anonymous purchases from Stripe webhooks for social proof. No user association by design.';