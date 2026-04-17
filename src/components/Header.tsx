import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const prefix = isHome ? "" : "/";

  const navLinks = [
    { href: `${prefix}#inicio`, label: "Início" },
    { href: `${prefix}#servicos`, label: "Serviços" },
    { href: `${prefix}#galeria`, label: "Trabalhos" },
    { href: `${prefix}#depoimentos`, label: "Depoimentos" },
    { href: `${prefix}#orcamento`, label: "Orçamento" },
    { href: "/blog", label: "Blog", isRoute: true },
    { href: `${prefix}#faq`, label: "FAQ" },
    { href: `${prefix}#localizacao`, label: "Localização" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12 md:h-20">
          {/* Nome da Oficina */}
          <a href="#inicio" className="flex items-center">
            <span className="font-display font-bold text-sm md:text-xl text-foreground">
              AUTO <span className="text-primary">PRIME</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+5531988480488"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:shadow-glow transition-shadow"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">Ligar Agora</span>
              <span className="lg:hidden">Ligar</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                  >
                    {link.label}
                  </a>
                )
              )}
              <a
                href="tel:+5531988480488"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium mt-2"
              >
                <Phone className="w-4 h-4" />
                Ligar Agora
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
