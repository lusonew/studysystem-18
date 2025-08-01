
import { Star, User } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Avatar } from "../ui/avatar";
import { Testimonial } from "@/data/testimonials";
import { memo } from "react";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

// Using memo to prevent unnecessary re-renders when carousel slides
const TestimonialCard = memo(({ testimonial }: TestimonialCardProps) => {
  const { name, text, time } = testimonial;

  return (
    <Card className="bg-white border border-gray-100 shadow-sm h-full">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Avatar className="h-10 w-10">
            <div className="bg-amber-100 text-amber-700 h-full w-full flex items-center justify-center">
              <User size={20} />
            </div>
          </Avatar>
          <div className="space-y-1">
            <h3 className="font-semibold">{name}</h3>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">{time}</span>
            </div>
          </div>
        </div>
        {/* Only render paragraph if there's text content */}
        {text && <p className="mt-4 text-gray-600">{text}</p>}
      </CardContent>
    </Card>
  );
});

TestimonialCard.displayName = "TestimonialCard";

export default TestimonialCard;
