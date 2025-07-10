import { Clock, Shield, Users } from "lucide-react";
import { BenefitCard } from "../components/benefit-card";

const benefits = [
  {
    icon: <Users strokeWidth={1} className="size-12" />,
    title: "Organização Total",
    description:
      "Mantenha todos os dados dos seus pacientes organizados e seguros em um só lugar.",
  },
  {
    icon: <Clock strokeWidth={1} className="size-12" />,
    title: "Economia de Tempo",
    description:
      "Automatize tarefas repetitivas e foque no que realmente importa: seus pacientes.",
  },
  {
    icon: <Shield strokeWidth={1} className="size-12" />,
    title: "Privacidade Garantida",
    description:
      "Seus dados e os de seus pacientes protegidos com os mais altos padrões de segurança digital.",
  },
];

export function BenefitSection() {
  return (
    <section className="pb-24 flex flex-col items-center space-y-32">
      <div className="text-center space-y-4 mt-24">
        <h1 className="font-serif text-6xl ">Benefícios</h1>
        <h2 className="text-2xl text-gray-500">
          Descubra como o Calma pode transformar sua prática profissional
        </h2>
      </div>

      <div className="flex flex-wrap gap-8">
        {benefits.map((item, index) => (
          <BenefitCard key={`benefit_${index}`} {...item} />
        ))}
      </div>
    </section>
  );
}
