import { Play } from "lucide-react";
import { useState, useRef } from "react";

const VideoShowcaseSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section id="videos" className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-12">
          <span className="inline-block text-primary font-display font-semibold text-xs md:text-sm tracking-wider mb-2 md:mb-4">
            APRESENTAÇÃO
          </span>
          <h2 className="font-display text-xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-6">
            CONHEÇA NOSSA <span className="text-gradient">OFICINA</span>
          </h2>
          <p className="text-muted-foreground text-xs md:text-lg px-2">
            Assista ao vídeo e veja como trabalhamos para oferecer o melhor serviço para seu veículo.
          </p>
        </div>

        {/* Large Video Player */}
        <div className="max-w-5xl mx-auto">
          <div 
            className="relative aspect-video rounded-2xl md:rounded-3xl bg-card-gradient border border-border overflow-hidden shadow-2xl cursor-pointer group"
            onClick={handleVideoClick}
          >
            <video
              ref={videoRef}
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              controls={isPlaying}
            >
              <source src="/videos/apresentacao.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos HTML5.
            </video>

            {/* Play Overlay */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 bg-background/40 flex items-center justify-center transition-all group-hover:bg-background/30"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlay();
                }}
              >
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center shadow-glow transition-transform group-hover:scale-110">
                  <Play className="w-7 h-7 md:w-10 md:h-10 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
            )}

            {/* Decorative glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-xl -z-10 opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcaseSection;
