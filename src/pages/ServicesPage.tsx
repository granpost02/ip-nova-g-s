import React, { useState } from 'react';
import {
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Wrench,
  Flame,
  Filter,
} from 'lucide-react';
import { SERVICES_LIST, getWhatsAppUrl, ServiceItem } from '../data/companyData';

interface ServicesPageProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuoteModal }) => {
  const [filter, setFilter] = useState<'all' | 'conversao' | 'manutencao' | 'reteste'>('all');

  const filteredServices = SERVICES_LIST.filter((srv) => {
    if (filter === 'all') return true;
    if (filter === 'conversao') return srv.id.includes('conversao') || srv.id.includes('instalacao');
    if (filter === 'manutencao') return srv.id.includes('manutencao') || srv.id.includes('regulagem') || srv.id.includes('revisao') || srv.id.includes('pecas');
    if (filter === 'reteste') return srv.id.includes('reteste') || srv.id.includes('vistoria');
    return true;
  });

  return (
    <div className="space-y-16 sm:space-y-24 py-6 sm:py-10">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 rounded-lg text-xs font-bold uppercase tracking-wider mb-4">
            <Wrench className="w-4 h-4" />
            <span>Nossos Serviços Especializados</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight leading-tight">
            Serviços automotivos em GNV com <span className="text-yellow-400">rigor técnico e segurança</span>.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Soluções completas para veículos particulares, motoristas de aplicativo, táxis e frotistas comerciais na Rodovia Presidente Dutra, Nova Iguaçu – RJ.
          </p>

          {/* Filter tabs */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Todos os Serviços' },
              { id: 'conversao', label: 'Conversão & Instalação' },
              { id: 'manutencao', label: 'Manutenção & Regulagem' },
              { id: 'reteste', label: 'Reteste & Vistoria' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  filter === tab.id
                    ? 'bg-yellow-400 text-slate-950 shadow-md font-bold'
                    : 'bg-[#102038] text-slate-300 hover:text-white border border-blue-900/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#102038] border border-blue-900/50 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-blue-700/60 transition-all shadow-xl group"
            >
              {/* Image & Badges */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-[#081224]">
                <img
                  src={service.imagePath}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081224] via-[#081224]/30 to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  {service.highlightTag ? (
                    <span className="bg-yellow-400 text-slate-950 text-xs font-black uppercase px-3 py-1 rounded-md shadow-md">
                      {service.highlightTag}
                    </span>
                  ) : <span />}

                  {service.requiresConfirmation && (
                    <span className="bg-[#102038]/90 text-yellow-300 border border-yellow-400/30 text-[10px] font-semibold px-2.5 py-1 rounded-md flex items-center gap-1 backdrop-blur-sm">
                      <AlertCircle className="w-3 h-3 text-yellow-400" />
                      <span>Confirmação Prévia</span>
                    </span>
                  )}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                    {service.name}
                  </h2>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Confirmation note if needed */}
                  {service.confirmationNote && (
                    <div className="bg-[#081224]/80 border border-yellow-400/20 rounded-xl p-3 text-xs text-yellow-200/90 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                      <span>{service.confirmationNote}</span>
                    </div>
                  )}

                  {/* Key Benefits */}
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                      Vantagens & Benefícios:
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.defaultPriceNote && (
                    <div className="text-xs text-slate-400 italic">
                      * {service.defaultPriceNote}
                    </div>
                  )}
                </div>

                {/* WhatsApp Action Button */}
                <div className="pt-2 border-t border-blue-900/50 flex flex-col sm:flex-row gap-3">
                  <a
                    href={getWhatsAppUrl(service.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-yellow-400/20 flex items-center justify-center gap-2 active:scale-98"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950" />
                    <span>SOLICITAR ORÇAMENTO PELO WHATSAPP</span>
                  </a>

                  <button
                    onClick={() => onOpenQuoteModal(service.name)}
                    className="py-3 px-4 bg-blue-900/50 hover:bg-blue-800/50 text-slate-200 font-semibold rounded-xl text-xs transition-colors"
                  >
                    Personalizar Veículo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance Note */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#102038]/80 border border-blue-900/50 rounded-2xl p-6 text-xs text-slate-400 space-y-2">
          <div className="flex items-center gap-2 text-slate-200 font-semibold text-sm">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span>Nota de Transparência e Normas Técnicas</span>
          </div>
          <p>
            A NOVAGÁS opera em estrita conformidade com as boas práticas do setor automotivo e regulamentações técnicas aplicáveis. Todos os procedimentos de inspeção de segurança veicular (CSV) são encaminhados a Organismos de Inspeção Acreditados (OIA) pelo Inmetro. Antes da realização dos serviços, consulte nossa equipe sobre a compatibilidade do seu veículo e a capacidade ideal do cilindro.
          </p>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-r from-[#081224] via-[#102038] to-[#081224] border border-yellow-400/40 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center">
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 rounded-full text-xs font-bold uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5" />
              Atendimento Especializado
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
              ESTÁ PENSANDO EM CONVERTER SEU VEÍCULO PARA GNV? FALE CONOSCO!
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Tire suas dúvidas técnicas, escolha o cilindro ideal e receba um orçamento sem compromisso para o seu veículo.
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
