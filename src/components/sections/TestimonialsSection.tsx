import { motion } from "framer-motion";
import { MessageCircleHeart } from "lucide-react";
import { TestimonialCard } from "../ui/TestimonialCard";

const reviews = [
  {
    name: "Raphaela Tanganelli",
    text: "Ótimos profissionais, super atenciosos, ambiente limpo e organizado. Meu doguinho adorou!",
    rating: 5
  },
  {
    name: "Sol",
    text: "Nota 1000 sem palavras atendimento super carinhoso com a minha cachorra Amei",
    rating: 5
  },
  {
    name: "Cristiano Oliveira",
    text: "Foi muito bom, médicos super competentes tratam bem os animais. Estrutura impecável.",
    rating: 5
  },
  {
    name: "Mariana Costa",
    text: "A melhor clínica de SBC! Salvaram meu gatinho em uma emergência 24h. Eterna gratidão.",
    rating: 5
  },
  {
    name: "Lucas Fernandes",
    text: "Preço justo e atendimento humano. Dá pra perceber que eles realmente amam o que fazem.",
    rating: 5
  },
  {
    name: "Beatriz Almeida",
    text: "As meninas da recepção são uns anjos e a Dra. é maravilhosa. Indico pra todo mundo no ABC.",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-32 relative z-10 bg-white" id="depoimentos">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-20 text-center flex flex-col justify-center items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 border border-rose-200 text-rose-800 font-display font-semibold text-sm mb-6"
          >
            <MessageCircleHeart className="w-4 h-4" /> Depoimentos Lindos
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-primary tracking-tight mb-4"
          >
            Amor em forma de <br/><span className="text-accent-rose">palavras.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100, damping: 20 }}
            >
              <TestimonialCard 
                name={review.name}
                text={review.text}
                rating={review.rating}
                index={i}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
