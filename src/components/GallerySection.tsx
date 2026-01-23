import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string;
    title: string;
    description: string;
  }>(null);

  const gallery = [
    {
      src: gallery1,
      title: "Troca de Amortecedor",
      description: "Substituição completa do conjunto de amortecedores. Peças originais garantem melhor desempenho, estabilidade nas curvas e maior conforto ao rodar. Trabalhamos com as melhores marcas do mercado.",
    },
    {
      src: gallery2,
      title: "Manutenção na Direção",
      description: "Serviço especializado em caixa de direção hidráulica. Realizamos troca de terminais, barra de direção, caixa de direção e todo o sistema. Garantia de fábrica em todas as peças.",
    },
    {
      src: gallery3,
      title: "Revisão de Buchas da Suspensão e Coxins",
      description: "Troca de buchas, coxins e batentes de suspensão. Esses componentes são essenciais para absorver impactos e manter o conforto do veículo. Usamos peças de alta durabilidade.",
    },
    {
      src: gallery5,
      title: "Revisão da Suspensão Completa",
      description: "Análise completa de todos os componentes da suspensão do veículo. Verificamos amortecedores, molas, coxins, buchas, bandejas e pivôs. Garantimos o diagnóstico preciso e orçamento detalhado.",
    },
    {
      src: gallery6,
      title: "Recuperação de Amortecedor",
      description: "Serviço especializado de recuperação e recondicionamento de amortecedores. Trocamos retentores, válvulas e óleo, devolvendo a eficiência original da peça. Economia com qualidade garantida.",
    },
  ];

  return (
    <section id="galeria" className="py-10 md:py-20 lg:py-32 bg-hero-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-16">
          <span className="hidden md:inline-block text-primary font-display font-semibold text-xs md:text-sm tracking-wider mb-2 md:mb-4">
            GALERIA
          </span>
          <h2 className="font-display text-xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-6">
            NOSSOS <span className="text-gradient">TRABALHOS</span>
          </h2>
          <p className="text-muted-foreground text-xs md:text-lg px-2">
            Confira alguns dos nossos trabalhos e veja a qualidade do serviço que oferecemos.
          </p>
        </div>

        {/* Gallery Grid - 2 columns on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
          {gallery.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-video rounded-xl md:rounded-2xl bg-card-gradient border border-border overflow-hidden shadow-card hover:border-primary/50 transition-all cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              {/* Zoom Icon - hidden on mobile */}
              <div className="hidden md:flex absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/20 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-5 h-5 text-primary" />
              </div>
              
              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6">
                <h3 className="font-display text-xs md:text-lg font-semibold text-foreground mb-0 md:mb-1 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[10px] md:text-sm text-muted-foreground hidden md:block">
                  Clique para ver detalhes
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-card-gradient rounded-xl md:rounded-2xl border border-border shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 md:top-4 md:right-4 z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <X className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
            </button>

            {/* Image */}
            <div className="aspect-video">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                loading="eager"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4 md:p-6 lg:p-8">
              <h3 className="font-display text-lg md:text-2xl font-bold text-foreground mb-2 md:mb-4">
                {selectedImage.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {selectedImage.description}
              </p>
              <a
                href="https://wa.me/5531988480488?text=Olá! Gostaria de saber mais sobre esse serviço."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 md:mt-6 px-5 md:px-6 py-2.5 md:py-3 bg-primary text-primary-foreground rounded-lg font-display font-semibold text-sm md:text-base hover:shadow-glow transition-all"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
