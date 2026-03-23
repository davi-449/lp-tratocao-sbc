import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { Accordion } from "../ui/Accordion";

const faqData = [
  {
    question: "A clínica funciona 24 horas?",
    answer: "Nós atendemos em horários específicos: de Segunda a Sexta das 9:00 às 17:00, e aos Sábados e Domingos das 8:30 às 15:00. Para emergências fora desse horário, recomendamos clínicas parceiras 24h na nossa central telefônica."
  },
  {
    question: "Quais são as especialidades atendidas?",
    answer: "Temos um quadro super completo! Atendemos oftalmologia, dermatologia, oncologia, nefrologia, ortopedia, cardiologia e nutrição animal. O seu pet recebe cuidado focado na necessidade exata dele."
  },
  {
    question: "Fazem exames no local?",
    answer: "Sim! Somos equipados com laboratório para exames de sangue, além de Raio-X digital e aparelho de Ultrassonografia. Mais rapidez e eficácia para o diagnóstico do seu melhor amigo."
  },
  {
    question: "Como funciona a castração?",
    answer: "A castração é feita em um bloco cirúrgico totalmente esterilizado, com anestesia inalatória e monitoramento cardíaco contínuo. É um procedimento rápido, seguro e muito amoroso da nossa parte."
  },
  {
    question: "Vocês atendem planos de saúde pet?",
    answer: "Atendemos diversos planos de saúde animal! Por favor, entre em contato pelo nosso WhatsApp para confirmar se o seu convênio específico é aceito em nossa clínica no momento."
  },
  {
    question: "Quais as formas de pagamento?",
    answer: "Aceitamos Pix, todas as bandeiras de cartões de débito e crédito, e parcelamos procedimentos como cirurgias e exames complexos para não pesar no seu bolso."
  }
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-surface-base relative z-10 focus:outline-hidden" tabIndex={-1}>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-16 text-center flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200 text-amber-800 font-display font-semibold text-sm mb-6"
          >
            <HelpCircle className="w-4 h-4" /> Dúvidas Frequentes
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-5xl font-display font-bold text-text-primary tracking-tight"
          >
            Ainda com dúvidas? <br/><span className="text-primary mt-2 block">Nós te ajudamos.</span>
          </motion.h2>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        >
          <Accordion items={faqData} />
        </motion.div>
      </div>
    </section>
  );
};
