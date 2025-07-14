"use client";
import { Check } from "lucide-react";
import Image from "next/image";

import { motion } from "framer-motion";
import { fadeInLeftToRight, fadeInRightToLeft } from "../animations";
import { Divider } from "../components/divider";

export function ResourceSection() {
  return (
    <section className="pb-24 max-sm:pb-8 max-sm:mt-8 mt-24 flex flex-col items-center space-y-48 max-sm:space-y-12">
      <div className="space-y-4 text-center">
        <h1 className="text-6xl max-sm:text-4xl font-serif">Recursos</h1>
        <h2 className="text-2xl max-sm:text-xl text-gray-500">
          Tudo que você precisa para uma prática psicológica moderna
        </h2>
      </div>

      <div className="flex max-sm:gap-8 max-sm:flex-col max-xl:gap-8 max-sm:items-center space-y-4 justify-center gap-48 w-full mb-0">
        <motion.div {...fadeInLeftToRight} className="space-y-12">
          <div className="space-y-4 text-center">
            <p className="text-3xl max-sm:text-2xl">Prontuário Digital</p>
            <p className="text-xl max-w-sm max-sm:text-lg text-gray-500">
              Registre sessões, evolução e observações de forma organizada e
              totalmente segura.
            </p>
          </div>
          <ul className="[&_li]:flex [&_li]:gap-2 [&_li]:max-sm:justify-center space-y-4 text-gray-500">
            <li>
              <Check strokeWidth={0.8} className="text-orange-400" /> Histórico
              completo do paciente
            </li>
            <li>
              <Check strokeWidth={0.8} className="text-orange-400" /> Anotações
              de sessão estruturadas
            </li>
            <li>
              <Check strokeWidth={0.8} className="text-orange-400" /> Backup
              automático na nuvem
            </li>
          </ul>
        </motion.div>
        <motion.div
          {...fadeInRightToLeft}
          whileHover={{
            scale: 1.1,
          }}
          className="size-96 max-sm:size-72 max-sm:-top-6  relative -top-12 p-6 bg-orange-300 rounded-4xl "
        >
          <Image
            className="rounded-4xl p-2 object-cover "
            src="https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg"
            alt="camomila"
            fill
          />
        </motion.div>
      </div>
      <Divider />
      <div className="flex max-sm:flex-col-reverse max-sm:gap-8 max-xl:gap-8 max-sm:items-center space-y-4 justify-center gap-48 w-full -mt-24 max-sm:-mt-4">
        <motion.div
          {...fadeInLeftToRight}
          className="size-96 max-sm:size-72 max-sm:-top-4 relative -top-12 p-6 bg-orange-300 rounded-4xl"
        >
          <Image
            className="rounded-4xl p-2 object-cover "
            src="https://images.pexels.com/photos/196650/pexels-photo-196650.jpeg"
            alt="agenda"
            fill
          />
        </motion.div>

        <motion.div
          {...fadeInRightToLeft}
          className="space-y-12 max-sm:text-center"
        >
          <div className="space-y-4">
            <p className="text-3xl">Agenda Inteligente</p>
            <p className="text-xl max-w-sm text-gray-500">
              Gerencie horários, envie lembretes e confirme consultas
              automaticamente.
            </p>
          </div>
          <ul className="[&_li]:flex [&_li]:gap-2 space-y-4 text-gray-500  [&_li]:max-sm:justify-center ">
            <li>
              <Check strokeWidth={0.8} className="text-orange-400" />
              Sincronização com calendário
            </li>
            <li>
              <Check strokeWidth={0.8} className="text-orange-400" />
              Reagendamento simplificado
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
