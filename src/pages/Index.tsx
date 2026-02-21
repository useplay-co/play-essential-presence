import PlayNav from "@/components/PlayNav";
import HeroSection from "@/components/HeroSection";
import OfferSection from "@/components/OfferSection";
import ProductSection from "@/components/ProductSection";
import BenefitsSection from "@/components/BenefitsSection";
import ConceptSection from "@/components/ConceptSection";
import PersuasionBlock from "@/components/PersuasionBlock";
import FAQSection from "@/components/FAQSection";
import PlayFooter from "@/components/PlayFooter";

const Index = () => {
  return (
    <main className="min-h-screen">
      <PlayNav />
      <HeroSection />
      <OfferSection />
      <ProductSection />
      <BenefitsSection />
      <ConceptSection />
      <PersuasionBlock />
      <FAQSection />
      <PlayFooter />
    </main>
  );
};

export default Index;
