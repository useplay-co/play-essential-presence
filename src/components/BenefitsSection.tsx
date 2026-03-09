import { Shirt, Sun, Clock, Layers } from "lucide-react";

const benefits = [
  { icon: Sun, title: "Algodão premium confortável", desc: "Tecido macio e estruturado que mantém a forma." },
  { icon: Shirt, title: "Modelagem que valoriza o corpo", desc: "Caimento pensado para o corpo masculino." },
  { icon: Layers, title: "Minimalismo sofisticado", desc: "O poder do básico bem feito." },
  { icon: Clock, title: "Versátil para qualquer ocasião", desc: "Uma peça atemporal que funciona sempre." },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
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
      </div>
    </section>
  );
};

export default BenefitsSection;
