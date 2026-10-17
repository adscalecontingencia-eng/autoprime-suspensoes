import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CircleDot, ScanLine, MapPin, MessageCircle, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { wheelServices, serviceWhatsAppUrl, type WheelService } from "@/data/wheelServices";
import { SITE_URL, buildBreadcrumbSchema, injectJsonLd, setPageMetadata, restoreHomeMetadata } from "@/lib/seo";

const WheelServicePage = ({ service }: { service: WheelService }) => {
  const other = wheelServices.find((item) => item.id !== service.id);
  const Icon = service.id === "alignment" ? ScanLine : CircleDot;
  const whatsappUrl = serviceWhatsAppUrl(service);

  useEffect(() => {
    window.scrollTo(0, 0);
    const url = `${SITE_URL}${service.path}`;
    setPageMetadata(service.title, service.description, url);
    const cleanups = [
      injectJsonLd("service-breadcrumb-jsonld", buildBreadcrumbSchema([{ name: "Home", url: `${SITE_URL}/` }, { name: service.heading, url }])),
      injectJsonLd("wheel-service-jsonld", {
        "@context": "https://schema.org", "@type": "Service",
        name: service.heading, serviceType: service.name, description: service.benefit, url,
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
            <div className="flex items-center gap-2 text-primary text-xs md:text-sm mb-3"><MapPin className="w-4 h-4" aria-hidden="true" /> Conselheiro Lafaiete · MG</div>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight max-w-4xl mb-4">{service.heading}</h1>
            <p className="max-w-2xl text-sm md:text-lg text-muted-foreground leading-relaxed mb-5">{service.intro}</p>
            <Button asChild size="lg" className="max-w-full whitespace-normal h-auto min-h-12 py-3 px-5"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" /> Orçamento pelo WhatsApp</a></Button>
            {/* Replace this icon block with an owner-supplied equipment photo when available. */}
            <div className="flex items-center gap-4 mt-6 text-muted-foreground text-sm max-w-2xl">
              <Icon aria-hidden="true" className="w-12 h-12 shrink-0 text-primary" />
              <p className="leading-relaxed">{service.benefit}</p>
            </div>
          </section>
          <section className="py-8 md:py-12 grid md:grid-cols-2 gap-8 md:gap-12 border-b border-border">
            <div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">Sinais que merecem avaliação</h2>
              <ul className="space-y-3">{service.symptoms.map((symptom) => <li key={symptom} className="flex items-start gap-2 text-sm md:text-base text-muted-foreground"><CheckCircle2 aria-hidden="true" className="w-5 h-5 mt-0.5 shrink-0 text-primary" /><span>{symptom}</span></li>)}</ul>
            </div>
            <div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">Avaliar antes de ajustar</h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{service.evaluation}</p>
            </div>
          </section>
          <section className="py-8 md:py-12 border-b border-border">
            <h2 className="font-display text-xl md:text-3xl font-bold text-foreground mb-4">Alinhamento e balanceamento: qual a diferença?</h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl mb-4">{service.difference}</p>
            {other && <Button asChild variant="link" className="px-0 h-auto whitespace-normal text-left"><Link to={other.path}>Saiba mais sobre {other.name.toLowerCase()} <ArrowRight aria-hidden="true" /></Link></Button>}
          </section>
          <section className="py-8 md:py-12 border-b border-border">
            <h2 className="font-display text-xl md:text-3xl font-bold text-foreground mb-6">Perguntas frequentes</h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">{service.faqs.map((faq) => <div key={faq.question}><h3 className="font-display font-semibold text-foreground text-base md:text-lg mb-2">{faq.question}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p></div>)}</div>
          </section>
          <section className="py-8 md:py-12">
            <h2 className="font-display text-xl md:text-3xl font-bold text-foreground mb-3">Consulte a Auto Prime em Lafaiete</h2>
            <p className="text-sm md:text-base text-muted-foreground mb-3">Rua Geraldo Gervão, 125 — Bairro Manoel Correa, Conselheiro Lafaiete/MG.</p>
            <p className="text-sm text-muted-foreground mb-5">WhatsApp: (31) 98848-0488. Informe o modelo do carro e os sintomas para consultar orçamento e disponibilidade.</p>
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

export default WheelServicePage;