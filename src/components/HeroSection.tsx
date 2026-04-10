import heroImg from "@/assets/hero-play.jpg";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK =
  "https://wa.me/5598991564356?text=Oi,%20quero%20comprar%20a%20Camiseta%20Play%20por%20R$69,90.%0A%0ATamanho:%20(P/M/G/GG)%0ACor:%20(Preta/Branca)";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-play-offwhite overflow-hidden pt-[40px]">
      <div className="container mx-auto px-6 lg:px-16 py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1 space-y-8 animate-fade-up">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Play — Essentials
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground">
              O essencial não
              <br />
              chama atenção.
              <br />
              Ele impõe respeito.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
              Camiseta premium para homens que entendem que presença não precisa
              de exagero.
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="h-14 px-10">
                Garantir minha Play agora
              </Button>
            </a>
            <div className="space-y-1 pt-1">
              <p className="text-sm text-muted-foreground">
                <span className="line-through opacity-60">R$ 119,90</span>
                <span className="font-display font-bold text-foreground ml-2">
                  por R$ 69,90
                </span>
              </p>
              <p className="text-xs text-muted-foreground/70 tracking-wide">
                Estoque limitado.
              </p>
            </div>
          </div>
          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in">
            <div className="relative w-full max-w-lg">
              <img
                src={heroImg}
                alt="Modelo vestindo camiseta Play preta premium"
                className="w-full h-auto object-cover rounded-sm"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
