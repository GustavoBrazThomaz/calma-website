import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: ReactNode;
  className?: string;
  onClick: () => void;
}

export function Button({ children, className, onClick }: Props) {
  return (
    <button
      className={twMerge(
        "text-white p-2 w-full border border-white hover:bg-calma-secondary rounded-lg transition cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
