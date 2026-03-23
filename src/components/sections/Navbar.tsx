import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";

const NAV_LINKS = [
  { name: "Início", href: "#inicio" },
  { name: "Serviços", href: "#servicos" },
  { name: "Sobre", href: "#sobre" },
  { name: "FAQ", href: "#faq" },
  { name: "Localização", href: "#localizacao" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "h-16 surface-glass backdrop-blur-xl border-b border-amber-200/40 shadow-sm"
          : "h-24 bg-transparent"
      }`}
    >
      <div className="container h-full mx-auto px-4 flex items-center justify-between">
        <a 
          href="#inicio" 
          className="flex items-center gap-2 group focus:outline-hidden focus-visible:ring-2 ring-primary rounded-lg"
        >
          <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center text-xl shadow-md group-hover:scale-105 transition-transform duration-300">
            🐾
          </div>
          <span className="font-display font-black text-xl tracking-tight text-text-primary">
            Trato<span className="text-primary">Cão</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans font-bold text-text-secondary hover:text-primary transition-colors focus:outline-hidden focus-visible:ring-2 ring-primary rounded-md px-2 py-1"
            >
              {link.name}
            </a>
          ))}
          <Button 
            variant="primary" 
            size="sm" 
            className="hidden lg:flex"
            onClick={() => window.open("https://wa.me/5511985755354", "_blank")}
          >
            🐾 Agendar Consulta
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-text-primary focus:outline-hidden focus-visible:ring-2 ring-primary rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Abrir menu de navegação"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 surface-glass backdrop-blur-xl border-b border-amber-200/40 shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-sans font-bold text-lg text-text-secondary hover:text-primary p-2 focus:outline-hidden focus-visible:ring-2 ring-primary rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <Button 
                variant="primary" 
                className="w-full mt-2"
                onClick={() => {
                  window.open("https://wa.me/5511985755354", "_blank");
                  setIsOpen(false);
                }}
              >
                Agendar Consulta
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
