import { motion } from "framer-motion";
import { Zap, ShieldCheck, Award, DollarSign, Eye, MessageCircle } from "lucide-react";

const items = [
  { icon: Zap, title: "Atendimento rápido", desc: "Diagnóstico ágil em Conselheiro Lafaiete sem fila de espera." },
  { icon: ShieldCheck, title: "Garantia nos serviços", desc: "Mão de obra com garantia e peças com garantia de fábrica." },
  { icon: Award, title: "Profissionais especializados", desc: "Mais de 10 anos focados exclusivamente em suspensão automotiva." },
  { icon: DollarSign, title: "Preço justo", desc: "Orçamento transparente, sem taxas escondidas." },
  { icon: Eye, title: "Diagnóstico honesto", desc: "Indicamos só o necessário. Sem empurrar serviço." },
  { icon: MessageCircle, title: "Atendimento por WhatsApp", desc: "Tire dúvidas e agende pelo seu celular em minutos." },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-10 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-12">
          <span className="inline-block text-primary font-display font-semibold text-xs md:text-sm tracking-wider mb-2 md:mb-4">
            POR QUE ESCOLHER A AUTO PRIME
          </span>
          <h2 className="font-display text-xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            REFERÊNCIA EM <span className="text-gradient">SUSPENSÃO</span> NA REGIÃO
          </h2>
          <p className="text-muted-foreground text-xs md:text-base px-2">
            Atendimento de oficina de bairro com qualidade premium para o seu veículo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 max-w-6xl mx-auto">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="p-4 md:p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-glow transition-all"
            >
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                <it.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground text-base md:text-lg mb-1 md:mb-2">{it.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
