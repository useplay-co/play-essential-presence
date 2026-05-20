import { useState } from "react";
import blackMain from "@/assets/black-main.png";
import whiteMain from "@/assets/white-main.png";
import navyMain from "@/assets/navy-main.png";

const sizes = ["P", "M", "G", "GG"];

const KitSection = () => {
  const [size, setSize] = useState("M");

  const whatsappLink = `https://wa.me/5598991564356?text=Oi,%20quero%20o%20Kit%20Play%20Essencial%20(Preta%20%2B%20Branca%20%2B%20Azul%20Marinho)%20por%20R$169,90%20com%20frete%20gr%C3%A1tis.%0A%0ATamanho:%20${size}`;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
        <article
          className="flex flex-col p-6 md:p-10 rounded-sm"
          style={{ backgroundColor: "#F7F7F7" }}
        >
          <div className="flex flex-wrap gap-2 mb-6">
            <span
              className="text-[10px] uppercase tracking-[0.15em] font-display font-semibold px-2.5 py-1 rounded-sm"
              style={{ backgroundColor: "#000", color: "#FFF" }}
            >
              OFERTA DO ANO
            </span>
            <span
              className="text-[10px] uppercase tracking-[0.15em] font-display font-semibold px-2.5 py-1 rounded-sm border"
              style={{ borderColor: "#000", color: "#000" }}
            >
              FRETE GRÁTIS
            </span>
          </div>

          <h2
            className="font-display text-2xl md:text-4xl font-bold leading-tight"
            style={{ color: "#000" }}
          >
            Kit Play Essencial
          </h2>
          <p className="text-sm md:text-base mt-2" style={{ color: "#666" }}>
            3 camisetas: 1 Preta + 1 Branca + 1 Azul Marinho (Cotton)
          </p>

          <div className="grid grid-cols-3 gap-3 md:gap-6 mt-6">
            {[blackMain, whiteMain, navyMain].map((img, i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden rounded-sm bg-white"
              >
                <img
                  src={img}
                  alt="Camiseta do Kit"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="flex items-baseline gap-3 mt-8">
            <span className="text-sm line-through" style={{ color: "#999" }}>
              R$ 199,70
            </span>
            <span
              className="font-display text-3xl md:text-4xl font-bold"
              style={{ color: "#000" }}
            >
              R$ 169,90
            </span>
          </div>
          <p className="text-xs mt-1" style={{ color: "#666" }}>
            ou em até 3x sem juros · frete grátis incluso
          </p>

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
                    className="w-12 h-12 flex items-center justify-center text-sm font-display border rounded-sm transition-colors"
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

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-full h-14 flex items-center justify-center text-sm font-display font-semibold uppercase tracking-[0.15em] rounded-none transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#000", color: "#FFF" }}
          >
            GARANTIR KIT COM FRETE GRÁTIS
          </a>
        </article>
      </div>
    </section>
  );
};

export default KitSection;
