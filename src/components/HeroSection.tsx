import { Play, MapPin, Navigation, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

// Coordenadas e place ID do pino oficial da oficina (mesmos da seção de Localização)
const shopCoords = "-20.6542032,-43.7749066";
const shopPlaceId = "0xa3dfe9622b7e39:0xa9108f79f777834c";
const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${shopCoords}&destination_place_id=${encodeURIComponent(shopPlaceId)}`;

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] flex items-start md:items-center justify-center overflow-hidden pt-12 md:pt-0"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-5 md:px-4 pt-4 md:pt-20 pb-8 md:pb-4">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          {/* Badge */}
          <div className="flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/10 border border-primary/30 mb-5 md:mb-6">
            <MapPin className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span className="text-xs md:text-sm text-muted-foreground">Conselheiro Lafaiete - MG</span>
          </div>
          </div>

          {/* H1 SEO */}
          <h1 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-sm md:max-w-none mx-auto mb-4 leading-snug md:leading-tight">
            Oficina em Conselheiro Lafaiete especializada em <span className="text-gradient">suspensão e amortecedores</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8 px-1 leading-relaxed md:leading-normal">
            Troca de amortecedores, revisão de suspensão, alinhamento 3D, balanceamento de rodas e direção hidráulica. Solicite seu orçamento pelo WhatsApp.
          </p>

          {/* CTA Buttons - More compact on mobile */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4">
            <a
              href="https://wa.me/5531988480488?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20servi%C3%A7o%20de%20suspens%C3%A3o."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 md:px-8 py-2.5 md:py-4 bg-primary text-primary-foreground rounded-lg font-display font-semibold text-sm md:text-lg hover:shadow-glow transition-all hover:scale-105"
            >
              <Play className="w-4 h-4 md:w-5 md:h-5" />
              Agendar pelo WhatsApp
            </a>
            <a
              href="#orcamento"
              className="w-full sm:w-auto px-5 md:px-8 py-2.5 md:py-4 border border-border text-foreground rounded-lg font-display font-semibold text-sm md:text-lg hover:bg-secondary transition-colors text-center"
            >
              Solicitar Orçamento
            </a>
          </div>

          {/* Stats - More compact on mobile */}
          <div className="grid grid-cols-3 gap-3 md:gap-8 mt-7 md:mt-16 max-w-2xl mx-auto [&>div]:min-w-0 [&>div>span:last-child]:block [&>div>span:last-child]:mt-1">
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
