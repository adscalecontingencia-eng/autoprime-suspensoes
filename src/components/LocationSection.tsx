import { MapPin, Navigation, Clock, Phone, MessageCircle } from "lucide-react";

const LocationSection = () => {
  const address = "Rua Geraldo Gervão, 125 - Manoel Correa, Conselheiro Lafaiete - MG";
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
  
  const contactInfo = [
    {
      icon: MapPin,
      label: "Endereço",
      value: "Rua Geraldo Gervão, 125",
      subValue: "Manoel Correa - Conselheiro Lafaiete/MG",
    },
    {
      icon: Clock,
      label: "Horário de Funcionamento",
      value: "Segunda a Sexta: 8h às 18h",
      subValue: "Sábado: 8h às 12h",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "(31) 99999-9999",
      subValue: "Ligue agora",
    },
  ];

  return (
    <section id="localizacao" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-display font-semibold text-sm tracking-wider mb-4">
            LOCALIZAÇÃO
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            VENHA NOS <span className="text-gradient">VISITAR</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Estamos localizados no bairro Manoel Correa, em Conselheiro Lafaiete. 
            Clique no mapa para traçar sua rota!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <div className="relative">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-card group"
            >
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.5!2d-43.7864!3d-20.6603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDM5JzM3LjEiUyA0M8KwNDcnMTEuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Auto Prime Suspensões"
                className="grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              
              {/* Overlay CTA */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-display font-semibold shadow-glow">
                  <Navigation className="w-5 h-5" />
                  Traçar Rota
                </div>
              </div>
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-xl bg-card-gradient border border-border"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">{info.label}</span>
                    <p className="font-display font-semibold text-foreground mt-1">{info.value}</p>
                    <p className="text-sm text-muted-foreground">{info.subValue}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-lg font-display font-semibold hover:shadow-glow transition-all hover:scale-105"
              >
                <Navigation className="w-5 h-5" />
                Traçar Rota
              </a>
              <a
                href="https://wa.me/5531999999999?text=Olá! Gostaria de mais informações."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 border border-border text-foreground rounded-lg font-display font-semibold hover:bg-secondary transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
