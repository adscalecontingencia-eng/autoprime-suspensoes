import { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { MessageCircle, Phone, MapPin, CheckCircle2, Wrench, Settings, Clock, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { cities } from "@/data/cities";
import { SITE_URL, buildBreadcrumbSchema, injectJsonLd, setMeta, setCanonical } from "@/lib/seo";

const services = [
  { icon: Wrench, title: "Troca de amortecedores", desc: "Dianteiros, traseiros e kit completo." },
  { icon: Settings, title: "Buchas, bieletas e pivôs", desc: "Substituição de peças de suspensão." },
  { icon: ShieldCheck, title: "Direção hidráulica", desc: "Reparo de caixa, bomba e mangueiras." },
  { icon: Clock, title: "Diagnóstico gratuito", desc: "Avaliação honesta sem compromisso." },
];

const CityLanding = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = cities.find((c) => c.slug === citySlug);

  useEffect(() => {
    if (!city) return;

    const url = `${SITE_URL}/${city.slug}`;
    const title = `Oficina de Amortecedor em ${city.name} ${city.state} | Auto Prime Suspensões`;
    const description = `Oficina especializada em suspensão e amortecedores para motoristas de ${city.name} ${city.state}. Troca de amortecedor, buchas, bieletas e direção hidráulica. Orçamento gratuito pelo WhatsApp.`;

    document.title = title;
    setMeta(
      "description",
      description,
    );
    setMeta(
      "keywords",
      [
        `oficina de amortecedor ${city.name}`,
        `oficina de suspensão ${city.name}`,
        `troca de amortecedor ${city.name} ${city.state}`,
        `mecânico de suspensão ${city.name}`,
        `conserto de amortecedor ${city.name}`,
        `direção hidráulica ${city.name}`,
        `kit amortecedor ${city.name}`,
        `bucha da suspensão ${city.name}`,
        `bieleta ${city.name}`,
        `oficina mecânica ${city.name} ${city.state}`,
        "Cofap",
        "Monroe",
        "Nakata",
        "Conselheiro Lafaiete",
        "Alto Paraopeba",
        "MG",
      ].join(", "),
    );
    setCanonical(url);

    const breadcrumb = buildBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: `Oficina em ${city.name}`, url },
    ]);

    const localBusiness = {
      "@context": "https://schema.org",
      "@type": "AutoRepair",
      name: `Auto Prime Suspensões — Atendimento em ${city.name}`,
      description,
      url,
      telephone: "+55-31-98848-0488",
      areaServed: { "@type": "City", name: `${city.name}, ${city.state}` },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Geraldo Gervão, 125 - Manoel Correa",
        addressLocality: "Conselheiro Lafaiete",
        addressRegion: "MG",
        postalCode: "36400-000",
        addressCountry: "BR",
      },
      priceRange: "$$",
      inLanguage: "pt-BR",
    };

    const cleanups = [
      injectJsonLd("city-breadcrumb-jsonld", breadcrumb),
      injectJsonLd("city-localbusiness-jsonld", localBusiness),
    ];

    return () => cleanups.forEach((fn) => fn());
  }, [city]);

  if (!city) return <Navigate to="/" replace />;

  const whatsappMsg = encodeURIComponent(
    `Olá! Sou de ${city.name} e gostaria de um orçamento de suspensão.`,
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-28 pb-10 md:pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: `Oficina em ${city.name}` }]} />

          {/* Hero */}
          <section className="text-center mb-10 md:mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full font-display font-semibold text-xs md:text-sm mb-3 md:mb-4">
              <MapPin className="w-3.5 h-3.5" />
              ATENDIMENTO PARA {city.name.toUpperCase()} {city.state}
            </span>
            <h1 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-5 leading-tight">
              Oficina de <span className="text-gradient">Amortecedor</span> e Suspensão para {city.name}
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto mb-5 md:mb-7 leading-relaxed">
              {city.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/5531988480488?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 md:px-7 py-3 bg-primary text-primary-foreground rounded-lg font-display font-semibold text-sm md:text-base hover:shadow-glow transition-all"
              >
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                Orçamento pelo WhatsApp
              </a>
              <a
                href="tel:+5531988480488"
                className="inline-flex items-center justify-center gap-2 px-5 md:px-7 py-3 border border-border bg-card text-foreground rounded-lg font-display font-semibold text-sm md:text-base hover:border-primary transition-all"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                (31) 98848-0488
              </a>
            </div>
          </section>

          {/* Services grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-14">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-card border border-border rounded-xl p-5 md:p-6 hover:border-primary/50 transition-colors"
              >
                <s.icon className="w-7 h-7 md:w-8 md:h-8 text-primary mb-3" />
                <h2 className="font-display font-bold text-foreground text-base md:text-lg mb-1">
                  {s.title} em {city.name}
                </h2>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </section>

          {/* Local SEO content */}
          <section className="bg-card-gradient border border-border rounded-xl md:rounded-2xl p-5 md:p-10 mb-8 md:mb-12">
            <h2 className="font-display text-xl md:text-3xl font-bold text-foreground mb-3 md:mb-5">
              Por que motoristas de {city.name} escolhem a Auto Prime?
            </h2>
            <ul className="space-y-2 md:space-y-3 mb-5 md:mb-6">
              {[
                `Atendimento dedicado para clientes de ${city.name} e região do Alto Paraopeba`,
                "Mecânicos especializados exclusivamente em suspensão e direção hidráulica",
                "Trabalhamos com Cofap, Monroe, Nakata e outras marcas de confiança",
                "Garantia em peças (do fabricante) e mão de obra",
                city.distanceKm > 0
                  ? `Apenas ${city.distanceKm} km de ${city.name} até nossa oficina em Conselheiro Lafaiete`
                  : "Localização estratégica no bairro Manoel Correa",
                "Diagnóstico gratuito — você só paga se aprovar o serviço",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm md:text-base text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-display font-semibold text-foreground text-base md:text-lg mb-2 md:mb-3">
              Bairros e regiões atendidas em {city.name}:
            </h3>
            <div className="flex flex-wrap gap-2">
              {city.neighborhoods.map((n) => (
                <span
                  key={n}
                  className="px-3 py-1 text-xs md:text-sm bg-secondary border border-border rounded-full text-muted-foreground"
                >
                  {n}
                </span>
              ))}
            </div>
          </section>

          {/* Other cities cross-link */}
          <section className="mb-8 md:mb-12">
            <h3 className="font-display font-semibold text-foreground text-base md:text-lg mb-3">
              Atendemos também:
            </h3>
            <div className="flex flex-wrap gap-2">
              {cities
                .filter((c) => c.slug !== city.slug)
                .map((c) => (
                  <Link
                    key={c.slug}
                    to={`/${c.slug}`}
                    className="px-3 py-1.5 text-xs md:text-sm bg-card border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                  >
                    {c.name}
                  </Link>
                ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="p-5 md:p-8 rounded-xl bg-card-gradient border border-primary/30 text-center">
            <h2 className="font-display text-lg md:text-2xl font-bold text-foreground mb-2 md:mb-3">
              Pronto para resolver a suspensão do seu carro?
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              Atendimento rápido para clientes de {city.name} {city.state}.
            </p>
            <a
              href={`https://wa.me/5531988480488?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 md:px-7 py-2.5 md:py-3 bg-primary text-primary-foreground rounded-lg font-display font-semibold text-sm md:text-base hover:shadow-glow transition-all"
            >
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
              Falar pelo WhatsApp agora
            </a>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CityLanding;
