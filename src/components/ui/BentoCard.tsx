import type { ReactNode } from "react";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

interface BentoCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const BentoCard = ({ children, className, delay = 0, ...props }: BentoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, type: "spring", stiffness: 100, damping: 20 }}
      whileHover={{ y: -5 }}
      className={cn(
        "p-8 md:p-10 rounded-[2.5rem] bg-white border border-amber-50 shadow-md shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
