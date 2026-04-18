import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { cities } from "@/data/cities";

const LocalSeoSection = () => {
  return (
    <section id="regiao" className="py-10 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-card-gradient border border-border rounded-xl md:rounded-2xl p-5 md:p-10">
          <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
            <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            <span className="text-primary font-display font-semibold text-xs md:text-sm tracking-wider">
              ATENDIMENTO LOCAL
            </span>
          </div>
          <h2 className="font-display text-xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
            OFICINA DE <span className="text-gradient">AMORTECEDORES</span> PERTO DE VOCÊ EM LAFAIETE MG
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4 md:mb-6">
            A <strong className="text-foreground">Auto Prime Suspensões</strong> é referência em manutenção de
            suspensão automotiva e troca de amortecedores em <strong className="text-foreground">Conselheiro
            Lafaiete – Minas Gerais</strong>. Localizada no bairro Manoel Correa, atendemos motoristas de
            toda a região do Alto Paraopeba e cidades vizinhas, com diagnóstico honesto, mão de obra
            especializada e garantia em todos os serviços de suspensão e direção hidráulica.
          </p>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4 md:mb-6">
            Buscando por <em>"oficina de suspensão perto de mim"</em> ou <em>"troca de amortecedor em
            Lafaiete MG"</em>? Você está no lugar certo. Nossa estrutura, experiência e atendimento
            personalizado garantem que seu veículo volte para a estrada com segurança e conforto.
          </p>
          <div>
            <h3 className="font-display font-semibold text-foreground text-sm md:text-base mb-2 md:mb-3">
              Páginas por cidade — clique e veja:
            </h3>
            <div className="flex flex-wrap gap-2">
              {cities.map((c) => (
                <Link
                  key={c.slug}
                  to={`/${c.slug}`}
                  className="px-3 py-1.5 text-xs md:text-sm bg-secondary border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSeoSection;
