import { Star } from "lucide-react";

interface Props {
  review: string;
  name: string;
  position: string;
}

export function ReviewsCard({ review, name, position }: Props) {
  return (
    <div className="max-w-xs flex flex-col justify-center-center p-4 rounded-2xl border-6 border-orange-300">
      <div className="flex justify-end w-full text-orange-300">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={`review_star_${index}_${name}`}
            fill="oklch(83.7% 0.128 66.29)"
          />
        ))}
      </div>
      <p className="text-lg italic text-center text-gray-500 mt-2">{`"${review}"`}</p>
      <div className="mt-4">
        <p className="font-bold text-sm">{name}</p>
        <p className="text-sm text-gray-500">{position}</p>
      </div>
    </div>
  );
}
