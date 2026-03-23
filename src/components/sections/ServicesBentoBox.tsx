import { BentoCard } from "../ui/BentoCard";
import { motion } from "framer-motion";
import { HeartPulse, Sparkles, Bone, Activity, Syringe } from "lucide-react";

export const ServicesBentoBox = () => {
  return (
    <section className="py-32 bg-surface-base relative z-10" id="especialidades">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-fr">
          
          {/* Main Card: Especialidades */}
          <motion.div className="md:col-span-8 flex flex-col">
            <BentoCard delay={0.1} className="flex-1 flex flex-col justify-between overflow-hidden relative">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="w-16 h-16 rounded-3xl bg-amber-100 text-amber-600 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <HeartPulse strokeWidth={2} size={32} />
                </div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-display font-bold text-text-primary mb-4">Especialidades Fofas</h3>
                <p className="text-text-secondary font-sans max-w-lg mb-8 leading-relaxed">
                  Veterinários especialistas focados em patologias específicas para um direcionamento exato e tratamento super eficiente.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {['Dermatologista', 'Oncologista', 'Ortopedista', 'Endocrinologista', 'Oftalmologista', 'Nutricionista', 'Nefrologista'].map(spec => (
                    <motion.span 
                      key={spec} 
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="cursor-pointer px-4 py-2 rounded-full border border-amber-200 bg-amber-50 text-amber-800 text-sm font-sans font-semibold shadow-sm hover:shadow-md hover:bg-amber-100 hover:text-amber-900 transition-colors"
                    >
                      {spec}
                    </motion.span>
                  ))}
                </div>
              </div>
            </BentoCard>
          </motion.div>

          {/* Exames */}
          <motion.div className="md:col-span-4 flex flex-col">
            <BentoCard delay={0.2} className="flex-1 flex flex-col justify-between bg-accent-sky/5 border-none relative overflow-hidden">
               <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-sky-200 rounded-full blur-3xl opacity-50 pointer-events-none" />
              <Activity className="w-12 h-12 text-accent-sky mb-8 border border-sky-200/50 p-2 rounded-2xl bg-white shadow-sm" strokeWidth={2} />
              <div className="relative z-10">
                <h3 className="text-2xl font-display font-bold text-text-primary mb-3">Diagnóstico Preciso</h3>
                <p className="text-text-secondary font-sans leading-relaxed">
                  Raio-X digital, Ultrassonografia e Laboratório Especializado de Exames de Sangue no local.
                </p>
              </div>
            </BentoCard>
          </motion.div>

          {/* Cirurgia Geral */}
          <motion.div className="md:col-span-5 flex flex-col">
            <BentoCard delay={0.3} className="flex-1 flex flex-col justify-between bg-accent-rose/5 border-none relative overflow-hidden">
              <div className="absolute -top-20 -left-20 w-48 h-48 bg-rose-200 rounded-full blur-3xl opacity-50 pointer-events-none" />
              <Syringe className="w-12 h-12 text-accent-rose mb-8 border border-rose-200/50 p-2 rounded-2xl bg-white shadow-sm" strokeWidth={2} />
              <div className="relative z-10">
                <h3 className="text-2xl font-display font-bold text-text-primary mb-3">Cirurgia & Castração</h3>
                <p className="text-text-secondary font-sans leading-relaxed">
                  Bloco cirúrgico totalmente equipado para castrações seguras e cirurgias gerais com ambiente altamente esterilizado.
                </p>
              </div>
            </BentoCard>
          </motion.div>

          {/* Consultas e Prevencao */}
          <motion.div className="md:col-span-7 flex flex-col">
            <BentoCard delay={0.4} className="flex-1 flex flex-col justify-between md:flex-row items-center gap-8 bg-amber-500 text-white border-none shadow-2xl shadow-primary/20">
              <div className="flex-1">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 shadow-sm backdrop-blur-md">
                  <Bone className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4">Consultas & Vacinas</h3>
                <p className="text-amber-100 font-sans leading-relaxed max-w-md">
                  O amor mora na prevenção. Acompanhamento de rotina, carteirinha de vacinação em dia e muito, muito mimo.
                </p>
              </div>
              <div className="w-full md:w-48 h-48 rounded-[2rem] bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                <Sparkles className="w-16 h-16 text-amber-100 animate-pulse" strokeWidth={1.5} />
              </div>
            </BentoCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
