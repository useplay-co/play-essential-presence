import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "O tecido é resistente?",
    a: "Sim. Algodão 81% premium com estrutura firme, garantindo alta durabilidade e caimento impecável lavagem após lavagem.",
  },
  {
    q: "Posso trocar se não servir?",
    a: "Sim. Oferecemos troca simples e rápida para garantir sua total satisfação.",
  },
  {
    q: "Quanto tempo para envio?",
    a: "Envio rápido após confirmação do pedido. Você receberá o código de rastreio diretamente no WhatsApp.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-play-offwhite">
      <div className="container mx-auto px-6 lg:px-16 max-w-2xl">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground text-center mb-16">
          Perguntas Frequentes
        </p>
        <div className="space-y-0 border-t border-border">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-border">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="font-display text-base font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-40 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
