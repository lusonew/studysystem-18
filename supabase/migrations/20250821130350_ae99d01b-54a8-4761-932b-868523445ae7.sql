-- Remove the public read policy (security vulnerability)
DROP POLICY IF EXISTS "Public can view purchases" ON public.purchases;

-- Create policy for users to view their own purchases (if we implement user-specific purchases later)
CREATE POLICY "Users can view own purchases" ON public.purchases
FOR SELECT 
USING (false); -- Temporarily disabled until we implement user association

-- Keep the webhook insert policy for Stripe webhooks
-- (This remains unchanged and secure)