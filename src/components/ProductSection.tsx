import { useState } from "react";
import { Button } from "@/components/ui/button";
import productBlack from "@/assets/product-black.jpg";
import productWhite from "@/assets/product-white.jpg";

const sizes = ["P", "M", "G", "GG"];
const colors = [
  { name: "Preta", value: "preta", hex: "hsl(0 0% 8%)" },
  { name: "Branca", value: "branca", hex: "hsl(0 0% 96%)" },
];

const WHATSAPP_BASE =
  "https://wa.me/5598991564356?text=Oi,%20quero%20comprar%20a%20Camiseta%20Play%20por%20R$89,90.%0A%0ATamanho:%20";

const features = [
  "Algodão 81% premium",
  "Modelagem masculina moderna",
  "Toque macio e estruturado",
  "Não fica transparente",
  "Alta durabilidade",
  "Disponível em preta e branca",
];

const ProductSection = () => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("preta");

  const colorName = colors.find((c) => c.value === selectedColor)?.name || selectedColor;
  const whatsappLink = `${WHATSAPP_BASE}${selectedSize}%0ACor:%20${colorName}`;

  return (
    <section id="produto" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-play-offwhite rounded-sm overflow-hidden flex items-center justify-center">
              <img
                src={selectedColor === "preta" ? productBlack : productWhite}
                alt={`Camiseta Play ${selectedColor}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>

          {/* Details */}
          <div className="space-y-8 lg:sticky lg:top-24">
            <div className="space-y-3">
              <p className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Camiseta Básica Premium
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display">
                Play
              </h2>
              <div className="flex items-baseline gap-3">
                <p className="text-lg text-muted-foreground/50 line-through">
                  R$ 119,90
                </p>
                <p className="font-display text-2xl font-bold text-foreground">
                  R$ 89,90
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Desenvolvida com algodão 81% de alta qualidade, a camiseta Play
              oferece toque macio, estrutura firme e caimento impecável. Um
              essencial elevado ao mais alto padrão.
            </p>

            {/* Color */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] font-display text-foreground">
                Cor — {colors.find((c) => c.value === selectedColor)?.name}
              </p>
              <div className="flex gap-3">
                {colors.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => setSelectedColor(c.value)}
                    className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                      selectedColor === c.value
                        ? "border-foreground scale-110"
                        : "border-border hover:border-muted-foreground"
                    }`}
                    style={{ backgroundColor: c.hex }}
                    aria-label={c.name}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] font-display text-foreground">
                Tamanho — {selectedSize}
              </p>
              <div className="flex gap-3">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`w-12 h-12 flex items-center justify-center text-sm font-display tracking-wide border transition-all duration-200 rounded-sm ${
                      selectedSize === s
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background text-foreground border-border hover:border-foreground"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="w-full h-14 mt-4">
                Comprar no WhatsApp
              </Button>
            </a>

            {/* Features */}
            <div className="border-t border-border pt-8 space-y-3">
              {features.map((f) => (
                <p key={f} className="text-sm text-muted-foreground flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-foreground inline-block" />
                  {f}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
