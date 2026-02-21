import { useState } from "react";
import heroImg from "@/assets/hero-play.jpg";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/5598991564356?text=Oi,%20quero%20garantir%20minha%20camisa%20Play%20por%20R$89,90";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-play-offwhite overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16 py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1 space-y-8 animate-fade-up">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Play — Essentials
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground">
              Menos excesso.
              <br />
              Mais presença.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
              A camiseta essencial para homens que entendem o poder do básico bem
              feito.
            </p>
            <p className="font-display text-2xl md:text-3xl font-bold text-foreground">
              R$ 89,90
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="h-14 px-10">
                Comprar agora no WhatsApp
              </Button>
            </a>
            <div className="flex flex-wrap gap-6 pt-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-foreground" /> Envio rápido
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-foreground" /> Troca fácil
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-foreground" /> Atendimento direto
              </span>
            </div>
          </div>
          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in">
            <div className="relative w-full max-w-lg">
              <img
                src={heroImg}
                alt="Modelo vestindo camiseta Play preta premium"
                className="w-full h-auto object-cover rounded-sm"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
