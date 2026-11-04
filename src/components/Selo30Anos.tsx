import React from 'react';
import { Award, Star, ShieldCheck } from 'lucide-react';

interface Selo30AnosProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  variant?: 'gold' | 'dark-gold';
}

export const Selo30Anos: React.FC<Selo30AnosProps> = ({
  size = 'md',
  className = '',
  variant = 'gold',
}) => {
  if (size === 'sm') {
    return (
      <div
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-md ${
          variant === 'gold'
            ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 border border-amber-200'
            : 'bg-slate-900 border-2 border-amber-400 text-amber-300'
        } ${className}`}
      >
        <Award className="w-3.5 h-3.5 fill-current" />
        <span>30 Anos de Experiência</span>
      </div>
    );
  }

  // Medium / Large: Authentic circular medal/seal
  const isLarge = size === 'lg';
  const dimensionClass = isLarge ? 'w-32 h-32' : 'w-24 h-24 sm:w-28 sm:h-28';

  return (
    <div
      className={`relative rounded-full flex flex-col items-center justify-center text-center p-2 shadow-2xl transition-transform hover:scale-105 select-none ${dimensionClass} ${
        variant === 'gold'
          ? 'bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 text-slate-950 border-4 border-amber-200/90 ring-4 ring-amber-500/30'
          : 'bg-slate-950 text-amber-300 border-4 border-amber-400 ring-4 ring-amber-400/20'
      } ${className}`}
      title="Selo de 30 Anos de Experiência em GNV"
    >
      {/* Outer scalloped/notched decorative ring */}
      <div className="absolute inset-1 rounded-full border border-dashed border-slate-950/40 pointer-events-none" />

      {/* Top curved/label text */}
      <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider leading-none text-slate-950">
        TRADIÇÃO
      </span>

      {/* Central Big Number 30 */}
      <div className="flex items-center justify-center my-0.5">
        <span className="text-2xl sm:text-3xl font-black font-display tracking-tighter leading-none text-slate-950">
          30
        </span>
      </div>

      {/* Subtext */}
      <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-tight leading-none text-slate-950">
        ANOS
      </span>

      <span className="text-[8px] sm:text-[9px] font-extrabold uppercase tracking-widest text-slate-900 mt-0.5">
        EXPERIÊNCIA
      </span>

      {/* Stars rating */}
      <div className="flex items-center gap-0.5 mt-0.5 text-slate-950">
        <Star className="w-2.5 h-2.5 fill-slate-950 stroke-none" />
        <Star className="w-2.5 h-2.5 fill-slate-950 stroke-none" />
        <Star className="w-2.5 h-2.5 fill-slate-950 stroke-none" />
      </div>

      {/* Ribbon tail underneath */}
      <div className="absolute -bottom-2 bg-slate-950 border border-amber-400/60 text-amber-300 text-[8px] sm:text-[9px] font-black px-2.5 py-0.5 rounded-full shadow-md uppercase tracking-wider whitespace-nowrap">
        COMPROVADA
      </div>
    </div>
  );
};
