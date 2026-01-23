import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";

const brands = [
  { name: "Monroe" },
  { name: "Cofap" },
  { name: "Nakata" },
  { name: "Axios" },
  { name: "Sampel" },
  { name: "Viemar" },
];

const BrandsSection = () => {
  return (
    <section className="py-8 md:py-16 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-12"
        >
          <h2 className="font-display text-lg md:text-3xl lg:text-4xl font-bold text-foreground mb-2 md:mb-4">
            MARCAS QUE <span className="text-primary">TRABALHAMOS</span>
          </h2>
          <p className="text-muted-foreground text-xs md:text-base max-w-2xl mx-auto px-2">
            Utilizamos apenas peças de qualidade das melhores marcas do mercado
          </p>
        </motion.div>

        {/* Brands Grid - Compact on mobile */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-6 md:mb-10">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="px-3 md:px-6 py-1.5 md:py-3 bg-card border border-border rounded-lg md:rounded-xl"
            >
              <span className="font-display font-semibold text-xs md:text-lg text-muted-foreground">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        {/* Social CTA */}
        <div className="text-center">
          <p className="text-muted-foreground text-[10px] md:text-sm mb-2 md:mb-4">Siga-nos nas redes sociais</p>
          <div className="flex justify-center gap-2 md:gap-4">
            <a
              href="https://www.instagram.com/autoprimesuspensoes23?igsh=dTk2OHliYnVydmgx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 md:gap-2 px-3 md:px-6 py-1.5 md:py-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-all"
            >
              <Instagram className="w-3.5 h-3.5 md:w-5 md:h-5 text-primary" />
              <span className="font-display font-medium text-foreground text-xs md:text-sm">Instagram</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-1.5 md:gap-2 px-3 md:px-6 py-1.5 md:py-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-all"
            >
              <Facebook className="w-3.5 h-3.5 md:w-5 md:h-5 text-primary" />
              <span className="font-display font-medium text-foreground text-xs md:text-sm">Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
