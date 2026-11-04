import React, { useState } from 'react';
import {
  MessageCircle,
  Phone,
  Flame,
  ShieldCheck,
  Zap,
  MapPin,
  Clock,
  ArrowRight,
  ChevronDown,
  Star,
  ExternalLink,
  Award,
  Wrench,
  CheckCircle2,
  Navigation,
} from 'lucide-react';
import {
  COMPANY_INFO,
  SERVICES_LIST,
  FAQ_LIST,
  getWhatsAppUrl,
} from '../data/companyData';
import { CalculadoraEconomia } from '../components/CalculadoraEconomia';
import { Selo30Anos } from '../components/Selo30Anos';

interface HomePageProps {
  onOpenQuoteModal: (serviceName?: string) => void;
  setActiveTab: (tab: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenQuoteModal,
  setActiveTab,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-10 pb-12 sm:pb-20 overflow-hidden">
        {/* Subtle radial ambient gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-400/10 blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute top-10 right-0 w-[400px] h-[400px] bg-sky-500/10 blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Value Proposition & CTAs */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Regional & Experience trust kicker */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Rodovia Presidente Dutra, 12.500 · Posto Austral</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400/15 border border-amber-400/30 text-xs font-black text-amber-300">
                  <Award className="w-3.5 h-3.5 fill-amber-400 text-slate-950" />
                  <span>30 ANOS FAZENDO ISSO</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white font-display tracking-tight leading-[1.15]">
                Seu veículo preparado para rodar com GNV com{' '}
                <span className="text-amber-400 underline decoration-amber-400/40 decoration-wavy underline-offset-8">
                  qualidade e confiança
                </span>
                .
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Com <strong className="text-white">trinta anos de experiência</strong> no setor automotivo, a <strong className="text-amber-400">NOVAGÁS</strong> é especialista em conversão, reteste de cilindros e manutenção de GNV em Nova Iguaçu. Economia real para motoristas de app, taxistas, particulares e frotistas.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="px-7 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-xl text-sm sm:text-base transition-all shadow-xl shadow-amber-400/25 active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-slate-950" />
                  <span>SOLICITAR ORÇAMENTO</span>
                </button>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700/80 font-bold rounded-xl text-sm sm:text-base transition-all active:scale-95 flex items-center justify-center gap-2.5"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
                  <span>FALAR PELO WHATSAPP</span>
                </a>
              </div>

              {/* Micro Trust Points */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/80 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>30 Anos de Prática</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Economia de até 60%</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Reteste a partir de R$ 90</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Posto Austral (Dutra)</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset (Authentic Workshop Image) */}
            <div className="lg:col-span-5 relative">
              {/* Selo 30 Anos de Experiência flutuante */}
              <div className="absolute -top-6 -left-4 sm:-left-6 z-20 drop-shadow-2xl">
                <Selo30Anos size="md" variant="gold" />
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
                <img
                  src={COMPANY_INFO.images.mechanicWork}
                  alt="Técnico especialista da NOVAGÁS trabalhando na instalação de GNV no cofre do motor"
                  className="w-full h-[380px] sm:h-[450px] object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Floating Badge on Photo */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded-xl p-3.5 shadow-lg flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wide block">
                      Oficina Estruturada · 30 Anos de Prática
                    </span>
                    <span className="text-xs text-slate-200">
                      Rodovia Presidente Dutra, 12.500 (Posto Austral)
                    </span>
                  </div>
                  <a
                    href={COMPANY_INFO.maps.googleMapsRouteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg transition-colors"
                    title="Ver localização"
                  >
                    <Navigation className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROOF & DIFFERENTIALS SECTION (Bento Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
            <Award className="w-4 h-4" />
            <span>Por que escolher a NOVAGÁS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-display">
            Estrutura completa e compromisso com o seu veículo
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3">
            Combinamos conhecimento prático, ferramentas de diagnóstico eletrônico e localização de fácil acesso para você não perder tempo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-4 hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">
              Instalação de Alta Precisão (G3 e G5)
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Mapeamento de injeção computadorizado para garantir que o seu carro continue com aceleração linear, marcha lenta estável e o máximo rendimento térmico do GNV.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-4 hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">
              Reteste de Cilindro a partir de R$ 90
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Ensaio hidrostático e verificação de válvulas com preço justo e processo otimizado, para seu veículo rodar legalizado e passar com tranquilidade na vistoria anual.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-4 hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">
              Localização Estratégica na Dutra
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Situada dentro do tradicional Posto Austral (km 12,5 da Rodovia Pres. Dutra), com ampla área de estacionamento, segurança e facilidade de acesso em Nova Iguaçu.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CALCULADORA DE ECONOMIA GNV (KM/MÊS E CONSUMO) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CalculadoraEconomia onOpenQuoteModal={onOpenQuoteModal} />
      </section>

      {/* 4. SERVIÇOS EM DESTAQUE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
              <Wrench className="w-4 h-4" />
              <span>Soluções Completas</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-display">
              Serviços Especializados para o seu Veículo
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              Da conversão inicial à manutenção periódica e reteste de cilindro.
            </p>
          </div>

          <button
            onClick={() => {
              setActiveTab('servicos');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 group transition-colors"
          >
            <span>Ver todos os 8 serviços</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Highlight 4 services on homepage */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.slice(0, 4).map((service) => (
            <div
              key={service.id}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all group"
            >
              <div className="relative h-44 overflow-hidden bg-slate-950">
                <img
                  src={service.imagePath}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                {service.highlightTag && (
                  <span className="absolute top-3 left-3 bg-amber-400 text-slate-950 text-[10px] font-black uppercase px-2.5 py-1 rounded-md shadow-md">
                    {service.highlightTag}
                  </span>
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-bold text-base text-white group-hover:text-amber-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={getWhatsAppUrl(service.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 bg-slate-800 hover:bg-amber-400 text-slate-200 hover:text-slate-950 font-bold text-xs rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Orçar no WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. GALERIA DE FOTOS REAIS DA OFICINA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
            Nossa Oficina na Prática
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
            Conheça o espaço onde seu carro será cuidado
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Fotografias reais da oficina NOVAGÁS, com elevadores automotivos, equipamentos de calibração e equipe técnica no Posto Austral.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 group shadow-lg">
            <img
              src={COMPANY_INFO.images.baysBanner}
              alt="Faixada e boxes de atendimento com banner Reteste a partir de R$ 90 na NOVAGÁS"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-4">
              <span className="text-xs font-bold text-white">Boxes amplos com elevadores e sinalização</span>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-slate-800 group shadow-lg">
            <img
              src={COMPANY_INFO.images.mechanicWork}
              alt="Mecânico especializado trabalhando com instalação no motor"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-4">
              <span className="text-xs font-bold text-white">Atenção e técnica em cada detalhe do motor</span>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-slate-800 group shadow-lg">
            <img
              src={COMPANY_INFO.images.workshopFloor}
              alt="Pátio interno da oficina com múltiplos veículos em atendimento"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-4">
              <span className="text-xs font-bold text-white">Atendimento a veículos particulares, pick-ups e frotas</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. AVALIAÇÕES GOOGLE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
              Avaliações reais no Google
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              Trabalhamos com transparência e respeito pelo motorista. Confira a opinião de quem já realizou conversão, reteste ou manutenção com a nossa equipe em Nova Iguaçu.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={COMPANY_INFO.maps.googleReviewsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-md shadow-amber-400/20 flex items-center gap-2"
              >
                <span>VER TODAS AS AVALIAÇÕES NO GOOGLE</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => {
                  setActiveTab('avaliacoes');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl text-sm transition-colors"
              >
                Ver Detalhes das Avaliações
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LOCALIZAÇÃO E MAPA INTERATIVO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Onde Estamos</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
              Fácil acesso na Rodovia Presidente Dutra
            </h2>

            <div className="space-y-3 text-sm text-slate-300">
              <p>
                <strong className="text-white block font-semibold">Endereço:</strong>
                {COMPANY_INFO.address.street}
                <br />
                <span className="text-amber-400 font-semibold">Referência: {COMPANY_INFO.address.reference}</span>
                <br />
                Nova Iguaçu – RJ
              </p>

              <p className="text-xs text-slate-400">
                Ponto de referência seguro e conhecido de todos os motoristas da Baixada Fluminense, com facilidade para entrada e saída de veículos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={COMPANY_INFO.maps.googleMapsRouteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Navigation className="w-4 h-4 text-sky-400" />
                <span>COMO CHEGAR (GOOGLE MAPS)</span>
              </a>

              <a
                href={COMPANY_INFO.maps.wazeRouteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Navigation className="w-4 h-4 text-sky-400" />
                <span>ABRIR NO WAZE</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl h-[340px] sm:h-[400px] bg-slate-900">
              <iframe
                title="Localização da NOVAGÁS na Rodovia Presidente Dutra 12500 Posto Austral"
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
        </div>
      </section>

      {/* 8. PERGUNTAS FREQUENTES (FAQ) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
            Perguntas Frequentes sobre GNV
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Entenda como funciona a conversão, economia e manutenção preventiva.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-slate-900/80 border border-slate-800 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-bold text-white hover:text-amber-400 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-400' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. SEÇÃO DE CONVERSÃO FINAL (EM TODAS AS PÁGINAS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-amber-400/40 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center">
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/10 border border-amber-400/20 text-amber-400 rounded-full text-xs font-bold uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5" />
              Economia Imediata no Seu Bolso
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
              SEU CARRO MERECE UMA INSTALAÇÃO DE QUALIDADE!
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Está pensando em converter seu veículo para GNV ou fazer o reteste do cilindro com segurança? Fale com a equipe da NOVAGÁS e receba um orçamento personalizado.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => onOpenQuoteModal()}
                className="w-full sm:w-auto px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-xl text-sm sm:text-base transition-all shadow-xl shadow-amber-400/25 active:scale-95 cursor-pointer"
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
