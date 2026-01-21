import { Play, MapPin, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-14 md:pt-20 pb-4">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 md:px-4 py-1 md:py-2 rounded-full bg-primary/10 border border-primary/30 mb-3 md:mb-6">
            <MapPin className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span className="text-[10px] md:text-sm text-muted-foreground">Conselheiro Lafaiete - MG</span>
          </div>

          {/* Logo - Much larger on mobile */}
          <img 
            src={logo} 
            alt="Auto Prime Suspensões" 
            className="h-24 md:h-24 lg:h-32 w-auto mx-auto mb-3 md:mb-6"
          />

          {/* Subtitle - More compact on mobile */}
          <p className="text-sm md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 md:mb-8 px-1 leading-tight md:leading-normal">
            Especialistas em suspensão automotiva. Qualidade e confiança para seu veículo.
          </p>

          {/* CTA Buttons - More compact on mobile */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4">
            <a
              href="#videos"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 md:px-8 py-2.5 md:py-4 bg-primary text-primary-foreground rounded-lg font-display font-semibold text-sm md:text-lg hover:shadow-glow transition-all hover:scale-105"
            >
              <Play className="w-4 h-4 md:w-5 md:h-5" />
              Ver Trabalhos
            </a>
            <a
              href="#sobre"
              className="w-full sm:w-auto px-5 md:px-8 py-2.5 md:py-4 border border-border text-foreground rounded-lg font-display font-semibold text-sm md:text-lg hover:bg-secondary transition-colors text-center"
            >
              Conhecer a Oficina
            </a>
          </div>

          {/* Stats - More compact on mobile */}
          <div className="grid grid-cols-3 gap-3 md:gap-8 mt-6 md:mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <span className="block font-display text-xl md:text-3xl lg:text-4xl font-bold text-primary">10+</span>
              <span className="text-[10px] md:text-sm text-muted-foreground leading-tight">Anos de Experiência</span>
            </div>
            <div className="text-center">
              <span className="block font-display text-xl md:text-3xl lg:text-4xl font-bold text-primary">5000+</span>
              <span className="text-[10px] md:text-sm text-muted-foreground leading-tight">Clientes Satisfeitos</span>
            </div>
            <div className="text-center">
              <span className="block font-display text-xl md:text-3xl lg:text-4xl font-bold text-primary">100%</span>
              <span className="text-[10px] md:text-sm text-muted-foreground leading-tight">Garantia de Serviço</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ChevronDown className="w-8 h-8 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
