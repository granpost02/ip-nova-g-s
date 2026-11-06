import React from 'react';
import {
  ShieldCheck,
  Cpu,
  Clock,
  Users,
  CheckCircle2,
  MessageCircle,
  Wrench,
  MapPin,
  Flame,
} from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/companyData';

interface AboutPageProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="space-y-16 sm:space-y-24 py-6 sm:py-10">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 rounded-lg text-xs font-bold uppercase tracking-wider mb-4">
            <Flame className="w-4 h-4" />
            <span>Nossa História e Compromisso</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight leading-tight">
            Especialistas em GNV na <span className="text-yellow-400">Rodovia Presidente Dutra</span>.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            A NOVAGÁS nasceu da prática automotiva e da dedicação em oferecer soluções eficientes de economia e mobilidade para os motoristas de Nova Iguaçu e da Baixada Fluminense.
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Mechanic Photo with Overlay Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl border border-blue-900/60 shadow-2xl bg-[#102038] group overflow-hidden">
              <img
                src={COMPANY_INFO.images.mechanicWork}
                alt="Especialista NOVAGÁS trabalhando na instalação de GNV no cofre do motor"
                className="w-full h-[440px] sm:h-[480px] object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c192e] via-[#0c192e]/20 to-transparent" />

              {/* Dark Overlay Card at bottom of photo */}
              <div className="absolute bottom-5 left-4 right-4 sm:left-5 sm:right-5 bg-[#081224]/95 backdrop-blur-md border border-blue-900/60 rounded-2xl p-4 shadow-xl">
                <span className="text-[11px] font-black text-yellow-400 uppercase tracking-wider block mb-1">
                  COMPROMISSO TÉCNICO
                </span>
                <p className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">
                  Instalações limpas, seguras e calibradas por quem entende de motor.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Story & 4 Cards */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
                Trabalho sério, atendimento ágil e respeito pelo motorista
              </h2>
              <p>
                A <strong className="text-white font-bold">NOVAGÁS</strong> nasceu com a missão de entregar um serviço de conversão e manutenção de GNV sem atalhos.
              </p>
              <p>
                Sabemos que para quem depende do carro — seja para o sustento da família no transporte por aplicativo e táxi, frotas comerciais ou uso particular — o GNV precisa aliar economia imediata à confiabilidade mecânica diária.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Instalada estrategicamente na Rodovia Presidente Dutra (dentro do Posto Austral em Nova Iguaçu), nossa oficina conta com infraestrutura equipada com elevadores hidráulicos, scanners de diagnóstico para regulagem de injeção e equipe capacitada para instalações padronizadas e retestes.
              </p>
            </div>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Card 1: Equipamentos Modernos */}
              <div className="bg-[#102038] border border-blue-900/50 rounded-xl p-4 sm:p-5 space-y-2 hover:border-yellow-400/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 shrink-0">
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
              <div className="bg-[#102038] border border-blue-900/50 rounded-xl p-4 sm:p-5 space-y-2 hover:border-yellow-400/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 shrink-0">
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
              <div className="bg-[#102038] border border-blue-900/50 rounded-xl p-4 sm:p-5 space-y-2 hover:border-yellow-400/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 shrink-0">
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
              <div className="bg-[#102038] border border-blue-900/50 rounded-xl p-4 sm:p-5 space-y-2 hover:border-yellow-400/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 shrink-0">
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
        <div className="bg-[#102038] border border-blue-900/50 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-blue-900/60">
            <img
              src={COMPANY_INFO.images.workshopFloor}
              alt="Boxes da oficina NOVAGÁS"
              className="w-full h-64 object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <span className="text-xs font-black text-yellow-400 uppercase tracking-wider block">
              Tradição e Autoridade Técnica
            </span>
            <h3 className="text-2xl font-bold text-white font-display">
              Dedicação a quem roda na estrada
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Sabemos exatamente como ajustar o ponto de ignição, a proporção da mistura estequiométrica e a fixação mecânica para que o carro tenha vida longa, economia real e nenhum susto na estrada.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black rounded-xl text-xs sm:text-sm transition-all"
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
        <div className="bg-gradient-to-r from-[#081224] via-[#102038] to-[#081224] border border-yellow-400/40 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center">
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
              FALE COM NOSSA EQUIPE E SOLICITE SEU ORÇAMENTO.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Trabalho sério e preço justo na Rodovia Presidente Dutra (Posto Austral em Nova Iguaçu). Fale conosco pelo WhatsApp!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => onOpenQuoteModal()}
                className="w-full sm:w-auto px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black rounded-xl text-sm sm:text-base transition-all shadow-xl shadow-yellow-400/25 active:scale-95 cursor-pointer uppercase"
              >
                SOLICITAR ORÇAMENTO
              </button>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm sm:text-base transition-all flex items-center justify-center gap-2 uppercase"
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
