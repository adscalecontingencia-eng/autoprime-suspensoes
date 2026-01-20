import { Play } from "lucide-react";

const VideosSection = () => {
  const videos = [
    {
      title: "Troca de Amortecedor - Antes e Depois",
      description: "Veja a diferença que faz uma suspensão nova",
      placeholder: "Vídeo 1",
    },
    {
      title: "Revisão Completa - Fiat Strada",
      description: "Serviço completo de suspensão",
      placeholder: "Vídeo 2",
    },
    {
      title: "Diagnóstico de Suspensão",
      description: "Como identificamos problemas",
      placeholder: "Vídeo 3",
    },
    {
      title: "Alinhamento Computadorizado",
      description: "Processo de alinhamento moderno",
      placeholder: "Vídeo 4",
    },
  ];

  return (
    <section id="videos" className="py-20 lg:py-32 bg-hero-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-display font-semibold text-sm tracking-wider mb-4">
            NOSSOS TRABALHOS
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            ANTES E <span className="text-gradient">DEPOIS</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Confira alguns dos nossos trabalhos e veja a qualidade do serviço que oferecemos.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group relative aspect-video rounded-2xl bg-card-gradient border border-border overflow-hidden shadow-card hover:border-primary/50 transition-all"
            >
              {/* Video Placeholder - Replace with actual video embed */}
              <div className="absolute inset-0 flex items-center justify-center bg-secondary/30">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors group-hover:scale-110 cursor-pointer">
                    <Play className="w-6 h-6 text-primary ml-1" />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {video.placeholder}
                  </p>
                </div>
              </div>
              
              {/* Video Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground/60 text-sm mt-8">
          💡 Para adicionar vídeos reais, substitua os placeholders acima por embeds do YouTube ou links de vídeo.
        </p>
      </div>
    </section>
  );
};

export default VideosSection;
