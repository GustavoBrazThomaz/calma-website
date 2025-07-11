import dayjs from "dayjs";
import { motion } from "framer-motion";
import { BatteryMedium, Wifi } from "lucide-react";

export function Iphone() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      className="border-2  border-gray-300 rounded-[26px] z-10 w-[200px] h-[355px] shadow hidden max-sm:block"
    >
      <div className="relative w-[196px] h-full border-4 z-20 rounded-3xl pt-5">
        <p className="text-[6px] absolute left-3 top-2">
          {dayjs(new Date()).format("HH:mm")}
        </p>
        <div className="absolute w-12 h-3 bg-black top-1 left-1/2 transform -translate-x-1/2 rounded-full" />
        <Wifi className="absolute top-1.5 right-8 size-2" />
        <BatteryMedium className="absolute top-1.5 right-4 size-2" />
        <div className="relative w-full h-full bg-[url('/assets/calma-dashboard-mobile.png')] bg-cover bg-center flex  rounded-b-[20px] pt-4" />
      </div>
    </motion.div>
  );
}
