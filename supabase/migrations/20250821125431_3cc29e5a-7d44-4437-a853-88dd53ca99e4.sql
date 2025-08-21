-- Enable realtime for purchases table
ALTER TABLE public.purchases REPLICA IDENTITY FULL;

-- Add the purchases table to the realtime publication
ALTER PUBLICATION supabase_realtime ADD TABLE public.purchases;