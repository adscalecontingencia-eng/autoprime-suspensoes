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
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 md:mb-12">
            <span className="inline-block text-primary font-display font-semibold text-xs md:text-sm tracking-wider mb-2 md:mb-4">
              SOBRE NÓS
            </span>
            <h2 className="font-display text-xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-6">
              CONHEÇA A <span className="text-gradient">AUTO PRIME</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
              Somos especialistas em suspensão automotiva, oferecendo serviços de alta qualidade 
              com profissionais experientes e equipamentos de ponta.
            </p>
          </div>

          {/* Features - Compact on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-10">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 md:p-6 rounded-xl md:rounded-2xl bg-secondary/50 border border-border">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-sm md:text-base mb-1">{feature.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Trust Indicators - Compact on mobile */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
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
    </section>
  );
};

export default AboutSection;
