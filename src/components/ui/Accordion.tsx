import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem = ({ question, answer, isOpen, onClick }: AccordionItemProps) => {
  return (
    <div className="puffy-glass rounded-3xl overflow-hidden mb-4 border border-amber-200/50">
      <button
        type="button"
        className="flex w-full items-center justify-between p-6 text-left focus:outline-hidden focus-visible:ring-2 ring-primary ring-inset"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-xl font-bold text-text-primary pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 200, damping: 20 }}
          className="shrink-0 ml-4 p-2 bg-amber-100/50 rounded-full"
        >
          <ChevronDown className="w-6 h-6 text-primary" strokeWidth={2.5} />
        </motion.div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 200, damping: 20 }}
          >
            <div className="px-6 pb-6 pt-0 text-text-secondary leading-relaxed font-sans text-lg">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AccordionProps {
  items: { question: string; answer: string }[];
  className?: string;
}

export const Accordion = ({ items, className }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("w-full", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(index === openIndex ? null : index)}
        />
      ))}
    </div>
  );
};
