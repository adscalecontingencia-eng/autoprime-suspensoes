const WhatsAppButton = () => {
  const phoneNumber = "5531988480488";
  const message = "Olá! Gostaria de saber mais sobre os serviços da Auto Prime Suspensões.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-bounce"
      style={{ animationDuration: "2s" }}
      aria-label="Contato via WhatsApp"
    >
      {/* Official WhatsApp Logo SVG */}
      <svg
        className="w-8 h-8 md:w-9 md:h-9"
        viewBox="0 0 32 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.004 0C7.176 0 0 7.176 0 16.004c0 2.82.736 5.584 2.136 8.02L0 32l8.188-2.088A15.926 15.926 0 0016.004 32C24.832 32 32 24.824 32 15.996 32 7.176 24.832 0 16.004 0zm0 29.332a13.275 13.275 0 01-6.776-1.852l-.488-.288-5.048 1.324 1.348-4.924-.316-.5a13.253 13.253 0 01-2.04-7.088c0-7.352 5.984-13.336 13.336-13.336 7.344 0 13.328 5.984 13.328 13.336-.008 7.352-5.992 13.328-13.344 13.328z"
        />
        <path
          d="M23.244 19.34c-.364-.184-2.156-1.064-2.492-1.184-.336-.124-.58-.184-.824.184-.244.364-.944 1.184-1.16 1.432-.212.244-.428.276-.792.092-.364-.184-1.536-.564-2.924-1.8-1.08-.964-1.812-2.156-2.024-2.52-.212-.368-.024-.564.16-.748.164-.164.364-.428.548-.644.18-.212.244-.364.364-.608.124-.244.064-.46-.032-.644-.092-.184-.824-1.984-1.128-2.72-.3-.712-.6-.616-.824-.628-.212-.008-.46-.008-.704-.008-.244 0-.644.092-1.008.46-.364.364-1.4 1.372-1.4 3.344 0 1.972 1.432 3.88 1.632 4.148.2.264 2.816 4.3 6.824 6.028.952.412 1.696.656 2.276.84.956.304 1.828.26 2.516.16.768-.116 2.356-.964 2.688-1.896.336-.932.336-1.732.236-1.896-.096-.164-.34-.264-.708-.452z"
        />
      </svg>
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </a>
  );
};

export default WhatsAppButton;
