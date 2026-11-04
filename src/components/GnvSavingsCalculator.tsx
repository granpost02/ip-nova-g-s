import React, { useState, useId } from 'react';
import { Calculator, TrendingDown, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../data/companyData';

interface GnvSavingsCalculatorProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const GnvSavingsCalculator: React.FC<GnvSavingsCalculatorProps> = ({
  onOpenQuoteModal,
}) => {
  const kmSliderId = useId();
  const gasPriceId = useId();
  const gnvPriceId = useId();
  // State defaults based on Rio de Janeiro / Baixada Fluminense average rates
  const [kmPerDay, setKmPerDay] = useState<number>(120);
  const [gasPrice, setGasPrice] = useState<number>(5.89);
  const [gnvPrice, setGnvPrice] = useState<number>(4.39);
  const [gasKmPerLiter, setGasKmPerLiter] = useState<number>(10);
  const daysPerMonth = 26; // Workdays / common driver schedule

  // GNV yields approximately 25% more km per m³ than gasoline per liter
  const gnvKmPerM3 = gasKmPerLiter * 1.25;

  // Monthly consumption
  const totalKmMonth = kmPerDay * daysPerMonth;
  const gasLitersMonth = totalKmMonth / gasKmPerLiter;
  const gnvM3Month = totalKmMonth / gnvKmPerM3;

  const costGasMonth = gasLitersMonth * gasPrice;
  const costGnvMonth = gnvM3Month * gnvPrice;

  const monthlySavings = Math.max(0, costGasMonth - costGnvMonth);
  const annualSavings = monthlySavings * 12;
  const savingsPercent = costGasMonth > 0 ? Math.round((monthlySavings / costGasMonth) * 100) : 0;

  const handleSendSavingsWhatsApp = () => {
    const savingsSummary = `R$ ${Math.round(monthlySavings).toLocaleString('pt-BR')}/mês (rodando ${kmPerDay} km/dia)`;
    const url = getWhatsAppUrl(
      'Conversão para GNV',
      `Simulação de Economia feita no site`,
      savingsSummary
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 max-w-3xl mb-8">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-400 tracking-wider uppercase mb-2">
          <Calculator className="w-4 h-4" />
          <span>Simulador Interativo de Economia</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
          Descubra quanto você vai <span className="text-amber-400">economizar por mês</span> com GNV
        </h3>
        <p className="text-sm text-slate-300 mt-2 leading-relaxed">
          Especialmente vantajoso para motoristas de aplicativo (Uber/99), táxis, frotistas e quem roda todo dia na Rodovia Presidente Dutra.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Quick preset buttons */}
          <div>
            <span className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">
              Selecione seu perfil de uso:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { label: 'Particular', km: 40 },
                { label: 'App / Uber', km: 150 },
                { label: 'Taxista', km: 180 },
                { label: 'Frota / Carga', km: 240 },
              ].map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => setKmPerDay(preset.km)}
                  className={`py-2 px-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                    kmPerDay === preset.km
                      ? 'bg-amber-400 text-slate-950 border-amber-400 font-bold shadow-sm'
                      : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                  }`}
                >
                  {preset.label} ({preset.km}km)
                </button>
              ))}
            </div>
          </div>

          {/* KM slider */}
          <div className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-5">
            <div className="flex justify-between items-center mb-2">
              <label htmlFor={kmSliderId} className="text-xs sm:text-sm font-semibold text-slate-200">
                Quilômetros rodados por dia:
              </label>
              <span className="text-lg font-black text-amber-400 font-display tabular-nums">
                {kmPerDay} km/dia
              </span>
            </div>
            <input
              id={kmSliderId}
              type="range"
              min="20"
              max="350"
              step="10"
              value={kmPerDay}
              onChange={(e) => setKmPerDay(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>20 km (Curto trajeto)</span>
              <span>150 km (Média App)</span>
              <span>350 km (Intenso)</span>
            </div>
          </div>

          {/* Fuel prices & consumption inputs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3">
              <label htmlFor={gasPriceId} className="block text-slate-400 mb-1">Preço Gasolina (R$/L)</label>
              <input
                id={gasPriceId}
                type="number"
                step="0.05"
                value={gasPrice}
                onChange={(e) => setGasPrice(Number(e.target.value) || 0)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white font-semibold text-sm tabular-nums focus:outline-none focus:border-amber-400"
              />
            </div>
            <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3">
              <label htmlFor={gnvPriceId} className="block text-slate-400 mb-1">Preço GNV (R$/m³)</label>
              <input
                id={gnvPriceId}
                type="number"
                step="0.05"
                value={gnvPrice}
                onChange={(e) => setGnvPrice(Number(e.target.value) || 0)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white font-semibold text-sm tabular-nums focus:outline-none focus:border-amber-400"
              />
            </div>
            <div className="col-span-2 sm:col-span-1 bg-slate-950/70 border border-slate-800/80 rounded-xl p-3">
              <label className="block text-slate-400 mb-1">Consumo Gasolina (km/L)</label>
              <input
                type="number"
                step="0.5"
                value={gasKmPerLiter}
                onChange={(e) => setGasKmPerLiter(Number(e.target.value) || 1)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white font-semibold text-sm tabular-nums focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>
        </div>

        {/* Results Card Column */}
        <div className="lg:col-span-5 bg-gradient-to-b from-slate-950 to-slate-900 border border-amber-400/30 rounded-2xl p-6 sm:p-7 shadow-xl relative">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
            <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
              Resultado Estimado
            </span>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
              ~{savingsPercent}% de Redução
            </span>
          </div>

          {/* Primary Highlight */}
          <div className="mb-6">
            <span className="text-xs text-slate-400 block mb-1">Você economiza aproximadamente:</span>
            <div className="text-3xl sm:text-4xl font-black text-amber-400 font-display tabular-nums">
              R$ {Math.round(monthlySavings).toLocaleString('pt-BR')}
              <span className="text-sm font-semibold text-slate-400 ml-1">/mês</span>
            </div>
            <div className="text-sm font-medium text-emerald-400 mt-1 flex items-center gap-1.5">
              <TrendingDown className="w-4 h-4" />
              <span>Ou até <strong>R$ {Math.round(annualSavings).toLocaleString('pt-BR')}</strong> economizados por ano!</span>
            </div>
          </div>

          {/* Breakdown comparison */}
          <div className="space-y-2.5 text-xs pb-5 border-b border-slate-800">
            <div className="flex justify-between items-center text-slate-400">
              <span>Gasto mensal estimado na Gasolina:</span>
              <span className="font-semibold text-slate-300 tabular-nums">
                R$ {Math.round(costGasMonth).toLocaleString('pt-BR')}
              </span>
            </div>
            <div className="flex justify-between items-center text-slate-400">
              <span>Gasto mensal estimado no GNV:</span>
              <span className="font-semibold text-amber-300 tabular-nums">
                R$ {Math.round(costGnvMonth).toLocaleString('pt-BR')}
              </span>
            </div>
            <div className="flex justify-between items-center text-slate-400 pt-1 border-t border-slate-800/60">
              <span className="text-sky-400 font-medium">+ Bônus no Rio de Janeiro:</span>
              <span className="text-sky-300 font-medium">IPVA reduzido (de 4% para 1,5%)</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-5 space-y-2.5">
            <button
              onClick={handleSendSavingsWhatsApp}
              className="w-full py-3 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-amber-400/20 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <Sparkles className="w-4 h-4 fill-slate-950" />
              <span>QUERO ESSA ECONOMIA NO MEU CARRO</span>
            </button>

            <button
              onClick={() => onOpenQuoteModal('Conversão para GNV')}
              className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Detalhar meu modelo de veículo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
