import React from 'react';
import { Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface MobileQuickBarProps {
  onOpenQuoteModal?: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = () => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#091426]/95 backdrop-blur-md border-t border-blue-900/50 p-2.5 flex items-center gap-2 shadow-2xl">
      <a
        href={COMPANY_INFO.phone.link}
        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-[#102038] active:bg-blue-900/60 border border-blue-800/70 rounded-xl text-xs font-bold text-white transition-colors"
        title="Ligar para (21) 3584-0147"
      >
        <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
        <span>LIGAR AGORA · (21) 3584-0147</span>
      </a>
    </div>
  );
};
