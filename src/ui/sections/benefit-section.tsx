"use client";
import { Clock, Shield, Users } from "lucide-react";
import { BenefitCard } from "../components/benefit-card";
import { motion } from "framer-motion";
import { fadeIn } from "../animations";

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
    <section className="pb-24 flex flex-col items-center space-y-32 max-sm:space-y-8 max-sm:pb-12 max-sm:-mt-16">
      <div className="text-center space-y-4 mt-24">
        <motion.h1
          {...fadeIn}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-6xl max-sm:text-4xl"
        >
          Benefícios
        </motion.h1>
        <motion.h2
          {...fadeIn}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-2xl text-gray-500 max-sm:text-xl"
        >
          Descubra como o Calma pode transformar sua prática profissional
        </motion.h2>
      </div>

      <div className="flex flex-wrap gap-8">
        {benefits.map((item, index) => (
          <motion.div
            key={`benefit_${index}`}
            initial={{ y: "-40px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <BenefitCard {...item} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
