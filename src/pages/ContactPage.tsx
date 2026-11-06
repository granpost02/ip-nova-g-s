import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Navigation,
  ExternalLink,
  Flame,
  Send,
  CheckCircle2,
  Info,
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST, getWhatsAppUrl } from '../data/companyData';

interface ContactPageProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenQuoteModal }) => {
  const [name, setName] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [service, setService] = useState(SERVICES_LIST[0].name);
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const details = `${vehicle ? 'Veículo: ' + vehicle : ''}${name ? ' | Cliente: ' + name : ''}${phone ? ' | Tel: ' + phone : ''}${notes ? '\nMsg: ' + notes : ''}`;
    const link = getWhatsAppUrl(service, details);
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-16 sm:space-y-24 py-6 sm:py-10">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 rounded-lg text-xs font-bold uppercase tracking-wider mb-4">
            <MapPin className="w-4 h-4" />
            <span>Canais de Atendimento e Visita</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight leading-tight">
            Venha até a NOVAGÁS ou fale <span className="text-yellow-400">direto pelo WhatsApp</span>.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Estamos localizados no coração da Baixada Fluminense, na Rodovia Presidente Dutra (dentro do Posto Austral), facilitando o acesso para você realizar a conversão, manutenção ou reteste sem desvios complicados.
          </p>
        </div>
      </section>

      {/* Main NAP & Contact Channels Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Endereço & Localização */}
          <div className="bg-[#102038] border border-blue-900/50 rounded-2xl p-6 sm:p-7 space-y-4 hover:border-blue-700/60 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white font-display">
                Endereço da Oficina
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Nova Iguaçu – RJ
              </p>
            </div>
            <div className="text-sm text-slate-200 space-y-1 pt-1 border-t border-blue-900/50">
              <p className="font-medium text-white">{COMPANY_INFO.address.street}</p>
              <p className="text-yellow-400 font-semibold">{COMPANY_INFO.address.reference}</p>
              <p className="text-xs text-slate-400">Nova Iguaçu – RJ, CEP 26000-000</p>
            </div>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={COMPANY_INFO.maps.googleMapsRouteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 bg-blue-900/50 hover:bg-blue-800/50 text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5 text-sky-400" />
                <span>COMO CHEGAR (GOOGLE MAPS)</span>
              </a>
              <a
                href={COMPANY_INFO.maps.wazeRouteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 bg-[#081224] hover:bg-slate-800 text-slate-300 rounded-lg text-xs font-medium border border-blue-900/50 transition-colors flex items-center justify-center gap-2"
              >
                <span>Navegar via Waze</span>
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp Comercial */}
          <div className="bg-[#102038] border border-blue-900/50 rounded-2xl p-6 sm:p-7 space-y-4 hover:border-blue-700/60 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white font-display">
                WhatsApp Comercial
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Atendimento rápido para orçamentos e dúvidas
              </p>
            </div>
            <div className="text-sm text-slate-200 space-y-1 pt-1 border-t border-blue-900/50">
              <p className="text-xl font-black text-emerald-400 font-display">
                {COMPANY_INFO.whatsapp.formatted}
              </p>
              <p className="text-xs text-slate-400">
                Envie fotos do documento ou do kit para orçamento instantâneo.
              </p>
            </div>
            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition-all shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>INICIAR CONVERSA NO WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* Card 3: Ligação Telefônica Direta */}
          <div className="bg-[#102038] border border-blue-900/50 rounded-2xl p-6 sm:p-7 space-y-4 hover:border-blue-700/60 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white font-display">
                Ligação Direta
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Fale agora com a nossa recepção
              </p>
            </div>
            <div className="text-sm text-slate-200 space-y-1 pt-1 border-t border-blue-900/50">
              <p className="text-xl font-black text-sky-400 font-display">
                {COMPANY_INFO.phone.formatted}
              </p>
              <p className="text-xs text-slate-400">
                Chamada imediata para telefones celulares e fixos.
              </p>
            </div>
            <div className="pt-2">
              <a
                href={COMPANY_INFO.phone.link}
                className="w-full py-3 px-4 bg-blue-900/50 hover:bg-blue-800/50 text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2 border border-blue-800/50"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>LIGAR AGORA</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Horários e Informações Técnicas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#102038]/80 border border-blue-900/50 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-white font-display">
                Horários de Funcionamento
              </h3>
              <p className="text-xs text-slate-300">
                {COMPANY_INFO.hours.weekdays} | {COMPANY_INFO.hours.saturday} | {COMPANY_INFO.hours.sunday}
              </p>
              <p className="text-[11px] text-yellow-300/80 flex items-center gap-1 mt-1">
                <Info className="w-3 h-3 text-yellow-400" />
                <span>{COMPANY_INFO.hours.note}</span>
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenQuoteModal()}
            className="w-full md:w-auto px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold rounded-xl text-xs sm:text-sm transition-all whitespace-nowrap"
          >
            SOLICITAR ORÇAMENTO ONLINE
          </button>
        </div>
      </section>

      {/* Mapa do Google Maps e Formulário Rápido */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Mapa Interativo */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white font-display">
                Mapa Interativo — Posto Austral
              </h2>
              <a
                href={COMPANY_INFO.maps.googleMapsRouteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-yellow-400 hover:text-yellow-300 font-semibold flex items-center gap-1"
              >
                <span>Abrir mapa completo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden border border-blue-900/50 shadow-2xl h-[420px] bg-[#102038]">
              <iframe
                title="Google Maps Rodovia Presidente Dutra 12500 Nova Iguaçu Posto Austral"
                src={COMPANY_INFO.maps.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Formulário Comercial Direto para WhatsApp */}
          <div className="lg:col-span-5 bg-[#102038] border border-blue-900/50 rounded-2xl p-6 sm:p-7 shadow-xl">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-white font-display">
                Envie sua Mensagem de Orçamento
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Preencha os dados abaixo e inicie a conversa já com o texto formatado:
              </p>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Seu Nome
                </label>
                <input
                  type="text"
                  placeholder="Ex: Carlos Alberto"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#081224] border border-blue-900/50 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-yellow-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Modelo do Carro e Ano
                </label>
                <input
                  type="text"
                  placeholder="Ex: Fiat Cronos 2022"
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  className="w-full bg-[#081224] border border-blue-900/50 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-yellow-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Serviço de Interesse
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[#081224] border border-blue-900/50 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-yellow-400"
                >
                  {SERVICES_LIST.map((srv) => (
                    <option key={srv.id} value={srv.name}>
                      {srv.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Mensagem ou Dúvida
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex: Gostaria de saber prazo de instalação e valor à vista/cartão..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#081224] border border-blue-900/50 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-yellow-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-yellow-400/20 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <Send className="w-4 h-4 fill-slate-950" />
                <span>ENVIAR DIRETAMENTE PELO WHATSAPP</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-r from-[#081224] via-[#102038] to-[#081224] border border-yellow-400/40 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center">
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 rounded-full text-xs font-bold uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5" />
              Localização Privilegiada
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
              ESTÁ PENSANDO EM CONVERTER SEU VEÍCULO PARA GNV? FALE CONOSCO!
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Rodovia Presidente Dutra, 12.500 (Dentro do Posto Austral) — Nova Iguaçu – RJ.
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
