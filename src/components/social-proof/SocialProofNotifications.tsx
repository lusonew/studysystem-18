import { useSocialProof } from '@/hooks/useSocialProof';

export const SocialProofNotifications = () => {
  // Initialize the social proof system
  useSocialProof();
  
  // This component doesn't render anything visible
  // The notifications are handled via Sonner toasts
  return null;
};