import React from 'react';
import { X, CheckSquare, AlertCircle, FileText, ExternalLink } from 'lucide-react';
import { CORPORATE_CONFIRMATION_CHECKLIST, COMPANY_INFO } from '../data/companyData';

interface PendingItemsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PendingItemsModal: React.FC<PendingItemsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400">
            <CheckSquare className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white font-display">
              Informações Técnicas & Cadastrais a Confirmar
            </h3>
            <p className="text-xs text-slate-400">
              Checklist de validação interna da empresa NOVAGÁS
            </p>
          </div>
        </div>

        <div className="bg-amber-400/10 border border-amber-400/20 rounded-xl p-3.5 mb-6 text-xs text-amber-200 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span>
            Em total respeito às diretrizes de conformidade e integridade técnica, este site foi estruturado sem dados fictícios. Os itens abaixo foram sinalizados e estão prontos para receber as informações complementares da empresa.
          </span>
        </div>

        <div className="space-y-4">
          {CORPORATE_CONFIRMATION_CHECKLIST.map((item, index) => (
            <div
              key={index}
              className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-2"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-semibold text-sm text-white">
                  {index + 1}. {item.item}
                </span>
                <span className="text-[11px] font-medium bg-slate-800 text-amber-300 px-2 py-0.5 rounded border border-slate-700 whitespace-nowrap">
                  {item.status}
                </span>
              </div>
              <p className="text-xs text-slate-300">
                <strong className="text-slate-400 font-medium">Recomendação: </strong>
                {item.recommendation}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <span>Endereço atual: {COMPANY_INFO.address.fullFormatted}</span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto py-2 px-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors"
          >
            Entendido, fechar janela
          </button>
        </div>
      </div>
    </div>
  );
};
