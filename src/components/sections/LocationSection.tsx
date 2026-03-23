import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, CalendarHeart, Copy, Check } from "lucide-react";

export const LocationSection = () => {
  const [copied, setCopied] = useState(false);
  const address = "R. Santana, 286, Paulicéia, São Bernardo do Campo - SP";
  const currentDay = new Date().getDay();
  const currentHour = new Date().getHours();
  
  // Seg-Sex (1-5): 09:00 - 17:00
  // Sab-Dom (6,0): 08:30 - 15:00
  let isOpen = false;
  if (currentDay >= 1 && currentDay <= 5) {
    isOpen = currentHour >= 9 && currentHour < 17;
  } else {
    isOpen = currentHour >= 8 && (currentHour < 15 || (currentHour === 15 && new Date().getMinutes() === 0));
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-[700px] flex items-center bg-surface-base focus:outline-hidden" id="localizacao" tabIndex={-1}>
      {/* Light Playful Map Background */}
      <div className="absolute inset-0 z-0 bg-surface-base">
        <iframe 
          title="Mapa de Localização da TratoCão"
          aria-label="Mapa interativo mostrando a localização da clínica"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.766324317112!2d-46.586617!3d-23.6473072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce44bd7f0e9dd1%3A0x86134f6bb99d6383!2sTratoC%C3%A3o%20Cl%C3%ADnica%20Veterin%C3%A1ria!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'contrast(1.05) opacity(0.6)' }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="pointer-events-none mix-blend-multiply opacity-50"
        />
        <div className="absolute inset-0 bg-linear-to-r from-surface-base via-surface-base/90 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 mx-auto max-w-7xl flex justify-start">
        <div className="puffy-glass p-8 md:p-12 max-w-xl w-full rounded-[3rem] border-4 border-white shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <h2 className="text-3xl font-display font-bold text-text-primary tracking-tight">Onde a <span className="text-primary">alegria</span> mora</h2>
            <div className={`px-4 py-2 flex items-center gap-2 rounded-full border-2 ${isOpen ? 'border-primary text-amber-800 bg-amber-100' : 'border-slate-200 text-slate-600 bg-slate-50'}`}>
              <div className={`w-2.5 h-2.5 rounded-full ${isOpen ? 'bg-primary animate-pulse shadow-md shadow-primary/60' : 'bg-slate-300'}`} />
              <span className="font-sans text-sm font-bold tracking-wide">{isOpen ? 'Aberto Agora' : 'Fechado'}</span>
            </div>
          </div>

          <div className="space-y-6 mb-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-amber-50/50 border border-amber-100 hover:bg-amber-100/50 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-200 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="pt-1">
                  <h4 className="text-text-primary font-display font-bold text-lg mb-1">Localização</h4>
                  <p className="text-text-secondary font-sans font-medium text-sm leading-relaxed">R. Santana, 286<br/>Paulicéia, São Bernardo do Campo - SP</p>
                </div>
              </div>
              <button 
                onClick={handleCopy}
                className="self-start sm:self-center p-3 sm:p-2 rounded-xl bg-white border border-amber-200 text-amber-700 hover:bg-amber-200 transition-colors focus:outline-hidden focus-visible:ring-2 ring-primary"
                aria-label="Copiar endereço"
              >
                {copied ? <Check className="w-5 h-5 text-accent-mint" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>

            <div className="flex items-start gap-4 p-4">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div className="pt-1">
                <h4 className="text-text-primary font-display font-bold text-lg mb-1">Horário de Funcionamento</h4>
                <p className="text-text-secondary font-sans font-medium">Segunda a Sexta — 09:00 às 17:00</p>
                <div className="flex items-center gap-2 mt-2 text-accent-sky font-semibold text-sm bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                  <CalendarHeart className="w-4 h-4" /> Sab e Dom — 08:30 às 15:00
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0 border border-amber-200">
                <Phone className="w-6 h-6 text-primary fill-primary/20" />
              </div>
              <div className="pt-1">
                <h4 className="text-text-primary font-display font-bold text-lg mb-1">WhatsApp Sincero</h4>
                <p className="text-text-secondary font-sans font-medium text-lg tracking-wide">(11) 98575-5354</p>
              </div>
            </div>
          </div>

          <a 
            href="https://maps.google.com/?q=TratoCão+Clínica+Veterinária+São+Bernardo+do+Campo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full focus:outline-hidden focus-visible:ring-2 ring-primary rounded-full"
          >
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-full bg-white border-2 border-amber-200 text-amber-800 font-display font-bold text-lg hover:bg-amber-50 hover:border-amber-300 transition-colors flex items-center justify-center gap-2 shadow-sm focus:outline-hidden"
            >
              <MapPin className="w-5 h-5" />
              Traçar Rota no Mapa
            </motion.button>
          </a>
        </div>
      </div>
    </section>
  );
};
