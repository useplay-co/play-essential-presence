import { Instagram, MessageCircle } from "lucide-react";

const PlayFooter = () => {
  return (
    <footer className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <p className="font-display text-2xl font-bold tracking-tight">
              Play
            </p>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              O básico que impõe respeito.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <p className="font-display text-xs uppercase tracking-[0.2em] text-primary-foreground/40">
              Informações
            </p>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="#produto" className="hover:text-primary-foreground transition-colors">
                  Produto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Política de Troca
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="font-display text-xs uppercase tracking-[0.2em] text-primary-foreground/40">
              Contato
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/5598991564356"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary-foreground/20 rounded-sm flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-primary-foreground/20 rounded-sm flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            <p className="text-sm text-primary-foreground/60">(98) 99156-4356</p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-12 border-t border-primary-foreground/10 text-center space-y-6">
          <p className="font-display text-lg font-semibold">
            Entre para o movimento Play.
          </p>
          <div className="flex max-w-sm mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 h-12 px-4 bg-primary-foreground/5 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30 text-sm focus:outline-none focus:border-primary-foreground/40 rounded-sm transition-colors"
            />
            <button className="h-12 px-6 bg-primary-foreground text-primary font-display text-xs uppercase tracking-[0.15em] hover:bg-primary-foreground/90 transition-colors rounded-sm ml-2">
              Entrar
            </button>
          </div>
          <p className="text-xs text-primary-foreground/30 pt-4">
            © {new Date().getFullYear()} Play. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PlayFooter;
