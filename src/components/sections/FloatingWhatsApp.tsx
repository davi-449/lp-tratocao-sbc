import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/5511985755354"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1 
      }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-whatsapp text-white shadow-lg shadow-whatsapp/40 hover:shadow-xl hover:shadow-whatsapp/60 transition-shadow group flex items-center justify-center"
    >
      <div className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-20" />
      <Phone className="w-8 h-8 fill-current" />
    </motion.a>
  );
};
