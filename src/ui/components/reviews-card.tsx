"use client";
import { Star } from "lucide-react";
import { motion } from "motion/react";

interface Props {
  review: string;
  name: string;
  position: string;
}

export function ReviewsCard({ review, name, position }: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      className="max-w-xs flex flex-col justify-center-center p-4 rounded-2xl shadow"
    >
      <div className="flex justify-end w-full text-orange-300">
        {Array.from({ length: 5 }).map((_, index) => (
          <motion.div
            key={`review_star_${index}_${name}`}
            initial={{ y: "-20px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.3,
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Star fill="oklch(83.7% 0.128 66.29)" />
          </motion.div>
        ))}
      </div>
      <p className="text-lg italic text-center text-gray-500 mt-2">{`"${review}"`}</p>
      <div className="mt-4">
        <p className="font-bold text-sm">{name}</p>
        <p className="text-sm text-gray-500">{position}</p>
      </div>
    </motion.div>
  );
}
