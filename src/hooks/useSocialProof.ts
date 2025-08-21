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

  // Fetch initial recent purchases (last 24 hours)
  const fetchRecentPurchases = useCallback(async () => {
    const twentyFourHoursAgo = new Date();
    twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24);

    const { data, error } = await supabase
      .from('purchases')
      .select('*')
      .gte('created_at', twentyFourHoursAgo.toISOString())
      .order('created_at', { ascending: false })
      .limit(20);

    if (error) {
      console.error('Error fetching purchases:', error);
      return;
    }

    if (data) {
      setRecentPurchases(data);
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
      `${purchase.customer_name} hat gerade ${purchase.product_name} gekauft`,
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
  }, [fetchRecentPurchases]);

  // Set up real-time subscription for new purchases
  useEffect(() => {
    const channel = supabase
      .channel('purchases-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'purchases'
        },
        (payload) => {
          const newPurchase = payload.new as Purchase;
          setRecentPurchases(prev => [newPurchase, ...prev.slice(0, 19)]);
          
          // Show notification for new purchase immediately
          setTimeout(() => {
            toast.success(
              `${newPurchase.customer_name} hat gerade ${newPurchase.product_name} gekauft`,
              {
                description: 'gerade eben',
                duration: 4000,
                className: "social-proof-toast",
              }
            );
          }, 2000); // Small delay to make it feel natural
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Set up periodic display of existing purchases
  useEffect(() => {
    if (recentPurchases.length === 0) return;

    const showPurchase = () => {
      showRandomPurchase();
      
      // Schedule next notification (15-45 seconds)
      const nextInterval = Math.random() * 30000 + 15000; // 15-45 seconds
      setTimeout(showPurchase, nextInterval);
    };

    // Initial delay (5-10 seconds after component mount)
    const initialDelay = Math.random() * 5000 + 5000;
    const timeoutId = setTimeout(showPurchase, initialDelay);

    return () => clearTimeout(timeoutId);
  }, [recentPurchases, showRandomPurchase]);

  return {
    recentPurchases,
    showRandomPurchase
  };
};