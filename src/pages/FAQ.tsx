import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SITE_URL = "https://www.autoprimesuspensoes.com.br";

const faqs = [
  {
    q: "Quanto custa trocar amortecedor em Conselheiro Lafaiete?",
    a: "O valor depende do modelo do veículo, marca da peça (Cofap, Monroe, Nakata) e quantidade. Recomendamos sempre trocar aos pares (dianteiros ou traseiros juntos) para manter o equilíbrio. Solicite seu orçamento gratuito pelo WhatsApp.",
  },
  {
    q: "Quanto tempo dura um amortecedor?",
    a: "A vida útil média é de 50.000 a 80.000 km, mas pode variar conforme as estradas (em MG, com muitos buracos, o desgaste é maior), peso transportado e estilo de direção.",
  },
  {
    q: "Preciso trocar os 4 amortecedores juntos?",
    a: "Não obrigatoriamente. O ideal é trocar aos pares (os 2 dianteiros ou os 2 traseiros juntos) para manter o equilíbrio do veículo. Trocar apenas um lado causa comportamento desigual.",
  },
  {
    q: "Quais são os sinais de amortecedor ruim?",
    a: "Carro batendo seco em buracos, balanço excessivo após lombadas, pneus com desgaste irregular (cupping), instabilidade em curvas e vazamento de óleo na haste do amortecedor.",
  },
  {
    q: "Vocês fazem direção hidráulica em Lafaiete?",
    a: "Sim. Somos especializados em direção hidráulica: reparo de caixa de direção, troca de bomba, mangueiras de pressão, retentores e troca de fluido. NÃO atendemos direção elétrica.",
  },
  {
    q: "Vocês fazem alinhamento e balanceamento?",
    a: "Não. Somos uma oficina especializada exclusivamente em suspensão e direção hidráulica. Para alinhamento e balanceamento, indicamos parceiros de confiança em Conselheiro Lafaiete.",
  },
  {
    q: "Atendem outras cidades além de Conselheiro Lafaiete?",
    a: "Sim. Atendemos clientes de Congonhas, Ouro Branco, Catas Altas da Noruega, Itaverava, Queluzito, Santana dos Montes e toda a região do Alto Paraopeba.",
  },
  {
    q: "Qual o horário de atendimento?",
    a: "Atendemos de segunda a sexta das 8h às 18h e aos sábados das 8h às 12h. Solicite orçamento pelo WhatsApp 24h: (31) 98848-0488.",
  },
  {
    q: "Vocês dão garantia nos serviços?",
    a: "Sim. Oferecemos garantia em peças (do fabricante) e em mão de obra. Trabalhamos com marcas reconhecidas como Cofap, Monroe e Nakata.",
  },
  {
    q: "É seguro rodar com amortecedor vazando?",
    a: "Não. Amortecedor vazando perde capacidade de absorção, aumenta a distância de frenagem em até 20%, compromete aderência em curvas e acelera o desgaste de pneus e suspensão. Troque o quanto antes.",
  },
  {
    q: "O que é bieleta e quando trocar?",
    a: "Bieleta é o link da barra estabilizadora. Quando desgasta, gera ruídos metálicos em buracos, estalos em curvas e sensação de carro solto. Deve ser trocada aos pares.",
  },
  {
    q: "Como solicitar um orçamento?",
    a: "Pelo WhatsApp (31) 98848-0488 ou pelo formulário de orçamento no site. O diagnóstico é gratuito e sem compromisso.",
  },
];

const FAQPage = () => {
  useEffect(() => {
    document.title = "Perguntas Frequentes (FAQ) | Auto Prime Suspensões Lafaiete";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Tire suas dúvidas sobre amortecedores, suspensão, buchas, bieletas e direção hidráulica. FAQ da oficina Auto Prime em Conselheiro Lafaiete MG e região."
      );

    const keywords =
      "FAQ amortecedor, dúvidas suspensão, quanto custa amortecedor Lafaiete, durabilidade amortecedor, troca de amortecedor aos pares, sinais de amortecedor ruim, amortecedor vazando, troca de bieleta, oficina de suspensão Conselheiro Lafaiete, oficina de amortecedores Lafaiete MG, direção hidráulica Lafaiete, garantia em suspensão, Cofap, Monroe, Nakata, Congonhas, Ouro Branco, Catas Altas da Noruega, Itaverava, Cristiano Otoni, Queluzito, Alto Paraopeba MG";
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute("content", keywords);

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      url: `${SITE_URL}/faq`,
      inLanguage: "pt-BR",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    };

    const scriptId = "faq-jsonld";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = scriptId;
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(schema);

    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-28 pb-10 md:pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para a home
          </Link>

          <header className="mb-8 md:mb-10 text-center">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded font-semibold text-xs mb-3">
              FAQ
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-3">
              Perguntas Frequentes
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              Tire suas dúvidas sobre amortecedores, suspensão e direção hidráulica em
              Conselheiro Lafaiete MG.
            </p>
          </header>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border rounded-lg bg-card px-4"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 md:mt-14 p-5 md:p-8 rounded-xl bg-card-gradient border border-primary/30 text-center">
            <h2 className="font-display text-lg md:text-2xl font-bold text-foreground mb-2 md:mb-3">
              Não encontrou sua dúvida?
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              Fale com a Auto Prime pelo WhatsApp e receba atendimento personalizado.
            </p>
            <a
              href="https://wa.me/5531988480488?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 md:px-7 py-2.5 md:py-3 bg-primary text-primary-foreground rounded-lg font-display font-semibold text-sm md:text-base hover:shadow-glow transition-all"
            >
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default FAQPage;
