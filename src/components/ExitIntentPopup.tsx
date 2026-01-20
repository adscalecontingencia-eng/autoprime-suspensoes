import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { X, MessageCircle, Gift } from "lucide-react";

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if already shown in this session
    const alreadyShown = sessionStorage.getItem("exitPopupShown");
    if (alreadyShown) {
      setHasShown(true);
      return;
    }

    // Delay before enabling exit intent detection
    const enableTimeout = setTimeout(() => {
      const handleMouseLeave = (e: MouseEvent) => {
        // Only trigger when mouse leaves from the top of the page
        if (e.clientY <= 0 && !hasShown) {
          setIsOpen(true);
          setHasShown(true);
          sessionStorage.setItem("exitPopupShown", "true");
        }
      };

      document.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        document.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, 2000);

    return () => clearTimeout(enableTimeout);
  }, [hasShown]);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Vi a oferta de 10% de desconto no site e gostaria de solicitar um orçamento."
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AnimatePresence>
        {isOpen && (
          <AlertDialogContent asChild forceMount>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-md border-2 border-primary/20 bg-gradient-to-br from-background to-muted"
            >
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>

              <AlertDialogHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Gift className="h-8 w-8 text-primary" />
                </div>
                <AlertDialogTitle className="text-2xl font-bold text-foreground">
                  Espere! Não vá embora ainda...
                </AlertDialogTitle>
                <AlertDialogDescription className="text-base text-muted-foreground">
                  Temos uma oferta especial para você!
                </AlertDialogDescription>
              </AlertDialogHeader>

              <div className="my-6 rounded-lg bg-primary/10 p-4 text-center">
                <p className="text-lg font-semibold text-primary">
                  🎉 Ganhe 10% de desconto
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  no seu primeiro serviço conosco
                </p>
              </div>

              <AlertDialogFooter className="flex-col gap-3 sm:flex-col">
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full gap-2 bg-green-600 text-white hover:bg-green-700"
                  size="lg"
                >
                  <MessageCircle className="h-5 w-5" />
                  Quero meu desconto!
                </Button>
                <Button
                  onClick={handleClose}
                  variant="ghost"
                  className="w-full text-muted-foreground hover:text-foreground"
                >
                  Não, obrigado
                </Button>
              </AlertDialogFooter>
            </motion.div>
          </AlertDialogContent>
        )}
      </AnimatePresence>
    </AlertDialog>
  );
};

export default ExitIntentPopup;
