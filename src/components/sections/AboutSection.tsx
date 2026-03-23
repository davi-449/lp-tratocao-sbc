import { motion } from "framer-motion";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import aboutImg from "../../assets/about_bg.png";
import { Award, Heart, ShieldCheck } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden focus:outline-hidden" tabIndex={-1}>
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Narrativa (Texto) */}
          <div className="flex-1 w-full lg:pr-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-accent-rose/10 border border-accent-rose/20 text-accent-rose font-display font-semibold text-sm mb-6"
            >
              Nossa História
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6"
            >
              Mais que uma clínica, <br/><span className="text-primary">uma família.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-text-secondary font-sans leading-relaxed mb-8"
            >
              A TratoCão nasceu do amor incondicional pelos animais. Com um ambiente acolhedor,
              equipe especializada e equipamentos de última geração, nós não tratamos apenas 
              sintomas, nós cuidamos de vidas. Seu pet faz parte da nossa família.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-amber-50/50 border border-amber-100">
                <div className="p-3 bg-amber-100 text-amber-600 rounded-xl">
                  <Heart className="w-6 h-6 fill-amber-500" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-text-primary text-lg">Amor Sincero</h4>
                  <p className="text-sm text-text-secondary max-w-[200px] mt-1">Carinho e empatia em cada atendimento.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-sky-50/50 border border-sky-100">
                <div className="p-3 bg-sky-100 text-sky-600 rounded-xl">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-text-primary text-lg">Segurança</h4>
                  <p className="text-sm text-text-secondary max-w-[200px] mt-1">Estrutura hospitalar premium completa.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Imagem e Métricas Animadas */}
          <div className="w-full lg:w-5/12 relative">
            <motion.div
              initial={{ opacity: 0, x: 30, rotate: -2 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white"
            >
              <img src={aboutImg} alt="Equipe TratoCão recebendo um Golden Retriever" className="w-full h-auto object-cover aspect-[4/5] md:aspect-square" loading="lazy" />
              
              {/* Badge Overlay */}
              <div className="absolute top-6 left-6 puffy-glass px-5 py-3 rounded-2xl">
                <div className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-primary" />
                  <span className="font-display font-bold text-text-primary text-lg">Excelência</span>
                </div>
              </div>
            </motion.div>

            {/* Metrics Floating Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -left-8 md:-left-12 puffy-glass p-6 rounded-3xl border border-white/50 shadow-xl"
            >
              <div className="text-4xl md:text-5xl font-display font-black text-primary mb-1">
                +<AnimatedCounter value={10} duration={1500} />
              </div>
              <p className="text-sm font-bold text-text-secondary uppercase tracking-widest">Anos de Experiência</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute top-1/2 -right-6 puffy-glass p-5 rounded-3xl border border-white/50 shadow-xl"
            >
              <div className="text-3xl font-display font-black text-accent-rose mb-1">
                +<AnimatedCounter value={5000} duration={2500} />
              </div>
              <p className="text-xs font-bold text-text-secondary uppercase tracking-widest">Pets Atendidos</p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
