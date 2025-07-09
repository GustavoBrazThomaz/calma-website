import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
}

export function BenefitCard({ icon, description, title }: Props) {
  return (
    <div className="max-w-xs space-y-4 flex flex-col justify-center items-center text-center">
      {icon}
      <p className="text-xl font-[600]  font-serif">{title}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}
