import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { MobileQuickBar } from './components/MobileQuickBar';
import { QuoteModal } from './components/QuoteModal';
import { PendingItemsModal } from './components/PendingItemsModal';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('inicio');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [quoteService, setQuoteService] = useState<string | undefined>(undefined);
  const [isPendingItemsModalOpen, setIsPendingItemsModalOpen] = useState<boolean>(false);

  // Sync with window.location.hash for shareable links & browser history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['inicio', 'servicos', 'sobre', 'avaliacoes', 'contato'].includes(hash)) {
        setActiveTab(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Sync document title with active tab for SEO & analytics
  useEffect(() => {
    const titles: Record<string, string> = {
      inicio: 'NOVAGÁS – Conversão de Veículos para GNV em Nova Iguaçu RJ',
      servicos: 'Serviços GNV – Conversão, Reteste e Manutenção | NOVAGÁS',
      sobre: 'Sobre a NOVAGÁS – Especialistas em GNV na Rodovia Pres. Dutra RJ',
      avaliacoes: 'Avaliações no Google – Clientes e Motoristas | NOVAGÁS',
      contato: 'Contato e Localização – Posto Austral Nova Iguaçu RJ | NOVAGÁS',
    };
    if (titles[activeTab]) {
      document.title = titles[activeTab];
    }
  }, [activeTab]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.location.hash = tab;
  };

  const handleOpenQuoteModal = (serviceName?: string) => {
    setQuoteService(serviceName);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0c192e] text-slate-100 font-sans selection:bg-yellow-400 selection:text-slate-950 bg-carbon-pattern">
      {/* Top Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'inicio' && (
          <HomePage
            onOpenQuoteModal={handleOpenQuoteModal}
            setActiveTab={handleTabChange}
          />
        )}
        {activeTab === 'servicos' && (
          <ServicesPage onOpenQuoteModal={handleOpenQuoteModal} />
        )}
        {activeTab === 'sobre' && (
          <AboutPage onOpenQuoteModal={handleOpenQuoteModal} />
        )}
        {activeTab === 'avaliacoes' && (
          <ReviewsPage onOpenQuoteModal={handleOpenQuoteModal} />
        )}
        {activeTab === 'contato' && (
          <ContactPage onOpenQuoteModal={handleOpenQuoteModal} />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={handleTabChange}
        onOpenConfirmationModal={() => setIsPendingItemsModalOpen(true)}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Floating Action Elements */}
      <WhatsAppButton />
      <MobileQuickBar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Modals */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialService={quoteService}
      />

      <PendingItemsModal
        isOpen={isPendingItemsModalOpen}
        onClose={() => setIsPendingItemsModalOpen(false)}
      />
    </div>
  );
}
