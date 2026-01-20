import { Settings, Car, Gauge, CircleDot, Layers, Zap } from "lucide-react";

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
      title: "Diagnóstico",
      description: "Avaliação completa do sistema de suspensão com laudo técnico.",
    },
  ];

  return (
    <section id="servicos" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-display font-semibold text-sm tracking-wider mb-4">
            NOSSOS SERVIÇOS
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            ESPECIALISTAS EM <span className="text-gradient">SUSPENSÃO</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma gama completa de serviços para manter seu veículo com o máximo de segurança e conforto.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card-gradient border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-glow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/5531999999999?text=Olá! Gostaria de agendar um serviço."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-display font-semibold text-lg hover:shadow-glow transition-all hover:scale-105"
          >
            Agendar Serviço
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
