import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const ScrollIndicator = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="flex flex-col items-center justify-center gap-2 mt-8"
      aria-hidden="true"
    >
      <span className="text-xs font-mono uppercase tracking-widest text-text-muted">Rolar para baixo</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 2, 
          ease: "easeInOut",
          repeatType: "loop" 
        }}
        className="text-primary opacity-60"
      >
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </motion.div>
  );
};
