import { Navbar } from "./components/sections/Navbar";
import { HeroSection } from "./components/sections/HeroSection";
import { ServicesBentoBox } from "./components/sections/ServicesBentoBox";
import { AboutSection } from "./components/sections/AboutSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { FAQSection } from "./components/sections/FAQSection";
import { LocationSection } from "./components/sections/LocationSection";
import { Footer } from "./components/sections/Footer";
import { FloatingWhatsApp } from "./components/sections/FloatingWhatsApp";

function App() {
  return (
    <div className="min-h-dvh bg-surface-base selection:bg-primary/20 selection:text-primary-dim">
      <Navbar />
      <HeroSection />
      <ServicesBentoBox />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <LocationSection />
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}

export default App;
