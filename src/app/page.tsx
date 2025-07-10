import { AppBar } from "@/ui/components/app-bar";
import { Divider } from "@/ui/components/divider";
import { BenefitSection } from "@/ui/sections/benefit-section";
import { Footer } from "@/ui/sections/footer";
import { MainSection } from "@/ui/sections/main-section";
import { ReadySection } from "@/ui/sections/ready-section";
import { ResourceSection } from "@/ui/sections/resource-section";
import { Reviews } from "@/ui/sections/reviews-section";

export default function Home() {
  return (
    <>
      <div className="px-8 py-4">
        <AppBar />
        <MainSection />
        <Divider />
        <BenefitSection />
        <Divider />
        <ResourceSection />
        <Divider />
        <Reviews />
      </div>
      <ReadySection />
      <Footer />
    </>
  );
}
