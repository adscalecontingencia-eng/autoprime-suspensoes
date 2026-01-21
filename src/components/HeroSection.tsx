import { Play, MapPin, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

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
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/10 border border-primary/30 mb-4 md:mb-6">
            <MapPin className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span className="text-xs md:text-sm text-muted-foreground">Conselheiro Lafaiete - MG</span>
          </div>

          {/* Logo */}
          <img 
            src={logo} 
            alt="Auto Prime Suspensões" 
            className="h-16 md:h-24 lg:h-32 w-auto mx-auto mb-4 md:mb-6"
          />

          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8 px-2">
            Especialistas em suspensão automotiva. Qualidade, confiança e o melhor atendimento para o seu veículo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <a
              href="#videos"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground rounded-lg font-display font-semibold text-base md:text-lg hover:shadow-glow transition-all hover:scale-105"
            >
              <Play className="w-4 h-4 md:w-5 md:h-5" />
              Ver Trabalhos
            </a>
            <a
              href="#sobre"
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border border-border text-foreground rounded-lg font-display font-semibold text-base md:text-lg hover:bg-secondary transition-colors text-center"
            >
              Conhecer a Oficina
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-10 md:mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <span className="block font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary">10+</span>
              <span className="text-xs md:text-sm text-muted-foreground">Anos de Experiência</span>
            </div>
            <div className="text-center">
              <span className="block font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary">5000+</span>
              <span className="text-xs md:text-sm text-muted-foreground">Clientes Satisfeitos</span>
            </div>
            <div className="text-center">
              <span className="block font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary">100%</span>
              <span className="text-xs md:text-sm text-muted-foreground">Garantia de Serviço</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
