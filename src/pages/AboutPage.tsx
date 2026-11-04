import React from 'react';
import {
  ShieldCheck,
  Cpu,
  Clock,
  Users,
  Award,
  CheckCircle2,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/companyData';
import { Selo30Anos } from '../components/Selo30Anos';

interface AboutPageProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="space-y-16 sm:space-y-24 py-6 sm:py-10">
      {/* Main Section matching user screenshot with 30 years experience */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Mechanic Photo with Overlay Badges and Circular Seal */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl border border-slate-800 shadow-2xl bg-slate-900 group">
              {/* Photo container with overflow-hidden for image only */}
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src={COMPANY_INFO.images.mechanicWork}
                  alt="Especialista NOVAGÁS com 30 anos de experiência em GNV"
                  className="w-full h-[450px] sm:h-[490px] object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Dark Overlay Card at bottom of photo (matching screenshot) */}
                <div className="absolute bottom-5 left-4 right-4 sm:left-5 sm:right-5 bg-slate-950/95 backdrop-blur-md border border-slate-800 rounded-2xl p-4 shadow-xl">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="text-[11px] font-black text-amber-400 uppercase tracking-wider block">
                      COMPROMISSO TÉCNICO
                    </span>
                    <span className="text-[10px] font-bold text-amber-300 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full">
                      30 Anos
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">
                    Instalações limpas, seguras e calibradas por quem entende de motor há 30 anos.
                  </p>
                </div>
              </div>

              {/* OFICIAL SELO DE 30 ANOS DE EXPERIÊNCIA (Medalha Circular Dourada em Destaque) */}
              <div className="absolute -top-5 -right-4 sm:-right-5 z-20 drop-shadow-2xl">
                <Selo30Anos size="md" variant="gold" />
              </div>

              {/* Yellow overlapping badge on bottom right (posicionado com folga para não cortar o texto) */}
              <div className="absolute -bottom-3 left-6 right-6 sm:left-auto sm:right-4 z-20 bg-amber-400 text-slate-950 rounded-xl px-4 py-2.5 shadow-2xl border-2 border-slate-950 flex items-center gap-2.5 max-w-xs">
                <ShieldCheck className="w-5 h-5 text-slate-950 shrink-0 stroke-[2.5]" />
                <span className="text-[11px] font-black leading-tight uppercase">
                  Rigor em segurança e testes de estanqueidade
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Story & 4 Cards (matching screenshot) */}
          <div className="lg:col-span-7 space-y-6">
            {/* 30 Anos pill kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/10 border border-amber-400/20 text-amber-400 rounded-lg text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 fill-amber-400" />
              <span>30 Anos Fazendo Isso com Excelência</span>
            </div>

            {/* Main Story Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                A <strong className="text-white font-bold">NOVAGÁS</strong> nasceu com a missão de entregar um serviço de conversão e manutenção de GNV sem atalhos. São <span className="text-amber-400 font-black">trinta anos fazendo isso</span> no setor automotivo, com maestria e dedicação diária.
              </p>
              <p>
                Sabemos que para quem depende do carro — seja para o sustento da família no transporte por aplicativo e táxi, frotas comerciais ou uso particular — o GNV precisa aliar economia imediata à confiabilidade mecânica diária.
              </p>
              <p className="text-slate-400 text-sm">
                Instalada estrategicamente na Rodovia Presidente Dutra (dentro do Posto Austral em Nova Iguaçu), nossa oficina conta com infraestrutura equipada com elevadores hidráulicos, scanners de diagnóstico para regulagem de injeção e equipe capacitada para instalações padronizadas e retestes.
              </p>
            </div>

            {/* 4 Cards Grid (matching screenshot) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Card 1: Equipamentos Modernos */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-2 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white font-display">
                    Equipamentos Modernos
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pl-1">
                  Diagnóstico computadorizado de mapas e regulagem fina da mistura.
                </p>
              </div>

              {/* Card 2: Segurança Inegociável */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-2 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white font-display">
                    Segurança Inegociável
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pl-1">
                  Tubulações de alta pressão, suportes reforçados e checagem de vazamentos.
                </p>
              </div>

              {/* Card 3: Agilidade no Atendimento */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-2 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white font-display">
                    Agilidade no Atendimento
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pl-1">
                  Processos organizados para você não perder tempo com o carro parado.
                </p>
              </div>

              {/* Card 4: Atendimento Personalizado */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-2 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white font-display">
                    Atendimento Personalizado
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pl-1">
                  Orientação honesta sobre o kit ideal para cada perfil de condução.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Structure & Trust strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-slate-700">
            <img
              src={COMPANY_INFO.images.workshopFloor}
              alt="Boxes da oficina NOVAGÁS"
              className="w-full h-64 object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <span className="text-xs font-black text-amber-400 uppercase tracking-wider block">
              Tradição e Autoridade Técnica
            </span>
            <h3 className="text-2xl font-bold text-white font-display">
              Trinta anos de dedicação a quem roda na estrada
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Três décadas de bagagem prática fazem toda a diferença: sabemos exatamente como ajustar o ponto de ignição, a proporção da mistura estequiométrica e a fixação mecânica para que o carro tenha vida longa, economia real e nenhum susto na estrada.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-xl text-xs sm:text-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Conversar com a Equipe pelo WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-amber-400/40 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center">
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
              FALE COM NOSSA EQUIPE E SOLICITE SEU ORÇAMENTO.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Trinta anos fazendo isso com seriedade e preço justo na Rodovia Presidente Dutra (Posto Austral). Fale conosco pelo WhatsApp!
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
