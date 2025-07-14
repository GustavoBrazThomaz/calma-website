import { motion } from "framer-motion";

export function Ipad() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      className="border-2 border-gray-300 rounded-[26px] z-10 w-[438px] h-[472px] shadow hidden max-lg:block max-sm:hidden"
    >
      <div className="relative w-[434px] h-full border-4 z-20 rounded-3xl ">
        <div className="relative w-full h-full flex rounded-[20px] bg-[url('/assets/calma-dashboard-tablet.png')] bg-contain bg-no-repeat" />
      </div>
    </motion.div>
  );
}
