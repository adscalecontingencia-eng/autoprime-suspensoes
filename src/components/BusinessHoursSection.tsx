import { motion } from "framer-motion";
import { Clock, Phone, MapPin } from "lucide-react";

const hours = [
  { day: "Segunda-feira", time: "08:00 - 17:30", isOpen: true },
  { day: "Terça-feira", time: "08:00 - 17:30", isOpen: true },
  { day: "Quarta-feira", time: "08:00 - 17:30", isOpen: true },
  { day: "Quinta-feira", time: "08:00 - 17:30", isOpen: true },
  { day: "Sexta-feira", time: "08:00 - 17:30", isOpen: true },
  { day: "Sábado", time: "Fechado", isOpen: false },
  { day: "Domingo", time: "Fechado", isOpen: false },
];

const BusinessHoursSection = () => {
  const today = new Date().getDay();
  const dayMap = [6, 0, 1, 2, 3, 4, 5]; // Ajuste para corresponder ao array
  const todayIndex = dayMap[today];

  return (
    <section className="py-12 md:py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h2 className="font-display text-xl md:text-3xl lg:text-4xl font-bold text-foreground">
                HORÁRIO DE <span className="text-primary">FUNCIONAMENTO</span>
              </h2>
            </div>

            <div className="space-y-2 md:space-y-3">
              {hours.map((item, index) => (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`flex justify-between items-center p-3 md:p-4 rounded-xl transition-all ${
                    todayIndex === index
                      ? "bg-primary/20 border-2 border-primary"
                      : "bg-secondary border border-border"
                  }`}
                >
                  <span className={`font-medium ${todayIndex === index ? "text-primary" : "text-foreground"}`}>
                    {item.day}
                    {todayIndex === index && (
                      <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                        HOJE
                      </span>
                    )}
                  </span>
                  <span className={`font-display font-bold ${
                    item.isOpen ? "text-foreground" : "text-muted-foreground"
                  }`}>
                    {item.time}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-primary to-orange-dark rounded-2xl p-8 text-background">
              <h3 className="font-display text-2xl font-bold mb-6">PRECISA DE AJUDA?</h3>
              
              <div className="space-y-4">
                <a
                  href="tel:+5531988480488"
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-background/10 backdrop-blur-sm rounded-xl hover:bg-background/20 transition-colors"
                >
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                  <div>
                    <p className="text-xs md:text-sm opacity-80">Ligue agora</p>
                    <p className="font-display text-base md:text-lg font-bold">(31) 98848-0488</p>
                  </div>
                </a>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Rua+Geraldo+Gervão+125+Manoel+Correa+Conselheiro+Lafaiete"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-background/10 backdrop-blur-sm rounded-xl hover:bg-background/20 transition-colors"
                >
                  <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                  <div>
                    <p className="text-xs md:text-sm opacity-80">Endereço</p>
                    <p className="font-display text-sm md:text-base font-bold">Rua Geraldo Gervão, 125</p>
                    <p className="text-xs md:text-sm">Manoel Correa - Conselheiro Lafaiete</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-secondary border border-border rounded-2xl p-4 md:p-6 text-center">
              <p className="text-sm md:text-base text-muted-foreground mb-2">Atendimento de emergência?</p>
              <a
                href="https://wa.me/5531988480488?text=Olá! Preciso de atendimento urgente."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-display font-bold text-base md:text-lg hover:underline"
              >
                Fale conosco pelo WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessHoursSection;
