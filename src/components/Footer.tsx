import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Flame, ShieldCheck, ChevronRight, HelpCircle } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/companyData';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenConfirmationModal: () => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  onOpenConfirmationModal,
  onOpenQuoteModal,
}) => {
  const handleNav = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#091426] border-t border-blue-900/50 text-slate-400 pt-16 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-blue-900/40">
          {/* Col 1: Brand & NAP Summary */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-yellow-400 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-yellow-400/20">
                <Flame className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white font-display uppercase">
                NOVA<span className="text-yellow-400">GÁS</span>
              </span>
            </div>

            <p className="text-sm leading-relaxed text-slate-300">
              Especialistas em conversão para GNV, reteste de cilindros e manutenção especializada na Rodovia Presidente Dutra (Posto Austral), Nova Iguaçu – RJ.
            </p>

            <div className="pt-2 flex flex-col gap-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-medium">Endereço:</strong>
                  {COMPANY_INFO.address.street} — <span className="text-yellow-400 font-semibold">{COMPANY_INFO.address.reference}</span>
                  <br />Nova Iguaçu – RJ
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href={COMPANY_INFO.phone.link}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.phone.formatted}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Seg à Sex 08h–18h | Sáb 08h–13h</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-display">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('inicio')}
                  className="hover:text-yellow-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Início</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('servicos')}
                  className="hover:text-yellow-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Serviços de GNV</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('sobre')}
                  className="hover:text-yellow-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Sobre a NOVAGÁS</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('avaliacoes')}
                  className="hover:text-yellow-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Avaliações no Google</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contato')}
                  className="hover:text-yellow-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Contato & Localização</span>
                </button>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-blue-900/40">
              <button
                onClick={onOpenQuoteModal}
                className="w-full text-xs font-bold py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-slate-950 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Pedir Orçamento Rápido</span>
              </button>
            </div>
          </div>

          {/* Col 3: Principais Serviços */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-display">
              Serviços GNV
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                <span>Conversão para GNV (G3 e G5)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                <span>Instalação de Kits GNV</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                <span>Reteste de Cilindro (A partir de R$ 90)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                <span>Manutenção e Troca de Filtros</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                <span>Regulagem Computadorizada</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                <span>Revisão Periódica para Frotas e Apps</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                <span>Preparação para Vistoria Inmetro</span>
              </li>
            </ul>
          </div>

          {/* Col 4: SEO Local & Região Atendida */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-display">
              Presença Regional
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Atendimento com fácil acesso para condutores de Nova Iguaçu e toda a Região Metropolitana do Rio de Janeiro:
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              <span className="bg-[#102038] border border-blue-900/50 text-slate-300 px-2 py-0.5 rounded">Rod. Pres. Dutra</span>
              <span className="bg-[#102038] border border-blue-900/50 text-slate-300 px-2 py-0.5 rounded">Nova Iguaçu</span>
              <span className="bg-[#102038] border border-blue-900/50 text-slate-300 px-2 py-0.5 rounded">Mesquita</span>
              <span className="bg-[#102038] border border-blue-900/50 text-slate-300 px-2 py-0.5 rounded">Nilópolis</span>
              <span className="bg-[#102038] border border-blue-900/50 text-slate-300 px-2 py-0.5 rounded">Belford Roxo</span>
              <span className="bg-[#102038] border border-blue-900/50 text-slate-300 px-2 py-0.5 rounded">Queimados</span>
              <span className="bg-[#102038] border border-blue-900/50 text-slate-300 px-2 py-0.5 rounded">Caxias</span>
              <span className="bg-[#102038] border border-blue-900/50 text-slate-300 px-2 py-0.5 rounded">São João de Meriti</span>
            </div>

            {/* Checklist trigger button */}
            <div className="pt-2">
              <button
                onClick={onOpenConfirmationModal}
                className="text-xs text-sky-400 hover:text-sky-300 flex items-center gap-1.5 underline underline-offset-2 transition-colors cursor-pointer"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Informações técnicas a confirmar pela empresa</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-yellow-400" />
            <span>
              © {new Date().getFullYear()} NOVAGÁS. Especialistas em conversão e manutenção de GNV.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span>Rodovia Presidente Dutra, 12.500 (Posto Austral)</span>
            <span>·</span>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              WhatsApp: (21) 99379-1003
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
