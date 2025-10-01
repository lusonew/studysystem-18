import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { useCountdown } from "@/hooks/useCountdown";

export const LaunchCountdown = () => {
  const { days, hours, minutes, seconds, isExpired } = useCountdown('2025-10-05T23:59:59');

  if (isExpired) {
    return null;
  }

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <Badge variant="destructive" className="bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20">
      <Clock className="w-4 h-4 mr-1" />
      Launch-Aktion: {formatNumber(days)}t {formatNumber(hours)}h {formatNumber(minutes)}m {formatNumber(seconds)}s
    </Badge>
  );
};