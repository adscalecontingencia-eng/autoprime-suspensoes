import { Settings, Car, Gauge, CircleDot, Layers, Zap, Cog } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Settings,
      title: "Troca de Amortecedores",
      description: "Substituição de amortecedores dianteiros e traseiros com peças de qualidade.",
    },
    {
      icon: CircleDot,
      title: "Molas e Coxins",
      description: "Troca de molas, coxins e batentes para melhor conforto e estabilidade.",
    },
    {
      icon: Cog,
      title: "Manutenção na Direção",
      description: "Reparo e troca de componentes da caixa de direção hidráulica e elétrica.",
    },
    {
      icon: Gauge,
      title: "Alinhamento",
      description: "Alinhamento de direção computadorizado para maior segurança.",
    },
    {
      icon: Layers,
      title: "Balanceamento",
      description: "Balanceamento de rodas para eliminar vibrações e desgaste irregular.",
    },
    {
      icon: Car,
      title: "Geometria Completa",
      description: "Análise e correção completa da geometria de suspensão.",
    },
    {
      icon: Zap,
      title: "Reparo em Amortecedores",
      description: "Recuperação e manutenção de amortecedores com qualidade garantida.",
    },
  ];

  return (
    <section id="servicos" className="py-12 md:py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <span className="inline-block text-primary font-display font-semibold text-sm tracking-wider mb-3 md:mb-4">
            NOSSOS SERVIÇOS
          </span>
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            ESPECIALISTAS EM <span className="text-gradient">SUSPENSÃO</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg">
            Oferecemos uma gama completa de serviços para manter seu veículo com o máximo de segurança e conforto.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-4 md:p-6 rounded-2xl bg-card-gradient border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-glow"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 md:mt-12">
          <a
            href="https://wa.me/5531988480488?text=Olá! Gostaria de agendar um serviço."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground rounded-lg font-display font-semibold text-base md:text-lg hover:shadow-glow transition-all hover:scale-105"
          >
            Agendar Serviço
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
