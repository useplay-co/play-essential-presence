const ConceptSection = () => {
  return (
    <section className="py-24 md:py-32 bg-play-offwhite">
      <div className="container mx-auto px-6 lg:px-16 max-w-3xl text-center space-y-8">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Posicionamento
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground font-display">
          Escolhida por homens que entendem
          <br />
          o poder do essencial.
        </h2>
        <div className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-xl mx-auto space-y-1">
          <p>Sem excessos.</p>
          <p>Sem ruído.</p>
          <p>Só presença.</p>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
