import { motion } from "framer-motion";

const brands = [
  { name: "Monroe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Monroe_logo.svg/200px-Monroe_logo.svg.png" },
  { name: "Cofap", logo: "https://www.cofap.com.br/images/logo-cofap.png" },
  { name: "Nakata", logo: "https://www.nakata.com.br/images/logo-nakata.png" },
  { name: "Axios", logo: "https://www.axios.com.br/images/logo-axios.png" },
  { name: "Sampel", logo: "https://www.sampel.com.br/images/logo-sampel.png" },
  { name: "Viemar", logo: "https://www.viemar.com.br/images/logo-viemar.png" },
];

const BrandsSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            MARCAS QUE <span className="text-primary">TRABALHAMOS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Utilizamos apenas peças de qualidade das melhores marcas do mercado
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center h-24 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <span className="font-display text-xl font-bold text-foreground/80 hover:text-primary transition-colors">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
