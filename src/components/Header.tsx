import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Flame } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/companyData';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenQuoteModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'inicio', label: 'Início' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'sobre', label: 'Sobre a Empresa' },
    { id: 'avaliacoes', label: 'Avaliações' },
    { id: 'contato', label: 'Contato & Localização' },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 transition-all">
      {/* Top micro info strip for local trust */}
      <div className="hidden lg:block bg-slate-900 border-b border-slate-800/60 text-xs text-slate-400 py-1.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-amber-400 font-semibold tracking-wide">NOVA IGUAÇU – RJ</span>
            <span className="text-slate-600">·</span>
            <span>Rodovia Presidente Dutra, 12.500 (Dentro do Posto Austral)</span>
            <span className="text-slate-600">·</span>
            <span className="text-amber-300 font-black bg-amber-400/15 border border-amber-400/30 px-2 py-0.5 rounded text-[10px] tracking-wider uppercase">
              ★ Selo 30 Anos de Experiência
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>Atendimento: Seg à Sex 08h–18h | Sáb 08h–13h</span>
            <span className="text-slate-600">·</span>
            <a
              href={COMPANY_INFO.phone.link}
              className="text-amber-400 hover:text-amber-300 font-medium transition-colors"
            >
              Central: {COMPANY_INFO.phone.formatted}
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar adhering to 3-Zone Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark (NOVAGÁS) */}
        <button
          onClick={() => handleNavClick('inicio')}
          className="flex items-center gap-3 text-left group whitespace-nowrap shrink-0 focus:outline-none"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-slate-950 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <Flame className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tight text-white font-display uppercase leading-none">
                NOVA<span className="text-amber-400">GÁS</span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-[9px] px-2 py-0.5 rounded-md uppercase tracking-wider shadow-sm">
                30 ANOS
              </span>
            </div>
            <span className="text-[10px] tracking-wider text-slate-400 font-semibold uppercase mt-1">
              CONVERSÃO DE VEÍCULOS GNV
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors whitespace-nowrap py-1 relative ${
                  isActive
                    ? 'text-amber-400 font-bold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions (matching screenshot with Solicitar Orçamento + WhatsApp) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenQuoteModal()}
            className="inline-flex items-center justify-center px-4 py-2.5 text-xs sm:text-sm font-black text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md shadow-amber-400/20 active:scale-95 transition-all whitespace-nowrap shrink-0 cursor-pointer uppercase"
          >
            <span>SOLICITAR ORÇAMENTO</span>
          </button>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-md shadow-emerald-600/20 active:scale-95 transition-all whitespace-nowrap shrink-0 cursor-pointer uppercase"
            title="Falar no WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WHATSAPP</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg focus:outline-none transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-lg text-left transition-colors ${
                    isActive
                      ? 'bg-amber-400/10 text-amber-400 border border-amber-400/20'
                      : 'text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
                </button>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={COMPANY_INFO.phone.link}
              className="flex items-center justify-center gap-2 py-3 px-4 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg text-sm font-semibold text-slate-200 transition-colors"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>Ligar: {COMPANY_INFO.phone.formatted}</span>
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-sm font-bold text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Conversar pelo WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
