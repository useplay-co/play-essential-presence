const PriceStrip = () => {
  return (
    <section className="py-10 bg-secondary">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
        <p className="text-lg text-muted-foreground line-through font-display">
          R$ 119,90
        </p>
        <p className="text-2xl md:text-3xl font-bold text-foreground font-display">
          R$ 89,90
        </p>
        <span className="bg-foreground text-background font-display text-xs uppercase tracking-[0.15em] px-3 py-1.5 rounded-sm font-bold">
          -25% OFF
        </span>
      </div>
    </section>
  );
};

export default PriceStrip;
