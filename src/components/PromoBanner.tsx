import { motion } from "framer-motion";
import { X, Zap, Clock } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      className="bg-gradient-to-r from-primary via-orange-glow to-primary relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.1)_50%,transparent_75%)] bg-[length:20px_20px] animate-pulse" />
      </div>

      <div className="container mx-auto px-4 py-3 relative z-10">
        <div className="flex items-center justify-center gap-4 flex-wrap text-primary-foreground">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 animate-pulse" />
            <span className="font-display font-bold text-sm md:text-base">
              OFERTA ESPECIAL
            </span>
          </div>
          
          <span className="hidden md:inline text-primary-foreground/60">|</span>
          
          <span className="text-sm md:text-base font-medium">
            <strong>20% OFF</strong> na revisão completa de suspensão
          </span>
          
          <span className="hidden md:inline text-primary-foreground/60">|</span>
          
          <div className="flex items-center gap-1 text-sm">
            <Clock className="w-4 h-4" />
            <span>Válido até o final do mês</span>
          </div>

          <Button
            size="sm"
            variant="secondary"
            className="bg-background text-primary hover:bg-background/90 font-display text-xs"
            onClick={() => window.open("https://wa.me/5531999999999?text=Olá! Vi a promoção de 20% OFF na revisão de suspensão e gostaria de agendar.", "_blank")}
          >
            AGENDAR AGORA
          </Button>
        </div>
      </div>

      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
        aria-label="Fechar banner"
      >
        <X className="w-5 h-5" />
      </button>
    </motion.div>
  );
};

export default PromoBanner;
