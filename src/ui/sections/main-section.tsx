"use client";
import { motion } from "framer-motion";
import { Iphone } from "../components/iphone";
import MacBook from "../components/mac-book";
import { Ipad } from "../components/ipad";

export function MainSection() {
  return (
    <section className="flex flex-col items-center justify-center h-dvh gap-16 max-sm:gap-6 w-full">
      <div className="space-y-4 text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-9xl font-serif max-sm:text-6xl"
        >
          Calma
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl max-sm:text-2xl"
        >
          Organize com calma. Atenda com foco.
        </motion.h2>
      </div>
      <div className="relative w-full flex justify-center ">
        <MacBook />
        <Iphone />
        <Ipad />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="h-2/3 max-sm:h-2/4 rounded-[48px] w-[70%] max-xl:w-[90%] max-sm:w-full absolute bottom-0 bg-orange-300 shadow"
        />
      </div>
    </section>
  );
}
