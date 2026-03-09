import UrgencyBar from "@/components/UrgencyBar";
import PlayNav from "@/components/PlayNav";
import HeroSection from "@/components/HeroSection";
import PriceStrip from "@/components/PriceStrip";
import ProductSection from "@/components/ProductSection";
import ConceptSection from "@/components/ConceptSection";
import BenefitsSection from "@/components/BenefitsSection";
import PlayFooter from "@/components/PlayFooter";

const Index = () => {
  return (
    <main className="min-h-screen">
      <UrgencyBar />
      <PlayNav />
      <HeroSection />
      <PriceStrip />
      <ProductSection />
      <ConceptSection />
      <BenefitsSection />
      <PlayFooter />
    </main>
  );
};

export default Index;
