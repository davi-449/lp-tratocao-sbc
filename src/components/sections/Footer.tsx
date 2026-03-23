import { Heart, Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

const NAV_LINKS = [
  { name: "Início", href: "#inicio" },
  { name: "Serviços", href: "#servicos" },
  { name: "Sobre", href: "#sobre" },
  { name: "FAQ", href: "#faq" },
  { name: "Localização", href: "#localizacao" },
];

export const Footer = () => {
  return (
    <footer className="bg-white border-t-4 border-amber-100 pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand & About */}
          <div className="flex flex-col items-start">
            <a href="#inicio" className="flex items-center gap-2 mb-6 focus:outline-hidden focus-visible:ring-2 ring-primary rounded-lg">
              <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center text-xl shadow-md">
                🐾
              </div>
              <span className="font-display font-black text-2xl tracking-tight text-text-primary">
                Trato<span className="text-primary">Cão</span>
              </span>
            </a>
            <p className="text-text-secondary font-sans leading-relaxed mb-6">
              A clínica veterinária mais completa e acolhedora de São Bernardo do Campo. Porque ser cão (e gato) aqui é bom demais!
            </p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors focus:outline-hidden focus-visible:ring-2 ring-primary">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors focus:outline-hidden focus-visible:ring-2 ring-primary">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start md:px-8">
            <h3 className="font-display font-bold text-xl text-text-primary mb-6">Links Rápidos</h3>
            <div className="flex flex-col gap-3 w-full">
              {NAV_LINKS.map(link => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-text-secondary font-sans font-medium hover:text-primary transition-colors focus:outline-hidden focus-visible:ring-2 ring-primary rounded-sm inline-flex items-center w-max"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/30 mr-2" />
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start">
            <h3 className="font-display font-bold text-xl text-text-primary mb-6">Fale Conosco</h3>
            <div className="flex items-start gap-4 mb-4">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
              <p className="text-text-secondary font-sans text-sm">
                Rua Santana, 286 - Paulicéia<br/>
                São Bernardo do Campo - SP
              </p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <p className="text-text-secondary font-sans text-sm font-bold">
                (11) 98575-5354
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <p className="text-text-secondary font-sans text-sm">
                contato@tratocao.com.br
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-amber-100/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary font-sans text-sm">
            © {new Date().getFullYear()} TratoCão Clínica Veterinária. Todos os direitos reservados.
          </p>
          <p className="text-text-secondary font-sans text-sm flex items-center gap-1">
            Feito com <Heart className="w-4 h-4 text-accent-rose fill-accent-rose animate-pulse" /> para os pets.
          </p>
        </div>
      </div>
    </footer>
  );
};
