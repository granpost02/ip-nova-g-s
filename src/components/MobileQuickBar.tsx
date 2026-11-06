import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/companyData';

interface MobileQuickBarProps {
  onOpenQuoteModal: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 flex items-center gap-2 shadow-2xl">
      <a
        href={COMPANY_INFO.phone.link}
        className="flex-1 flex items-center justify-center gap-1.5 py-3 px-2 bg-slate-900 active:bg-slate-800 border border-slate-700/80 rounded-xl text-xs font-bold text-white transition-colors"
        title="Ligar para (21) 3584-0147"
      >
        <Phone className="w-4 h-4 text-sky-400 shrink-0" />
        <span>LIGAR (21) 3584-0147</span>
      </a>

      <button
        onClick={onOpenQuoteModal}
        className="flex-1 flex items-center justify-center gap-2 py-3 px-3 bg-yellow-400 active:bg-yellow-300 text-slate-950 rounded-xl text-xs font-black transition-colors shadow-md shadow-yellow-400/20"
      >
        <MessageCircle className="w-4 h-4 fill-slate-950" />
        <span>ORÇAMENTO</span>
      </button>

      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-11 flex items-center justify-center bg-emerald-600 active:bg-emerald-500 rounded-xl text-white transition-colors"
        aria-label="WhatsApp direto"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
      </a>
    </div>
  );
};
