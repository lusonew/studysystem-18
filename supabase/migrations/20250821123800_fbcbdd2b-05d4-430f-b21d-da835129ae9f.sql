-- Fix security issue: Set secure search_path for the function
CREATE OR REPLACE FUNCTION public.anonymize_customer_name(full_name TEXT)
RETURNS TEXT AS $$
BEGIN
  -- Convert "Max Mustermann" to "Max M."
  RETURN TRIM(SPLIT_PART(full_name, ' ', 1)) || ' ' || 
         LEFT(TRIM(SPLIT_PART(full_name, ' ', 2)), 1) || '.';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;