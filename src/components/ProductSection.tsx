import { useState } from "react";
import { Button } from "@/components/ui/button";
import blackMain from "@/assets/black-main.png";
import blackDetail1 from "@/assets/black-detail1.png";
import blackDetail2 from "@/assets/black-detail2.jpeg";
import whiteMain from "@/assets/white-main.png";
import whiteDetail1 from "@/assets/white-detail1.png";
import whiteDetail2 from "@/assets/white-detail2.png";
import kitBoth from "@/assets/kit-both.jpeg";

const sizes = ["P", "M", "G", "GG"];

const colorOptions = [
  {
    name: "Preto (mais vendido 🔥)",
    value: "preta",
    hex: "hsl(0 0% 8%)",
    oldPrice: "R$ 119,90",
    price: "R$ 69,90",
    images: [blackMain, blackDetail1, blackDetail2],
    badge: null,
  },
  {
    name: "Branco",
    value: "branca",
    hex: "hsl(0 0% 96%)",
    oldPrice: "R$ 99,90",
    price: "R$ 59,90",
    images: [whiteMain, whiteDetail1, whiteDetail2],
    badge: null,
  },
  {
    name: "Kit (Branca + Preta)",
    value: "kit",
    hex: "linear-gradient(135deg, hsl(0 0% 8%) 50%, hsl(0 0% 96%) 50%)",
    oldPrice: "R$ 219,80",
    price: "R$ 119,90",
    images: [kitBoth],
    badge: null,
  },
];

const WHATSAPP_BASE =
  "https://wa.me/5598991564356?text=Oi,%20quero%20comprar%20a%20Camiseta%20Play.%0A%0ATamanho:%20";

const features = [
  "Algodão premium",
  "Modelagem moderna",
  "Toque macio e estruturado",
  "Não fica transparente",
  "Alta durabilidade",
  "Essencial para qualquer ocasião",
];

const ProductSection = () => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("preta");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const currentColor = colorOptions.find((c) => c.value === selectedColor);
  const images = currentColor?.images ?? [];

  const colorLabel =
    selectedColor === "preta"
      ? "Preta"
      : selectedColor === "branca"
      ? "Branca"
      : "Kit%20(Branca%20%2B%20Preta)";

  const whatsappLink = `${WHATSAPP_BASE}${selectedColor === "kit" ? "M" : selectedSize}%0ACor:%20${colorLabel}`;

  const handleColorChange = (value: string) => {
    setSelectedColor(value);
    setActiveImageIndex(0);
  };

  return (
    <section id="produto" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-play-offwhite rounded-sm overflow-hidden flex items-center justify-center">
              <img
                src={images[activeImageIndex] ?? images[0]}
                alt={`Camiseta Play ${selectedColor}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`w-20 h-20 rounded-sm overflow-hidden border-2 transition-all duration-200 ${
                      activeImageIndex === i
                        ? "border-foreground"
                        : "border-border hover:border-muted-foreground"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Detalhe ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
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
                  {currentColor?.oldPrice}
                </p>
                <p className="font-display text-2xl font-bold text-foreground">
                  {currentColor?.price}
                </p>
                {currentColor?.badge && (
                  <span className="text-[10px] uppercase tracking-[0.15em] font-display font-bold bg-foreground text-background px-2 py-1 rounded-sm">
                    {currentColor.badge}
                  </span>
                )}
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Desenvolvida com algodão premium, a camiseta Play oferece toque
              macio, estrutura firme e caimento impecável. Um essencial elevado
              ao mais alto padrão.
            </p>

            {/* Color */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] font-display text-foreground">
                Cor — {currentColor?.name}
              </p>
              <div className="flex gap-3 items-center">
                {colorOptions.map((c) => (
                  <div key={c.value} className="relative">
                    <button
                      onClick={() => handleColorChange(c.value)}
                      className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                        selectedColor === c.value
                          ? "border-foreground scale-110"
                          : "border-border hover:border-muted-foreground"
                      }`}
                      style={
                        c.value === "kit"
                          ? { background: c.hex }
                          : { backgroundColor: c.hex }
                      }
                      aria-label={c.name}
                    />
                    {c.badge && (
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] uppercase tracking-wider font-display text-muted-foreground">
                        {c.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Size */}
            {selectedColor !== "kit" && (
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
            )}

            {selectedColor === "kit" && (
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] font-display text-foreground">
                  Tamanho — {selectedSize}
                </p>
                <p className="text-xs text-muted-foreground">
                  Selecione o tamanho (mesmo para ambas)
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
            )}

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
