import { motion } from "framer-motion";
import { MessageCircleHeart } from "lucide-react";

const reviews = [
  {
    name: "Raphaela Tanganelli",
    text: "Ótimos profissionais, super atenciosos, ambiente limpo e organizado.",
  },
  {
    name: "Sol",
    text: "Nota 1000 sem palavras atendimento super carinhoso com a minha cachorra Amei",
  },
  {
    name: "Cristiano Oliveira",
    text: "Foi muito bom, médicos super competentes tratam bem os animais.",
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-32 relative z-10 bg-white" id="depoimentos">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 border border-rose-200 text-rose-800 font-display font-semibold text-sm mb-6"
          >
            <MessageCircleHeart className="w-4 h-4" /> Depoimentos
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-primary tracking-tight mb-4">
            Amor em forma de <span className="text-accent-rose">palavras</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100, damping: 20 }}
              className="bg-surface-base rounded-[2.5rem] p-10 relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute -top-5 -left-5 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                <span className="text-4xl">🐾</span>
              </div>
              
              <p className="text-text-primary text-lg font-sans font-medium mb-10 min-h-[100px] leading-relaxed pt-4">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-amber-200 flex items-center justify-center text-amber-900 font-display font-bold text-xl shadow-inner">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-text-primary font-display font-bold text-lg">{review.name}</h4>
                  <div className="flex gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-amber-500 fill-amber-500" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
