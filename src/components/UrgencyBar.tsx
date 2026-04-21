const UrgencyBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-foreground text-background text-center py-2.5 px-4">
      <p className="font-display text-xs tracking-[0.15em] uppercase">
        De <span className="line-through opacity-60">R$ 119,90</span> por{" "}
        <span className="font-bold">R$ 59,90</span> · ESTOQUE LIMITADO
      </p>
    </div>
  );
};

export default UrgencyBar;
