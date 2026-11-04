import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/companyData';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 flex items-end flex-col">
      {/* Speech bubble tooltip */}
      {showTooltip && (
        <div className="relative mb-2.5 max-w-[260px] bg-slate-900 border border-slate-700/80 rounded-xl p-3 shadow-xl shadow-black/40 text-slate-100 text-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-slate-400 hover:text-white p-0.5"
            aria-label="Fechar mensagem"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-bold text-white text-xs">Atendimento Online</span>
          </div>
          <p className="text-slate-300 text-[11px] leading-tight pr-2">
            Olá! Precisa de orçamento para GNV ou reteste de cilindro? Fale conosco direto no WhatsApp!
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full shadow-lg shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all focus:outline-none"
        aria-label="Falar com a NOVAGÁS pelo WhatsApp"
        title="Falar no WhatsApp (21) 99379-1003"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-400/30 animate-pulse pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-white stroke-none relative z-10" />
      </a>
    </div>
  );
};
