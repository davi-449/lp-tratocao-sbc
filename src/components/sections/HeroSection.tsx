import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Heart, Star, MapPin } from "lucide-react";
import heroBg from "../../assets/hero_bg.png";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { ScrollIndicator } from "../ui/ScrollIndicator";

export const HeroSection = () => {
  return (
    <section id="inicio" tabIndex={-1} className="relative min-h-dvh flex items-center justify-center overflow-hidden pt-20 pb-16 focus:outline-hidden outline-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-surface-base/80 via-surface-base/90 to-surface-base z-10" />
        <img src={heroBg} alt="TratoCão Clínica Veterinária" className="w-full h-full object-cover object-center filter opacity-40" />
      </div>

      <div className="container relative z-20 px-4 mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-100 shadow-sm mb-8"
          >
            <Heart className="w-5 h-5 text-accent-rose fill-accent-rose animate-bounce" />
            <span className="text-sm font-display font-bold text-amber-900 tracking-wide uppercase">O lugar mais feliz para o seu pet</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring", bounce: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-text-primary mb-6 tracking-tight leading-[1.05]"
          >
            Tecnologia de ponta com <br/><span className="text-primary block mt-2">muito carinho.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="text-lg md:text-xl text-text-secondary font-sans max-w-2xl mb-12 leading-relaxed"
          >
             Na TratoCão, somos apaixonados por ver o seu melhor amigo pular de alegria. Nossa equipe incrível une cuidado carinhoso e medicina avançada.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full sm:w-auto"
          >
            <a href="#contato" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto text-lg px-10">
                Agendar Felizardo
              </Button>
            </a>
            <a href="#servicos" className="w-full sm:w-auto">
              <Button variant="puffy" size="lg" className="w-full sm:w-auto text-lg px-10">
                Nossos Cuidados
              </Button>
            </a>
          </motion.div>

          {/* Social Proof & Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
            className="mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-amber-200/50 w-full max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-8"
          >
            {/* Reviews */}
            <div className="flex items-center gap-4 text-left">
              <div className="flex -space-x-3">
                {['bg-amber-200', 'bg-amber-400', 'bg-amber-600'].map((bgColor, index) => (
                  <div key={index} className={`w-12 h-12 rounded-full border-4 border-surface-base ${bgColor} flex items-center justify-center shadow-sm z-[${3-index}] relative`}>
                    <Star className="w-5 h-5 text-amber-700 fill-amber-500" />
                  </div>
                ))}
              </div>
              <div>
                <div className="text-text-primary font-display font-black text-xl flex items-center gap-1">
                   <AnimatedCounter value={4} duration={1000} />.<AnimatedCounter value={8} duration={1500} /><span className="text-lg">/5.0 Google</span>
                </div>
                <div className="text-text-secondary text-sm font-sans font-medium flex items-center gap-1">
                  <AnimatedCounter value={198} duration={2000} />
                  <span>Avaliações Lindas</span>
                </div>
              </div>
            </div>

            <div className="h-12 w-px bg-amber-200/80 hidden sm:block" />

            {/* Location */}
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-amber-100">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-text-primary font-display font-black text-xl leading-none">Paulicéia, SBC</div>
                <div className="text-text-secondary text-sm font-sans font-medium mt-1">Aberto sábados e domingos</div>
              </div>
            </div>
          </motion.div>

          <ScrollIndicator />

        </div>
      </div>
    </section>
  );
};
