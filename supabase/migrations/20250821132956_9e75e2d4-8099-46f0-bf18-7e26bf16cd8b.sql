-- Add explicit SELECT policy that denies all direct access
-- This makes the security intention crystal clear
CREATE POLICY "Deny direct SELECT access" ON public.purchases
FOR SELECT 
USING (false);

-- Add comment to explain the security model
COMMENT ON POLICY "Deny direct SELECT access" ON public.purchases IS 'Explicit denial of direct SELECT access. Data access only via secure edge functions with service role key.';