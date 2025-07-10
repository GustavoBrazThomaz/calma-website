"use client";
import { motion } from "motion/react";
import { Notebook } from "../components";

export function MainSection() {
  return (
    <section className="flex flex-col items-center justify-center h-dvh gap-16">
      <div className="space-y-4 text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-9xl font-serif"
        >
          Calma
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl"
        >
          Organize com calma. Atenda com foco.
        </motion.h2>
      </div>
      <div className="relative w-full flex justify-center">
        <Notebook />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="h-2/3 rounded-[48px] w-[80%] absolute bottom-0 bg-orange-300 shadow"
        />
      </div>
    </section>
  );
}
