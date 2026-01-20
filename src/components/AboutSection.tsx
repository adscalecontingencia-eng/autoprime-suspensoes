import { CheckCircle, Wrench, Shield, Clock } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Wrench,
      title: "Equipamentos Modernos",
      description: "Utilizamos ferramentas e equipamentos de última geração",
    },
    {
      icon: Shield,
      title: "Garantia de Serviço",
      description: "Todos os nossos serviços possuem garantia total",
    },
    {
      icon: Clock,
      title: "Agilidade",
      description: "Diagnóstico rápido e serviço eficiente",
    },
  ];

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-hero-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Video Placeholder */}
          <div className="relative">
            <div className="aspect-video rounded-2xl bg-card-gradient border border-border overflow-hidden shadow-card">
              {/* Replace src with your actual video URL */}
              <div className="w-full h-full flex items-center justify-center bg-secondary/50">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-primary border-b-[12px] border-b-transparent ml-1" />
                  </div>
                  <p className="text-muted-foreground">
                    Adicione aqui o vídeo de apresentação da oficina
                  </p>
                  <p className="text-xs text-muted-foreground/60 mt-2">
                    Substitua este placeholder pelo embed do YouTube/Vimeo
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-primary font-display font-semibold text-sm tracking-wider mb-4">
              SOBRE NÓS
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              CONHEÇA A <span className="text-gradient">AUTO PRIME</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Somos especialistas em suspensão automotiva, oferecendo serviços de alta qualidade 
              com profissionais experientes e equipamentos de ponta. Nossa missão é garantir 
              segurança e conforto para você e sua família nas estradas.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary" />
                Peças originais
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary" />
                Orçamento grátis
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary" />
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
