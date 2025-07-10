import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
  onClick: () => void;
}

export function Button({ children, className, onClick }: Props) {
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{ scale: 0.9 }}
      className={twMerge(
        "text-white p-2 w-full border border-white hover:bg-calma-secondary rounded-lg cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
