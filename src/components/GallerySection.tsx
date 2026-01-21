import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string;
    title: string;
    description: string;
  }>(null);

  const gallery = [
    {
      src: gallery1,
      title: "Troca de Amortecedor - Antes e Depois",
      description: "Substituição completa do conjunto de amortecedores. Peças originais garantem melhor desempenho, estabilidade nas curvas e maior conforto ao rodar. Trabalhamos com as melhores marcas do mercado.",
    },
    {
      src: gallery2,
      title: "Manutenção na Direção",
      description: "Serviço especializado em caixa de direção hidráulica e elétrica. Realizamos troca de terminais, barra de direção, caixa de direção e todo o sistema. Garantia de fábrica em todas as peças.",
    },
    {
      src: gallery3,
      title: "Revisão de Molas e Coxins",
      description: "Troca de molas espirais, coxins e batentes de suspensão. Esses componentes são essenciais para absorver impactos e manter o conforto do veículo. Usamos peças de alta durabilidade.",
    },
    {
      src: gallery4,
      title: "Diagnóstico de Geometria",
      description: "Análise computadorizada da geometria da suspensão. Identificamos problemas de alinhamento, desgaste irregular de pneus e instabilidade na direção. Laudo técnico completo incluso.",
    },
  ];

  return (
    <section id="galeria" className="py-12 md:py-20 lg:py-32 bg-hero-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <span className="inline-block text-primary font-display font-semibold text-sm tracking-wider mb-3 md:mb-4">
            NOSSOS TRABALHOS
          </span>
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            ANTES E <span className="text-gradient">DEPOIS</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg">
            Confira alguns dos nossos trabalhos e veja a qualidade do serviço que oferecemos. Clique nas imagens para mais detalhes.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {gallery.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-video rounded-2xl bg-card-gradient border border-border overflow-hidden shadow-card hover:border-primary/50 transition-all cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-5 h-5 text-primary" />
              </div>
              
              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
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
            className="relative max-w-4xl w-full bg-card-gradient rounded-2xl border border-border shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            {/* Image */}
            <div className="aspect-video">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 lg:p-8">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                {selectedImage.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {selectedImage.description}
              </p>
              <a
                href="https://wa.me/5531988480488?text=Olá! Gostaria de saber mais sobre esse serviço."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-display font-semibold hover:shadow-glow transition-all"
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
