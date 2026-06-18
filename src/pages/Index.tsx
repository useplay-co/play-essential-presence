import { useState } from "react";
import blackMain from "@/assets/black-main.png";
import whiteMain from "@/assets/white-main.png";
import navyMain from "@/assets/navy-main.png";
import pimaSleeve from "@/assets/pima-sleeve.jpeg.asset.json";
import pimaNeck from "@/assets/pima-neck.jpeg.asset.json";

const featuredImages = [pimaSleeve.url, pimaNeck.url, blackMain];

const WA = "https://wa.me/5598991564356?text=";

type Product = {
  name: string;
  description: string;
  price: string;
  image: string;
  color: string;
};

const featured: Product = {
  name: "PIMA ESSENCE PRETA",
  description:
    "Algodão Pima premium. Caimento estruturado, toque seco e durabilidade superior. A peça definitiva do guarda-roupa essencial.",
  price: "R$ 109,90",
  image: featuredImages[0],
  color: "Preta",
};

const secondary: Product[] = [
  {
    name: "ESSENCE BRANCA",
    description: "Algodão premium. Caimento preciso.",
    price: "R$ 49,99",
    image: whiteMain,
    color: "Branca",
  },
  {
    name: "ESSENCE AZUL",
    description: "Algodão premium. Caimento preciso.",
    price: "R$ 69,90",
    image: navyMain,
    color: "Azul%20Marinho",
  },
];

const buyLink = (p: Product) =>
  `${WA}Oi,%20quero%20a%20${encodeURIComponent(p.name)}%20por%20${encodeURIComponent(
    p.price
  )}.%0A%0ATamanho:%20(P/M/G/GG)%0ACor:%20${p.color}`;

const Index = () => {
  return (
    <main className="min-h-screen bg-white text-[#0a0a0a] font-body">
      {/* Header */}
      <header className="pt-10 pb-6">
        <h1 className="font-display text-3xl md:text-4xl tracking-[0.4em] text-center font-light">
          PLAY
        </h1>
        <div className="mt-6 h-px bg-[#0a0a0a]/20 w-full" />
      </header>

      {/* Hero */}
      <section className="px-6 md:px-16 py-24 md:py-40 text-center">
        <h2 className="font-display text-5xl md:text-8xl font-light leading-[1.05] tracking-tight">
          Essencial.
          <br />
          Sem excessos.
        </h2>
        <p className="mt-8 text-xs md:text-sm uppercase tracking-[0.35em] font-light">
          Algodão premium. Caimento preciso.
        </p>
      </section>

      {/* Featured product */}
      <section className="px-6 md:px-16 pb-32 md:pb-48">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-8">
            <img
              src={featured.image}
              alt={featured.name}
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>
          <div className="md:col-span-4 space-y-8">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.35em] font-light">
              Em destaque
            </p>
            <h3 className="font-display text-3xl md:text-5xl font-light leading-tight">
              {featured.name}
            </h3>
            <p className="text-base md:text-lg font-light leading-relaxed max-w-md">
              {featured.description}
            </p>
            <div className="h-px bg-[#0a0a0a]/20 w-12" />
            <p className="font-display text-3xl font-light">{featured.price}</p>
            <a
              href={buyLink(featured)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#0a0a0a] text-white px-10 py-4 text-xs uppercase tracking-[0.3em] font-light hover:opacity-80 transition-opacity"
            >
              Comprar agora
            </a>
          </div>
        </div>
      </section>

      {/* Secondary products */}
      <section className="px-6 md:px-16 pb-32 md:pb-48">
        <p className="text-[10px] md:text-xs uppercase tracking-[0.35em] font-light text-center mb-16">
          Coleção
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {secondary.map((p) => (
            <article key={p.name} className="space-y-6">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <h3 className="font-display text-2xl md:text-3xl font-light">
                {p.name}
              </h3>
              <p className="text-sm font-light leading-relaxed">
                {p.description}
              </p>
              <div className="h-px bg-[#0a0a0a]/20 w-10" />
              <p className="font-display text-2xl font-light">{p.price}</p>
              <a
                href={buyLink(p)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#0a0a0a] text-white px-8 py-3 text-xs uppercase tracking-[0.3em] font-light hover:opacity-80 transition-opacity"
              >
                Comprar
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#0a0a0a]/20 py-12 px-6 md:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] md:text-xs uppercase tracking-[0.3em] font-light">
          <p className="font-display text-sm tracking-[0.3em]">PLAY © 2026</p>
          <p>@useplay</p>
          <p>useplay.co</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
