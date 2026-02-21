const OfferSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-16 max-w-2xl text-center space-y-6">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Oferta especial
        </p>
        <div className="space-y-2">
          <p className="text-2xl md:text-3xl text-muted-foreground/50 line-through font-display">
            R$ 119,90
          </p>
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-display">
            HOJE POR R$ 89,90
          </p>
        </div>
        <div className="text-muted-foreground text-sm md:text-base leading-relaxed space-y-1 pt-4">
          <p>Condição especial por tempo limitado.</p>
          <p>Produção controlada.</p>
          <p>Peças selecionadas.</p>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
