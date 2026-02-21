import { Sun, Shirt, Clock, Layers } from "lucide-react";

const benefits = [
  { icon: Shirt, title: "Caimento que valoriza o corpo", desc: "Modelagem pensada para o corpo masculino." },
  { icon: Sun, title: "Tecido confortável e estruturado", desc: "Algodão premium com toque macio e forma firme." },
  { icon: Clock, title: "Atemporal e versátil", desc: "Uma peça que funciona em qualquer ocasião." },
  { icon: Layers, title: "Minimalismo que transmite autoridade", desc: "O poder do básico bem feito." },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground text-center mb-4">
          Benefícios
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center font-display mb-16">
          Por que escolher a Play?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((b) => (
            <div key={b.title} className="text-center space-y-4 group">
              <div className="inline-flex items-center justify-center w-14 h-14 border border-border rounded-sm group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <b.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {b.title}
              </h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-16 text-base md:text-lg font-display">
          O básico certo muda tudo.
        </p>
      </div>
    </section>
  );
};

export default BenefitsSection;
