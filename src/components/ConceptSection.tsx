const ConceptSection = () => {
  return (
    <section className="py-24 md:py-32 bg-play-offwhite">
      <div className="container mx-auto px-6 lg:px-16 max-w-3xl text-center space-y-8">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Conceito
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground font-display">
          O essencial não chama atenção.
          <br />
          Ele impõe respeito.
        </h2>
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-xl mx-auto">
          A Play nasce da ideia de que o verdadeiro estilo está no básico
          perfeito. Sem exagero. Sem excesso. Apenas presença.
        </p>
      </div>
    </section>
  );
};

export default ConceptSection;
