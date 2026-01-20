import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5531999999999";
  const message = "Olá! Gostaria de saber mais sobre os serviços da Auto Prime Suspensões.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-bounce"
      style={{ animationDuration: "2s" }}
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </a>
  );
};

export default WhatsAppButton;
