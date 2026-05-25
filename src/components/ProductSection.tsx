import { useState } from "react";
import blackMain from "@/assets/black-main.png";
import blackDetail1 from "@/assets/black-detail1.png";
import blackDetail2 from "@/assets/black-detail2.jpeg";
import whiteMain from "@/assets/white-main.png";
import whiteDetail1 from "@/assets/white-detail1.png";
import whiteDetail2 from "@/assets/white-detail2.png";
import navyMain from "@/assets/navy-main.png";
import navyDetail from "@/assets/navy-detail.png";

const sizes = ["P", "M", "G", "GG"];

const WHATSAPP_BASE =
  "https://wa.me/5598991564356?text=Oi,%20quero%20comprar%20a%20Camiseta%20Play.%0A%0ATamanho:%20";

type Product = {
  id: string;
  name: string;
  colorLabel: string;
  images: string[];
  oldPrice: string;
  price: string;
  badges: string[];
  bullets: string[];
  cta: string;
};

const products: Product[] = [
  {
    id: "navy",
    name: "Camiseta Cotton Essencial — Azul Marinho",
    colorLabel: "Azul%20Marinho",
    images: [navyMain, navyDetail],
    oldPrice: "R$ 99,90",
    price: "R$ 69,90",
    badges: ["LANÇAMENTO"],
    bullets: [
      "Cotton Premium 180g/m²",
      "Composição com elastano — caimento impecável",
      "Toque ultra macio",
      "Gola careca 2cm",
      "Estampa minimalista na manga esquerda",
      "Pré-lavada",
    ],
    cta: "GARANTIR NO LANÇAMENTO",
  },
  {
    id: "preta",
    name: "Camiseta Play — Preta",
    colorLabel: "Preta",
    images: [blackMain, blackDetail1, blackDetail2],
    oldPrice: "R$ 119,90",
    price: "R$ 59,90",
    badges: [],
    bullets: [
      "Algodão premium",
      "Modelagem moderna",
      "Toque macio e estruturado",
      "Não fica transparente",
      "Alta durabilidade",
      "Essencial para qualquer ocasião",
    ],
    cta: "COMPRAR NO WHATSAPP",
  },
  {
    id: "branca",
    name: "Camiseta Play — Branca",
    colorLabel: "Branca",
    images: [whiteMain, whiteDetail1, whiteDetail2],
    oldPrice: "R$ 119,90",
    price: "R$ 59,90",
    badges: [],
    bullets: [
      "Algodão premium",
      "Modelagem moderna",
      "Toque macio e estruturado",
      "Não fica transparente",
      "Alta durabilidade",
      "Essencial para qualquer ocasião",
    ],
    cta: "COMPRAR NO WHATSAPP",
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [size, setSize] = useState("M");

  const whatsappLink = `${WHATSAPP_BASE}${size}%0ACor:%20${product.colorLabel}`;

  return (
    <article
      className="flex flex-col p-6 md:p-8 rounded-sm"
      style={{ backgroundColor: "#F7F7F7" }}
    >
      <div className="aspect-square overflow-hidden rounded-sm bg-white">
        <img
          key={activeImage}
          src={product.images[activeImage]}
          alt={product.name}
          className="w-full h-full object-cover animate-fade-in"
          loading="lazy"
        />
      </div>

      {product.images.length > 1 && (
        <div className="flex gap-3 mt-4">
          {product.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(i)}
              className={`w-16 h-16 overflow-hidden rounded-sm border-2 transition-all bg-white ${
                activeImage === i ? "border-black" : "border-transparent"
              }`}
              style={{ borderColor: activeImage === i ? "#000" : "#E5E5E5" }}
              aria-label={`Imagem ${i + 1}`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {product.badges.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-6">
          {product.badges.map((b) => (
            <span
              key={b}
              className="text-[10px] uppercase tracking-[0.15em] font-display font-semibold px-2.5 py-1 rounded-sm"
              style={{ backgroundColor: "#000", color: "#FFF" }}
            >
              {b}
            </span>
          ))}
        </div>
      )}

      <h3 className="font-display text-lg font-bold mt-4" style={{ color: "#000" }}>
        {product.name}
      </h3>

      <div className="flex items-baseline gap-3 mt-2">
        <span className="text-sm line-through" style={{ color: "#999" }}>
          {product.oldPrice}
        </span>
        <span className="font-display text-2xl font-bold" style={{ color: "#000" }}>
          {product.price}
        </span>
      </div>

      <div className="mt-6">
        <p
          className="text-[11px] uppercase tracking-[0.2em] font-display mb-2"
          style={{ color: "#999" }}
        >
          Tamanho — {size}
        </p>
        <div className="flex gap-2">
          {sizes.map((s) => {
            const selected = size === s;
            return (
              <button
                key={s}
                onClick={() => setSize(s)}
                className="w-11 h-11 flex items-center justify-center text-sm font-display border transition-colors rounded-sm"
                style={{
                  backgroundColor: selected ? "#000" : "#FFF",
                  color: selected ? "#FFF" : "#000",
                  borderColor: "#000",
                }}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>

      <ul className="mt-6 space-y-2 flex-1">
        {product.bullets.map((b) => (
          <li
            key={b}
            className="text-sm flex items-start gap-2"
            style={{ color: "#000" }}
          >
            <span style={{ color: "#999" }}>·</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 w-full h-14 flex items-center justify-center text-sm font-display font-semibold uppercase tracking-[0.15em] rounded-none transition-opacity hover:opacity-90"
        style={{ backgroundColor: "#000", color: "#FFF" }}
      >
        {product.cta}
      </a>
    </article>
  );
};

const LineDivider = ({ label }: { label: string }) => (
  <div className="col-span-full flex items-center gap-4 my-4">
    <div className="flex-1 h-px" style={{ backgroundColor: "#E5E5E5" }} />
    <span
      className="text-[11px] uppercase font-display tracking-[0.3em]"
      style={{ color: "#999" }}
    >
      — {label} —
    </span>
    <div className="flex-1 h-px" style={{ backgroundColor: "#E5E5E5" }} />
  </div>
);

const ProductSection = () => {
  return (
    <section id="produto" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {casualProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}

          <LineDivider label="LINHA COTTON" />

          <div className="lg:col-start-2">
            <ProductCard product={cottonProduct} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
