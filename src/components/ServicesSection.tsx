import { Settings, CircleDot, Cog, ScanLine } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { wheelServices } from "@/data/wheelServices";
import { mechanicalServices } from "@/data/mechanicalServices";

const ServicesSection = () => {
  const services = [
    {
      icon: Settings,
      title: "Troca de Amortecedores",
      description: "Substituição de amortecedores dianteiros e traseiros com peças de qualidade.",
      destination: mechanicalServices[0],
    },
    {
      icon: CircleDot,
      title: "Buchas de Suspensão",
      description: "Troca de buchas, coxins e batentes para melhor conforto e estabilidade.",
      destination: mechanicalServices[1],
    },
    {
      icon: Cog,
      title: "Manutenção na Direção",
      description: "Reparo e troca de componentes da caixa de direção hidráulica.",
      destination: mechanicalServices[2],
    },
    {
      icon: ScanLine,
      title: "Alinhamento 3D",
      description: "Avaliação da geometria das rodas e da direção para orientar os ajustes indicados.",
      destination: wheelServices[0],
    },
  ];

  return (
    <section id="servicos" className="py-10 md:py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-16">
          <span className="inline-block text-primary font-display font-semibold text-xs md:text-sm tracking-wider mb-2 md:mb-4">
            NOSSOS SERVIÇOS
          </span>
          <h2 className="font-display text-xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-6">
            ESPECIALISTAS EM <span className="text-gradient">SUSPENSÃO</span>
          </h2>
          <p className="text-muted-foreground text-xs md:text-lg px-2">
            Oferecemos uma gama completa de serviços para manter seu veículo com o máximo de segurança e conforto.
          </p>
        </div>

        {/* Services Grid - 1 column on mobile, 4 on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 p-4 md:p-6 md:flex-col md:items-start rounded-xl md:rounded-2xl bg-card-gradient border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-glow"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center md:mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-base md:text-xl font-semibold text-foreground mb-1 md:mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <Button asChild variant="link" className="px-0 mt-2 h-auto whitespace-normal text-left">
                  <Link to={service.destination.path}>Consultar {service.destination.name.toLowerCase()}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <nav aria-label="Serviços de alinhamento e balanceamento" className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-3 mt-6">
          {wheelServices.map((service) => (
            <Button asChild variant="link" key={service.id} className="whitespace-normal h-auto text-left">
              <Link to={service.path}>{service.name} em Conselheiro Lafaiete</Link>
            </Button>
          ))}
        </nav>
        <div className="text-center mt-6 md:mt-12">
          <a
            href="https://wa.me/5531988480488?text=Olá! Gostaria de agendar um serviço."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 md:px-8 py-2.5 md:py-4 bg-primary text-primary-foreground rounded-lg font-display font-semibold text-sm md:text-lg hover:shadow-glow transition-all hover:scale-105"
          >
            Agendar Serviço
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
