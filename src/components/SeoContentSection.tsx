import { MapPin, Wrench, ShieldCheck } from "lucide-react";

const SeoContentSection = () => {
  return (
    <section
      id="sobre-servicos-regiao"
      className="py-12 md:py-20 bg-background border-t border-border"
      aria-labelledby="seo-content-title"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <header className="text-center mb-8 md:mb-12">
          <span className="inline-block text-primary font-display font-semibold text-xs md:text-sm tracking-wider mb-2 md:mb-3">
            OFICINA DE SUSPENSÃO E AMORTECEDORES EM CONSELHEIRO LAFAIETE MG
          </span>
          <h2
            id="seo-content-title"
            className="font-display text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4"
          >
            Especialistas em <span className="text-gradient">Suspensão Automotiva</span> e Direção Hidráulica
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-3xl mx-auto">
            A Auto Prime é a sua oficina mecânica de confiança em Conselheiro Lafaiete e
            região, com foco total em suspensão, amortecedores e direção hidráulica.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-14">
          <article className="p-5 md:p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
              <Wrench className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display font-bold text-base md:text-lg text-foreground mb-2">
              Serviços de suspensão completos
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Troca de amortecedores dianteiros e traseiros, kit amortecedor completo,
              buchas da suspensão, coxins, bieletas, pivôs, terminais de direção, molas
              helicoidais e batentes — para carros nacionais e importados.
            </p>
          </article>

          <article className="p-5 md:p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display font-bold text-base md:text-lg text-foreground mb-2">
              Direção hidráulica e peças originais
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Reparo de caixa de direção, troca de bomba de direção hidráulica, mangueiras
              de pressão, retentores e fluido. Trabalhamos com marcas reconhecidas como{" "}
              <strong className="text-foreground">Cofap</strong>,{" "}
              <strong className="text-foreground">Monroe</strong> e{" "}
              <strong className="text-foreground">Nakata</strong>, com garantia em peça e mão de obra.
            </p>
          </article>

          <article className="p-5 md:p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display font-bold text-base md:text-lg text-foreground mb-2">
              Atendimento em Lafaiete e região
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Recebemos clientes de Conselheiro Lafaiete, Congonhas, Ouro Branco, Catas
              Altas da Noruega, Itaverava, Cristiano Otoni, Queluzito, Santana dos Montes
              e toda a região do Alto Paraopeba MG.
            </p>
          </article>
        </div>

        <div className="space-y-5 md:space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
          <p>
            Procurando uma <strong className="text-foreground">oficina de suspensão em Conselheiro Lafaiete</strong>{" "}
            que entregue diagnóstico preciso, peças de qualidade e atendimento honesto?
            A Auto Prime é especialista em <strong className="text-foreground">troca de amortecedores em Lafaiete MG</strong>,
            revisão completa de suspensão, identificação de barulhos, balanços e
            instabilidade ao dirigir. Se o seu carro está batendo seco em buracos, com
            ruído estranho na suspensão ou pneus desgastando irregularmente, agende um
            diagnóstico gratuito pelo WhatsApp.
          </p>

          <p>
            Somos uma <strong className="text-foreground">oficina de amortecedores</strong>{" "}
            preparada para atender carros de passeio, SUVs e picapes das principais
            montadoras: Fiat, Volkswagen, Chevrolet, Hyundai, Renault, Ford, Toyota,
            Honda, Jeep, Nissan e mais. Realizamos a{" "}
            <strong className="text-foreground">troca de bieleta em Lafaiete MG</strong>,
            substituição de buchas da suspensão, troca de coxim do amortecedor, reparo de
            pivô e terminal de direção, sempre com peças homologadas e garantia.
          </p>

          <p>
            Além de Conselheiro Lafaiete, somos referência em{" "}
            <strong className="text-foreground">oficina de suspensão em Congonhas</strong>,{" "}
            <strong className="text-foreground">oficina de amortecedores em Ouro Branco</strong>{" "}
            e atendemos motoristas de Catas Altas da Noruega, Itaverava, Cristiano Otoni,
            Queluzito, Santana dos Montes e cidades vizinhas do Alto Paraopeba. Nossa
            equipe também é especializada em{" "}
            <strong className="text-foreground">conserto de direção hidráulica</strong>:
            reparo de caixa de direção, troca de bomba, mangueiras e fluido.
          </p>

          <p>
            Trabalhamos exclusivamente com{" "}
            <strong className="text-foreground">suspensão e direção hidráulica</strong>{" "}
            (não realizamos alinhamento, balanceamento nem direção elétrica), o que nos
            torna referência técnica em Lafaiete MG. Solicite agora seu orçamento
            gratuito pelo WhatsApp <strong className="text-foreground">(31) 98848-0488</strong>{" "}
            e descubra por que somos a oficina de confiança de quem busca qualidade,
            durabilidade e segurança ao dirigir.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SeoContentSection;
