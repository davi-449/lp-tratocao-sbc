import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "puffy";
  size?: "sm" | "md" | "lg" | "icon";
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-display font-semibold transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none rounded-full";
    
    const variants = {
      primary: "bg-primary text-white hover:bg-primary-dim shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40",
      secondary: "bg-accent-rose text-white hover:bg-rose-500 shadow-lg shadow-accent-rose/25 hover:shadow-xl hover:shadow-accent-rose/40",
      outline: "border-2 border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/40",
      ghost: "text-text-secondary hover:text-primary hover:bg-primary/5",
      puffy: "puffy-glass text-primary hover:bg-white"
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-12 px-8 text-base",
      lg: "h-14 px-10 text-lg",
      icon: "h-12 w-12"
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className={cn(baseStyles, variants[variant as keyof typeof variants], sizes[size as keyof typeof sizes], className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
