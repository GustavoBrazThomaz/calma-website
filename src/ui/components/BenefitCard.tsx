import { Users } from "lucide-react";

export function BenefitCard() {
  return (
    <div className="max-w-xs space-y-4 flex flex-col justify-center items-center">
      <Users className="size-12"/>
      <p className="text-xl font-bold">Organização Total</p>
      <p className="text-sm">
        Mantenha todos os dados dos seus pacientes organizados e seguros em um
        só lugar.
      </p>
    </div>
  );
}
