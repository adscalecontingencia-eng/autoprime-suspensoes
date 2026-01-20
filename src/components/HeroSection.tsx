import { Play, MapPin, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Conselheiro Lafaiete - MG</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
            <span className="text-foreground">AUTO PRIME</span>
            <br />
            <span className="text-gradient">SUSPENSÕES</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Especialistas em suspensão automotiva. Qualidade, confiança e o melhor atendimento para o seu veículo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#videos"
              className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-display font-semibold text-lg hover:shadow-glow transition-all hover:scale-105"
            >
              <Play className="w-5 h-5" />
              Ver Trabalhos
            </a>
            <a
              href="#sobre"
              className="px-8 py-4 border border-border text-foreground rounded-lg font-display font-semibold text-lg hover:bg-secondary transition-colors"
            >
              Conhecer a Oficina
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <span className="block font-display text-3xl md:text-4xl font-bold text-primary">10+</span>
              <span className="text-sm text-muted-foreground">Anos de Experiência</span>
            </div>
            <div className="text-center">
              <span className="block font-display text-3xl md:text-4xl font-bold text-primary">5000+</span>
              <span className="text-sm text-muted-foreground">Clientes Satisfeitos</span>
            </div>
            <div className="text-center">
              <span className="block font-display text-3xl md:text-4xl font-bold text-primary">100%</span>
              <span className="text-sm text-muted-foreground">Garantia de Serviço</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ChevronDown className="w-8 h-8 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
