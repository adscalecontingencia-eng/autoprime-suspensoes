import { motion } from "framer-motion";
import { AlertTriangle, Volume2, Car, Wrench, ThumbsDown } from "lucide-react";

const problems = [
  { icon: Car, text: "Carro batendo seco em buracos e lombadas" },
  { icon: Volume2, text: "Barulhos estranhos vindos da suspensão" },
  { icon: AlertTriangle, text: "Instabilidade e insegurança ao dirigir" },
  { icon: Wrench, text: "Pneus desgastando de forma irregular" },
  { icon: ThumbsDown, text: "Perda de conforto em viagens e no dia a dia" },
];

const ProblemsSection = () => {
  return (
    <section id="problemas" className="py-10 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-12">
          <span className="inline-block text-primary font-display font-semibold text-xs md:text-sm tracking-wider mb-2 md:mb-4">
            👉 SEU CARRO ESTÁ ASSIM?
          </span>
          <h2 className="font-display text-xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            SINAIS DE QUE A <span className="text-gradient">SUSPENSÃO</span> PRECISA DE ATENÇÃO
          </h2>
          <p className="text-muted-foreground text-xs md:text-base px-2">
            Identificou um destes sintomas? Não deixe piorar — agende um diagnóstico em Conselheiro Lafaiete agora mesmo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 md:gap-4 p-3 md:p-5 rounded-lg md:rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                <p.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <p className="text-sm md:text-base text-foreground font-medium">{p.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-6 md:mt-10">
          <a
            href="https://wa.me/5531988480488?text=Ol%C3%A1!%20Identifiquei%20sintomas%20na%20suspens%C3%A3o%20do%20meu%20carro."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 md:px-8 py-2.5 md:py-4 bg-primary text-primary-foreground rounded-lg font-display font-semibold text-sm md:text-lg hover:shadow-glow transition-all hover:scale-105"
          >
            Falar com um Especialista
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
