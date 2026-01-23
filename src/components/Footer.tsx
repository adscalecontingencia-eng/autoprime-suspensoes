import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <img 
              src={logo} 
              alt="Auto Prime Suspensões" 
              className="h-12 md:h-14 w-auto mb-4"
            />
            <p className="text-muted-foreground text-sm md:text-base max-w-sm mb-6">
              Especialistas em suspensão automotiva em Conselheiro Lafaiete. 
              Qualidade, confiança e o melhor atendimento para o seu veículo.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/autoprimesuspensoes23?igsh=dTk2OHliYnVydmgx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Links Rápidos</h4>
            <nav className="flex flex-col gap-2 md:gap-3">
              <a href="#inicio" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">Início</a>
              <a href="#sobre" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">Sobre</a>
              <a href="#servicos" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">Serviços</a>
              <a href="#galeria" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">Trabalhos</a>
              <a href="#localizacao" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">Localização</a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contato</h4>
            <div className="space-y-2 md:space-y-3">
              <a 
                href="tel:+5531988480488"
                className="flex items-center gap-3 text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>(31) 98848-0488</span>
              </a>
              <div className="flex items-center gap-3 text-sm md:text-base text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>contato@autoprime.com</span>
              </div>
              <div className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Rua Geraldo Gervão, 125<br/>Manoel Correa - Conselheiro Lafaiete/MG</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
            © 2024 Auto Prime Suspensões. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Desenvolvido com ❤️ para você
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
