const PlayNav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-16 h-16 flex items-center justify-between">
        <a href="/" className="font-display text-xl font-bold tracking-tight text-foreground">
          Play
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#produto" className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors font-display">
            Produto
          </a>
          <a
            href="https://wa.me/5598991564356?text=Oi,%20quero%20comprar%20a%20Camiseta%20Play%20por%20R$89,90.%0A%0ATamanho:%20(P/M/G/GG)%0ACor:%20(Preta/Branca)"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.2em] bg-primary text-primary-foreground px-5 py-2.5 font-display hover:bg-primary/80 transition-colors rounded-sm"
          >
            Comprar
          </a>
        </div>
        <a
          href="https://wa.me/5598991564356?text=Oi,%20quero%20comprar%20a%20Camiseta%20Play%20por%20R$89,90.%0A%0ATamanho:%20(P/M/G/GG)%0ACor:%20(Preta/Branca)"
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden text-xs uppercase tracking-[0.2em] bg-primary text-primary-foreground px-4 py-2 font-display rounded-sm"
        >
          Comprar
        </a>
      </div>
    </nav>
  );
};

export default PlayNav;
