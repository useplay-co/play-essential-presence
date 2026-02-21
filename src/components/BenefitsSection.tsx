import { Sun, Shirt, Clock, Layers } from "lucide-react";

const benefits = [
  { icon: Sun, title: "Conforto o dia todo", desc: "Tecido leve que acompanha cada momento." },
  { icon: Shirt, title: "Caimento impecável", desc: "Modelagem que valoriza o corpo masculino." },
  { icon: Clock, title: "Estilo atemporal", desc: "Uma peça que nunca sai de moda." },
  { icon: Layers, title: "Versatilidade total", desc: "Combina com tudo, em qualquer ocasião." },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground text-center mb-16">
          Benefícios
        </p>
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
