import { BentoCard } from "../ui/BentoCard";
import { motion } from "framer-motion";
import { HeartPulse, Sparkles, Bone, Activity, Syringe } from "lucide-react";

export const ServicesBentoBox = () => {
  return (
    <section className="py-32 bg-surface-base relative z-10 focus:outline-hidden" id="especialidades" tabIndex={-1}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-amber-100 border border-amber-200 text-amber-800 font-display font-semibold text-sm mb-6"
          >
            Nossos Cuidados
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-primary tracking-tight mb-6">
            Estrutura Completa de <br/><span className="text-accent-rose">Amor e Cuidado</span>
          </h2>
          <p className="text-text-secondary font-sans max-w-2xl mx-auto text-lg leading-relaxed">
            De vacinas preventivas a cirurgias complexas, aqui seu pet encontra tudo o que precisa em um só lugar muito fofo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Card: Especialidades */}
          <motion.div className="md:col-span-8 flex flex-col bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] justify-between p-8 md:p-12 border border-slate-100/50">
            <BentoCard delay={0.1} className="p-0 border-none shadow-none bg-transparent hover:shadow-none hover:-translate-y-0 h-full flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-10">
                  <HeartPulse strokeWidth={2.5} size={28} />
                </div>
                <h3 className="text-3xl font-display font-bold text-text-primary mb-4">Especialidades Fofas</h3>
                <p className="text-slate-500 font-sans max-w-lg mb-8 leading-relaxed font-medium">
                  Veterinários especialistas focados em patologias específicas para um direcionamento exato e tratamento super eficiente.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-auto">
                {['Dermatologista', 'Oncologista', 'Ortopedista', 'Endocrinologista', 'Oftalmologista', 'Nutricionista', 'Nefrologista'].map(spec => (
                  <span 
                    key={spec} 
                    className="px-4 py-1.5 rounded-full border-2 border-amber-100 bg-transparent text-amber-700 text-sm font-sans font-bold shadow-xs hover:border-amber-300 transition-colors"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </BentoCard>
          </motion.div>

          {/* Exames */}
          <motion.div className="md:col-span-4 flex flex-col bg-linear-to-br from-sky-50 to-teal-50/30 rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
            <BentoCard delay={0.2} className="p-0 border-none shadow-none bg-transparent hover:shadow-none hover:-translate-y-0 h-full flex flex-col justify-between">
              <div>
                <Activity className="w-10 h-10 text-accent-sky mb-10" strokeWidth={2.5} />
                <h3 className="text-2xl font-display font-bold text-slate-800 mb-4">Diagnóstico Preciso</h3>
                <p className="text-slate-500 font-sans leading-relaxed font-medium">
                  Raio-X digital, Ultrassonografia e Laboratório Especializado de Exames de Sangue no local.
                </p>
              </div>
            </BentoCard>
          </motion.div>

          {/* Cirurgia Geral */}
          <motion.div className="md:col-span-5 flex flex-col bg-rose-50/50 rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
            <BentoCard delay={0.3} className="p-0 border-none shadow-none bg-transparent hover:shadow-none hover:-translate-y-0 h-full flex flex-col justify-between">
              <div>
                <Syringe className="w-10 h-10 text-accent-rose mb-10" strokeWidth={2.5} />
                <h3 className="text-2xl font-display font-bold text-slate-800 mb-4">Cirurgia & Castração</h3>
                <p className="text-slate-500 font-sans leading-relaxed font-medium">
                  Bloco cirúrgico totalmente equipado para castrações seguras e cirurgias gerais com ambiente altamente esterilizado.
                </p>
              </div>
            </BentoCard>
          </motion.div>

          {/* Consultas e Prevencao */}
          <motion.div className="md:col-span-7 flex flex-col bg-amber-500 text-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-amber-500/20">
            <BentoCard delay={0.4} className="p-0 border-none shadow-none bg-transparent hover:shadow-none hover:-translate-y-0 h-full flex flex-col md:flex-row items-center gap-8 justify-between">
              <div className="flex-1 w-full flex flex-col items-start justify-center h-full">
                <Bone className="w-12 h-12 text-white mb-8 -rotate-45" strokeWidth={2} />
                <h3 className="text-3xl font-display font-bold mb-4">Consultas & Vacinas</h3>
                <p className="text-amber-50 font-sans leading-relaxed text-lg max-w-sm font-medium">
                  O amor mora na prevenção. Acompanhamento de rotina, carteirinha de vacinação em dia e muito, muito mimo.
                </p>
              </div>
              <div className="w-40 h-40 shrink-0 rounded-[2rem] bg-amber-400 flex items-center justify-center border border-amber-300/50">
                <Sparkles className="w-14 h-14 text-white animate-pulse" strokeWidth={2} />
              </div>
            </BentoCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
