"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MacBook() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      className="border-2 border-b-0 border-gray-300 rounded-t-[26px] z-10 w-[772px] h-[452px] shadow max-sm:hidden"
    >
      <div className="relative w-[768px] h-[450px] border-16 border-b-0 rounded-t-3xl bg-black">
        <div className="h-6 w-full bg-[#3E3635] rounded-t-xl flex justify-between">
          <div className="text-sm flex gap-2 p-2 [&_div]:size-2 [&_div]:rounded-full">
            <div className="bg-red-400" />
            <div className="bg-amber-400" />
            <div className="bg-emerald-400" />
          </div>
        </div>
        <div className="relative w-full h-full">
          <Image
            fill
            src={"/assets/calma-dashboard.png"}
            alt="calma-dashboard"
            className=" pointer-events-none object-contain -mt-[12.3px]"
          />
        </div>
      </div>
    </motion.div>
  );
}
