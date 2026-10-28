const alignmentVideoUrl = `${import.meta.env.BASE_URL}videos/alinhamento-3d.mp4`;
const alignmentPosterUrl = `${import.meta.env.BASE_URL}videos/alinhamento-3d-poster.jpg`;

const AlignmentVideoSection = ({ showBalancingContext = false }: { showBalancingContext?: boolean }) => (
  <section aria-labelledby="alignment-video-heading" className="py-10 md:py-16 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-6 md:mb-8">
        <h2 id="alignment-video-heading" className="font-display text-2xl md:text-3xl font-bold text-foreground leading-tight">
          Veja como funciona nosso <span className="text-primary">alinhamento 3D</span>
        </h2>
        {showBalancingContext && (
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-4">
            O vídeo mostra o alinhamento 3D, que ajusta os ângulos das rodas. O balanceamento é outro serviço: ele corrige o desequilíbrio do conjunto roda e pneu.
          </p>
        )}
      </div>
      <div className="max-w-sm md:max-w-3xl mx-auto aspect-[9/16] md:aspect-video overflow-hidden rounded-lg border border-border bg-background">
        <video
          aria-label="Vídeo do equipamento de alinhamento 3D da Auto Prime"
          className="w-full h-full object-contain"
          controls
          playsInline
          preload="metadata"
          poster={alignmentPosterUrl}
        >
          <source src={alignmentVideoUrl} type="video/mp4" />
          Seu navegador não suporta vídeos HTML5. <a href={alignmentVideoUrl}>Abrir vídeo de alinhamento 3D</a>.
        </video>
      </div>
    </div>
  </section>
);

export default AlignmentVideoSection;