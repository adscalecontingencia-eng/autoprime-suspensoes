import { Link } from "react-router-dom";
import { ArrowRight, CircleDot, ScanLine, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { wheelServices, serviceWhatsAppUrl } from "@/data/wheelServices";

const WheelServicesSection = () => (
  <section id="alinhamento-balanceamento" className="py-10 md:py-20 bg-secondary border-y border-border">
    <div className="container mx-auto px-4 max-w-6xl">
      <header className="max-w-3xl mb-6 md:mb-10">
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-3">Alinhamento 3D e balanceamento em Conselheiro Lafaiete</h2>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Dois serviços, cuidados diferentes: o alinhamento avalia a geometria das rodas; o balanceamento corrige desequilíbrios de roda e pneu. Conte os sintomas do seu carro para avaliarmos o serviço indicado.</p>
      </header>
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        {wheelServices.map((service) => {
          const Icon = service.id === "alignment" ? ScanLine : CircleDot;
          return (
            <article key={service.id} className="flex flex-col p-5 md:p-7 rounded-lg bg-card border border-border">
              <Icon aria-hidden="true" className="w-9 h-9 text-primary mb-4" />
              <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">{service.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.benefit}</p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2 mb-6">{service.symptoms.slice(0, 2).map((symptom) => <li key={symptom}>{symptom}</li>)}</ul>
              <div className="mt-auto flex flex-col items-start gap-3">
                <Button asChild variant="link" className="px-0 h-auto whitespace-normal text-left"><Link to={service.path}>Conhecer {service.name.toLowerCase()} <ArrowRight aria-hidden="true" /></Link></Button>
                <Button asChild className="whitespace-normal h-auto min-h-11 py-3"><a href={serviceWhatsAppUrl(service)} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" /> Orçamento pelo WhatsApp</a></Button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default WheelServicesSection;