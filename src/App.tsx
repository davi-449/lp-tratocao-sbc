import { HeroSection } from "./components/sections/HeroSection";
import { ServicesBentoBox } from "./components/sections/ServicesBentoBox";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { LocationSection } from "./components/sections/LocationSection";
import { FloatingWhatsApp } from "./components/sections/FloatingWhatsApp";

function App() {
  return (
    <div className="min-h-dvh bg-surface-base selection:bg-primary/20 selection:text-primary-dim">
      <HeroSection />
      <ServicesBentoBox />
      <TestimonialsSection />
      <LocationSection />
      <FloatingWhatsApp />
      
      <footer className="bg-surface-base py-12 border-t border-amber-200/40 text-center px-4">
        <p className="font-sans text-text-secondary text-sm font-medium tracking-wide">
          © {new Date().getFullYear()} TratoCão Clínica Veterinária. Todos os direitos reservados. Feito com ❤️ e muitos petiscos.
        </p>
      </footer>
    </div>
  );
}

export default App;
