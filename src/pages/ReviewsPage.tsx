import React from 'react';
import {
  Star,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Car,
  MessageCircle,
  Flame,
} from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/companyData';

interface ReviewsPageProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="space-y-16 sm:space-y-24 py-6 sm:py-10">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 rounded-lg text-xs font-bold uppercase tracking-wider mb-4">
            <Star className="w-4 h-4 fill-yellow-400" />
            <span>Transparência e Satisfação</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight leading-tight">
            Avaliações e Opinião de Quem <span className="text-yellow-400">Roda Conosco</span>.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Priorizamos a honestidade e a transparência. Aqui você confere o direcionamento direto para o Perfil da Empresa no Google e o espaço preparado para sincronização de avaliações verificadas.
          </p>
        </div>
      </section>

      {/* Google Business Direct Showcase Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#102038] border border-blue-900/50 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-6">
            {/* Google Badge Representation */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#081224] border border-blue-900/50 rounded-full text-xs font-semibold text-slate-200">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span>Perfil da Empresa no Google Maps</span>
            </div>

            <div className="flex justify-center items-center gap-1.5 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
              Veja o que nossos clientes dizem no Google
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              Consulte diretamente no Google as experiências de motoristas de Nova Iguaçu e condutores que passam pela Rodovia Presidente Dutra (Posto Austral), atendidos pela NOVAGÁS.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={COMPANY_INFO.maps.googleReviewsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black rounded-xl text-sm transition-all shadow-lg shadow-yellow-400/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>VER TODAS AS AVALIAÇÕES NO GOOGLE</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={COMPANY_INFO.maps.googleReviewsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 bg-[#081224] hover:bg-slate-800 text-slate-200 border border-blue-900/50 font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-sky-400" />
                <span>AVALIAR A NOVAGÁS NO GOOGLE</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas Preparadas para Integração e Perfis de Clientes Atendidos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider block mb-2">
            Público Atendido
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
            Quem confia nos serviços da NOVAGÁS
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Entendemos as necessidades específicas de cada perfil de motorista.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Perfil 1 */}
          <div className="bg-[#102038] border border-blue-900/50 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400">
              <Car className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-white font-display">
              Motoristas de Aplicativo (Uber / 99)
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Precisam do menor custo por quilômetro rodado e o menor tempo de oficina para não perder corridas e diárias.
            </p>
          </div>

          {/* Perfil 2 */}
          <div className="bg-[#102038] border border-blue-900/50 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
              <Car className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-white font-display">
              Taxistas de Nova Iguaçu e Região
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Rodam intensamente pelo trânsito urbano e exigem regulagem que suporte ar-condicionado direto sem oscilar marcha lenta.
            </p>
          </div>

          {/* Perfil 3 */}
          <div className="bg-[#102038] border border-blue-900/50 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Car className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-white font-display">
              Veículos Particulares & Famílias
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Valorizam porta-malas bem aproveitado, sem cheiro de gás na cabine e total tranquilidade nos deslocamentos diários.
            </p>
          </div>

          {/* Perfil 4 */}
          <div className="bg-[#102038] border border-blue-900/50 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Car className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-white font-display">
              Frotas Comerciais e Utilitários
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Fiorinos, vans e furgões de entrega rápida que se beneficiam de cilindros sob o assoalho e manutenção preventiva programada.
            </p>
          </div>
        </div>
      </section>

      {/* Espaço de Integração Oficial do Google */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#081224] border border-blue-900/50 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-yellow-400 shrink-0" />
            <h3 className="text-base font-bold text-white font-display">
              Compromisso Anti-Falsificação de Depoimentos
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Em conformidade com a ética comercial e a dedicação técnica no setor automotivo, a NOVAGÁS não utiliza depoimentos fictícios. Convidamos todos os clientes reais a publicarem sua experiência diretamente no Google Maps, mantendo a autenticidade e a reputação sólida da empresa.
          </p>
          <div className="pt-2">
            <a
              href={COMPANY_INFO.maps.googleReviewsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-yellow-400 hover:text-yellow-300 font-semibold inline-flex items-center gap-1.5"
            >
              <span>Acessar avaliações no Google Meu Negócio</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-r from-[#081224] via-[#102038] to-[#081224] border border-yellow-400/40 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center">
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 rounded-full text-xs font-bold uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5" />
              Sua Vez de Economizar
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
              SEU CARRO MERECE UMA INSTALAÇÃO DE QUALIDADE!
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Junte-se a dezenas de motoristas que economizam centenas de reais todo mês com o GNV da NOVAGÁS.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => onOpenQuoteModal()}
                className="w-full sm:w-auto px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black rounded-xl text-sm sm:text-base transition-all shadow-xl shadow-yellow-400/25 active:scale-95 cursor-pointer"
              >
                SOLICITAR ORÇAMENTO
              </button>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm sm:text-base transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>FALAR NO WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
