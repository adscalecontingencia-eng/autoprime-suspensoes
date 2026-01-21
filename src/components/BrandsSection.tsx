import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const brands = [
  { name: "Monroe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Monroe_logo.svg/200px-Monroe_logo.svg.png" },
  { name: "Cofap", logo: "https://seeklogo.com/images/C/cofap-logo-8E9B7B8A23-seeklogo.com.png" },
  { name: "Nakata", logo: "https://www.nakata.com.br/upload/marcas/nakata-logo.png" },
  { name: "Axios", logo: "https://seeklogo.com/images/A/axios-logo-5F59F7C98A-seeklogo.com.png" },
  { name: "Sampel", logo: "https://www.sampel.com.br/theme/custom/images/logo.png" },
];

const BrandsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Duplicate brands for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands, ...brands];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % brands.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 md:py-16 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            MARCAS QUE <span className="text-primary">TRABALHAMOS</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Utilizamos apenas peças de qualidade das melhores marcas do mercado
          </p>
        </motion.div>

        {/* Infinite scroll carousel */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-6 md:gap-8"
            animate={{
              x: [`0%`, `-${100 / 3}%`],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 w-32 md:w-40 lg:w-48 h-20 md:h-24 bg-card/50 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <img
                  src={brand.logo}
                  alt={`Logo ${brand.name}`}
                  className="max-h-12 md:max-h-16 max-w-full object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="font-display text-lg md:text-xl font-bold text-foreground/80">${brand.name}</span>`;
                    }
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
