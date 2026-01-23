import { CheckCircle, Wrench, Shield, Clock } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Wrench,
      title: "Equipamentos Modernos",
      description: "Ferramentas de última geração",
    },
    {
      icon: Shield,
      title: "Garantia de Serviço",
      description: "Garantia total em todos os serviços",
    },
    {
      icon: Clock,
      title: "Agilidade",
      description: "Diagnóstico rápido e eficiente",
    },
  ];

  return (
    <section id="sobre" className="py-10 md:py-20 lg:py-32 bg-hero-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-20 items-center">
          {/* Video Section */}
          <div className="relative order-1 lg:order-1">
            <div className="aspect-video rounded-xl md:rounded-2xl bg-card-gradient border border-border overflow-hidden shadow-card">
              <video
                controls
                playsInline
                preload="metadata"
                poster=""
                className="w-full h-full object-cover"
              >
                <source src="/videos/apresentacao.mov" type="video/quicktime" />
                <source src="/videos/apresentacao.mov" type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
              </video>
            </div>
            {/* Decorative Element - hidden on mobile */}
            <div className="hidden md:block absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="order-2 lg:order-2">
            <span className="inline-block text-primary font-display font-semibold text-xs md:text-sm tracking-wider mb-2 md:mb-4">
              SOBRE NÓS
            </span>
            <h2 className="font-display text-xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-6">
              CONHEÇA A <span className="text-gradient">AUTO PRIME</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg mb-4 md:mb-8 leading-relaxed">
              Somos especialistas em suspensão automotiva, oferecendo serviços de alta qualidade 
              com profissionais experientes e equipamentos de ponta.
            </p>

            {/* Features - Compact on mobile */}
            <div className="space-y-2 md:space-y-4 mb-4 md:mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg md:rounded-xl bg-secondary/50 border border-border">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground text-sm md:text-base">{feature.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicators - Compact on mobile */}
            <div className="flex flex-wrap items-center gap-2 md:gap-4">
              <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                Peças originais
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                Orçamento grátis
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                Atendimento personalizado
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
