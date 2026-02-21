import { Button } from "@/components/ui/button";

const WHATSAPP_LINK =
  "https://wa.me/5598991564356?text=Oi,%20quero%20comprar%20a%20Camiseta%20Play%20por%20R$89,90.%0A%0ATamanho:%20(P/M/G/GG)%0ACor:%20(Preta/Branca)";

const PersuasionBlock = () => {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-16 max-w-3xl text-center space-y-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-display">
          Você não precisa de mais roupas.
          <br />
          Precisa da peça certa.
        </h2>
        <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
          Uma camiseta que combina com tudo. Que eleva qualquer look. Que
          transmite confiança sem esforço.
        </p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            size="lg"
            className="h-14 px-10 mt-4 font-display uppercase tracking-[0.15em] text-xs bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-none transition-all duration-300"
          >
            Quero minha Play por R$ 89,90
          </Button>
        </a>
      </div>
    </section>
  );
};

export default PersuasionBlock;
