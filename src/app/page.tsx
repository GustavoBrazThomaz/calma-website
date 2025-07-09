import { AppBar } from "@/ui/components/AppBar";
import { BenefitCard } from "@/ui/components/BenefitCard";
import { Notebook } from "@/ui/components/Notebook";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-8 py-4">
      <div className="flex items-center gap-2">
        <Image
          className="pointer-events-none"
          width={40}
          height={40}
          src={"/assets/calma.png"}
          alt="logo"
        />
        <p className=" mt-1 text-xl font-semi">Calma</p>
      </div>
      <AppBar />

      <section className="flex flex-col items-center justify-center h-dvh gap-16">
        <div className="space-y-4 text-center">
          <h1 className="text-9xl font-serif">Calma</h1>
          <h2 className="text-3xl">Organize com calma. Atenda com foco.</h2>
        </div>
        <div className="relative w-full flex justify-center">
          <Notebook />
          <div className="h-2/3 rounded-[48px] w-[80%] absolute bottom-[-2px] bg-orange-300" />
        </div>
      </section>

      <div className="w-full flex justify-center">
        <div className="w-[80%] border-1 h-[1px] border-gray-200 fle" />
      </div>

      <section className="h-dvh flex flex-col items-center ">
        <div className="text-center space-y-4 mt-24">
          <h1 className="font-serif text-6xl">Benefícios</h1>
          <h2 className="text-2xl">
            Descubra como o Calma pode transformar sua prática profissional
          </h2>
        </div>

        <div className="flex flex-wrap gap-8 mt-24">
          <BenefitCard />
          <BenefitCard />
          <BenefitCard />
        </div>
      </section>
    </div>
  );
}
