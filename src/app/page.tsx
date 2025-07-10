import { MainSection, BenefitSection, ResourceSection, Reviews, ReadySection, Footer } from "@/ui/sections";
import { AppBar, Divider } from "@/ui/components";


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
