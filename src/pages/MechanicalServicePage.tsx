import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, MapPin, MessageCircle, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { mechanicalWhatsAppUrl, type MechanicalService } from "@/data/mechanicalServices";
import { SITE_URL, buildBreadcrumbSchema, injectJsonLd, restoreHomeMetadata, setPageMetadata } from "@/lib/seo";

const MechanicalServicePage = ({ service }: { service: MechanicalService }) => {
  const whatsappUrl = mechanicalWhatsAppUrl(service);

  useEffect(() => {
    window.scrollTo(0, 0);
    const url = `${SITE_URL}${service.path}`;
    setPageMetadata(service.title, service.description, url);
    const cleanups = [
      injectJsonLd("mechanical-breadcrumb-jsonld", buildBreadcrumbSchema([
        { name: "Home", url: `${SITE_URL}/` }, { name: service.name, url },
      ])),
      injectJsonLd("mechanical-service-jsonld", {
        "@context": "https://schema.org", "@type": "Service",
        name: service.heading, serviceType: service.name, description: service.description, url,
        provider: { "@id": `${SITE_URL}/` },
        areaServed: { "@type": "City", name: "Conselheiro Lafaiete" },
      }),
    ];
    return () => { cleanups.forEach((cleanup) => cleanup()); restoreHomeMetadata(); };
  }, [service]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 md:pt-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: service.name }]} />
          <section className="pb-8 md:pb-12 border-b border-border">
            <p className="flex items-center gap-2 text-primary text-xs md:text-sm mb-3"><MapPin className="w-4 h-4 shrink-0" aria-hidden="true" /> Conselheiro Lafaiete · MG</p>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight max-w-4xl mb-4">{service.heading}</h1>
            <p className="max-w-3xl text-sm md:text-lg text-muted-foreground leading-relaxed mb-5">{service.intro}</p>
            <div className="flex flex-col sm:flex-row items-start gap-3">
              <Button asChild size="lg" className="max-w-full whitespace-normal h-auto min-h-12 px-5 py-3"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" /> Orçamento pelo WhatsApp</a></Button>
              <Button asChild variant="outline" size="lg"><a href="tel:+5531988480488"><Phone aria-hidden="true" /> (31) 98848-0488</a></Button>
            </div>
          </section>
          <section className="py-8 md:py-12 border-b border-border">
            <h2 className="font-display text-xl md:text-3xl font-bold text-foreground mb-5">Sinais que merecem avaliação</h2>
            <ul className="grid md:grid-cols-2 gap-4">{service.symptoms.map((symptom) => <li key={symptom} className="flex items-start gap-2 text-sm md:text-base text-muted-foreground"><CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-primary" aria-hidden="true" /><span>{symptom}</span></li>)}</ul>
          </section>
          <section className="py-8 md:py-12 grid md:grid-cols-2 gap-8 md:gap-12 border-b border-border" aria-label="Avaliação e indicação do serviço">
            {service.sections.map((section) => <div key={section.heading}><h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">{section.heading}</h2><p className="text-sm md:text-base text-muted-foreground leading-relaxed">{section.text}</p></div>)}
          </section>
          <section className="py-8 md:py-12 border-b border-border">
            <h2 className="font-display text-xl md:text-3xl font-bold text-foreground mb-6">Perguntas frequentes</h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">{service.faqs.map((faq) => <div key={faq.question}><h3 className="font-display font-semibold text-foreground text-base md:text-lg mb-2">{faq.question}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p></div>)}</div>
          </section>
          <section className="py-8 md:py-12 border-b border-border">
            <h2 className="font-display text-xl md:text-3xl font-bold text-foreground mb-5">Serviços relacionados à avaliação</h2>
            <div className="space-y-5">{service.related.map((related) => <div key={related.path}><Button asChild variant="link" className="px-0 h-auto whitespace-normal text-left"><Link to={related.path}>{related.label}<ArrowRight aria-hidden="true" /></Link></Button><p className="text-sm text-muted-foreground mt-1">{related.context}</p></div>)}</div>
          </section>
          <section className="py-8 md:py-12">
            <h2 className="font-display text-xl md:text-3xl font-bold text-foreground mb-3">Consulte a Auto Prime Centro Automotivo</h2>
            <p className="text-sm md:text-base text-muted-foreground mb-3">Rua Geraldo Gervão, 125 — Bairro Manoel Correa, Conselheiro Lafaiete/MG.</p>
            <p className="text-sm text-muted-foreground mb-5">A oficina fica em Conselheiro Lafaiete. Clientes de outras cidades se deslocam até este endereço. Envie os dados do carro e os sintomas para consultar orçamento e disponibilidade.</p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button asChild size="lg" className="max-w-full whitespace-normal h-auto min-h-12 px-5 py-3"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" /> Solicitar orçamento</a></Button>
              <Button asChild variant="link" className="px-0"><Link to="/"><ArrowLeft aria-hidden="true" /> Voltar para a home</Link></Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MechanicalServicePage;