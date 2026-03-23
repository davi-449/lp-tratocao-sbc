import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  text: string;
  source?: string;
  rating?: number;
  index?: number;
}

export const TestimonialCard = ({ name, text, source = "Google", rating = 5, index = 0 }: TestimonialCardProps) => {
  const avatarColors = ["bg-amber-100 text-amber-600", "bg-rose-100 text-rose-600", "bg-sky-100 text-sky-600", "bg-emerald-100 text-emerald-600"];
  const colorIndex = index % avatarColors.length;

  return (
    <div className="puffy-glass rounded-[2.5rem] p-8 relative flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 border border-white/40">
      <div className="absolute -top-5 -left-5 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm text-2xl">
        🐾
      </div>
      
      <div className="flex-1 flex flex-col justify-center mb-8 pt-4">
        <p className="text-text-primary text-lg font-sans font-medium leading-relaxed italic">
          "{text}"
        </p>
      </div>

      <div className="flex items-center gap-4 mt-auto">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-xl shadow-inner ${avatarColors[colorIndex]}`}>
          {name.charAt(0).toUpperCase()}
        </div>
        <div>
          <h4 className="text-text-primary font-display font-bold text-lg leading-tight">{name}</h4>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex gap-0.5">
              {Array.from({ length: rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-primary fill-primary" />
              ))}
            </div>
            <span className="text-xs font-bold text-text-muted uppercase tracking-wider">{source}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
