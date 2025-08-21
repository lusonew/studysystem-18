import { useEffect, useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface Purchase {
  id: string;
  customer_name: string;
  product_name: string;
  created_at: string;
  amount: number;
}

export const useSocialProof = () => {
  const [recentPurchases, setRecentPurchases] = useState<Purchase[]>([]);
  const [lastShownIndex, setLastShownIndex] = useState(-1);

  // Fetch recent purchases via secure edge function
  const fetchRecentPurchases = useCallback(async () => {
    try {
      const { data, error } = await supabase.functions.invoke('get-social-proof');
      
      if (error) {
        console.error('Error fetching social proof:', error);
        return;
      }

      if (data?.purchases) {
        setRecentPurchases(data.purchases);
      }
    } catch (error) {
      console.error('Error in social proof fetch:', error);
    }
  }, []);

  // Show a random purchase notification
  const showRandomPurchase = useCallback(() => {
    if (recentPurchases.length === 0) return;

    // Get a different purchase than the last one shown
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * recentPurchases.length);
    } while (randomIndex === lastShownIndex && recentPurchases.length > 1);

    const purchase = recentPurchases[randomIndex];
    setLastShownIndex(randomIndex);

    // Calculate time ago
    const timeAgo = getTimeAgo(purchase.created_at);

    toast.success(
      `${purchase.customer_name} hat sich das Study System PRO gekauft 🚀`,
      {
        description: `vor ${timeAgo}`,
        duration: 4000,
        className: "social-proof-toast",
      }
    );
  }, [recentPurchases, lastShownIndex]);

  // Helper function to get human readable time ago
  const getTimeAgo = (dateString: string) => {
    const now = new Date();
    const past = new Date(dateString);
    const diffInMinutes = Math.floor((now.getTime() - past.getTime()) / (1000 * 60));

    if (diffInMinutes < 1) return 'gerade eben';
    if (diffInMinutes < 60) return `${diffInMinutes} Min.`;
    const hours = Math.floor(diffInMinutes / 60);
    if (hours < 24) return `${hours} Std.`;
    return 'gestern';
  };

  useEffect(() => {
    fetchRecentPurchases();
    
    // Refresh every 5 minutes to get new purchases
    const interval = setInterval(fetchRecentPurchases, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchRecentPurchases]);

  // Set up periodic display of existing purchases
  useEffect(() => {
    if (recentPurchases.length === 0) return;

    const showPurchase = () => {
      showRandomPurchase();
      
      // Schedule next notification (30-90 seconds - doubled for less intrusiveness)
      const nextInterval = Math.random() * 60000 + 30000; // 30-90 seconds
      setTimeout(showPurchase, nextInterval);
    };

    // Initial delay (10-20 seconds after component mount - doubled for less intrusiveness)
    const initialDelay = Math.random() * 10000 + 10000;
    const timeoutId = setTimeout(showPurchase, initialDelay);

    return () => clearTimeout(timeoutId);
  }, [recentPurchases, showRandomPurchase]);

  return {
    recentPurchases,
    showRandomPurchase
  };
};