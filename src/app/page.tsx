import { AppBar } from "@/ui/components/AppBar";
import { Divider } from "@/ui/components/Divider";
import { BenefitSection } from "@/ui/sections/BenefitSection";
import { MainSection } from "@/ui/sections/MainSection";


export default function Home() {
  return (
    <div className="px-8 py-4">

      <AppBar />
      <MainSection />
      <Divider />
      <BenefitSection />
      <Divider />
    </div>
  );
}
