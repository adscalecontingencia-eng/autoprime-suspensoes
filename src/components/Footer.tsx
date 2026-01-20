import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-display font-bold text-xl text-primary-foreground">AP</span>
              </div>
              <div>
                <span className="font-display font-bold text-lg text-foreground">AUTO PRIME</span>
                <span className="block text-xs text-muted-foreground -mt-1">SUSPENSÕES</span>
              </div>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6">
              Especialistas em suspensão automotiva em Conselheiro Lafaiete. 
              Qualidade, confiança e o melhor atendimento para o seu veículo.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
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
            <nav className="flex flex-col gap-3">
              <a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors">Início</a>
              <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre</a>
              <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">Serviços</a>
              <a href="#videos" className="text-muted-foreground hover:text-primary transition-colors">Trabalhos</a>
              <a href="#localizacao" className="text-muted-foreground hover:text-primary transition-colors">Localização</a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>(31) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>contato@autoprime.com</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Rua Geraldo Gervão, 125<br/>Manoel Correa - Conselheiro Lafaiete/MG</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
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
