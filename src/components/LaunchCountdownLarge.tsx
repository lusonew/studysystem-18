import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { useCountdown } from "@/hooks/useCountdown";
import { motion } from "framer-motion";
export const LaunchCountdownLarge = () => {
  const {
    days,
    hours,
    minutes,
    seconds,
    isExpired
  } = useCountdown('2025-10-05T23:59:59');
  if (isExpired) {
    return null;
  }
  const formatNumber = (num: number) => num.toString().padStart(2, '0');
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.6,
    delay: 1.2
  }} className="flex justify-center mb-12">
      <div className="w-full md:w-1/2 max-w-md">
        <Badge variant="destructive" className="w-full justify-center py-4 px-6 text-lg font-bold bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Clock className="w-5 h-5 mr-2" />
              Launch-Aktion endet in: {formatNumber(days)}d {formatNumber(hours)}h {formatNumber(minutes)}m {formatNumber(seconds)}s
            </div>
            
          </div>
        </Badge>
      </div>
    </motion.div>;
};