import PlayNav from "@/components/PlayNav";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import ConceptSection from "@/components/ConceptSection";
import BenefitsSection from "@/components/BenefitsSection";
import PersuasionBlock from "@/components/PersuasionBlock";
import FAQSection from "@/components/FAQSection";
import PlayFooter from "@/components/PlayFooter";

const Index = () => {
  return (
    <main className="min-h-screen">
      <PlayNav />
      <HeroSection />
      <ProductSection />
      <ConceptSection />
      <BenefitsSection />
      <PersuasionBlock />
      <FAQSection />
      <PlayFooter />
    </main>
  );
};

export default Index;
