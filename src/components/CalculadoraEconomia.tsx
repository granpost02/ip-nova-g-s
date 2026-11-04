import React, { useState, useId } from 'react';
import {
  Calculator,
  TrendingDown,
  ArrowRight,
  Sparkles,
  Fuel,
  Gauge,
  Calendar,
  CheckCircle2,
  Percent,
  Coins,
  ShieldCheck,
} from 'lucide-react';
import { getWhatsAppUrl } from '../data/companyData';

interface CalculadoraEconomiaProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const CalculadoraEconomia: React.FC<CalculadoraEconomiaProps> = ({
  onOpenQuoteModal,
}) => {
  const kmMonthSliderId = useId();
  const consumptionInputId = useId();
  const fuelTypeSelectId = useId();

  // Inputs solicitados: Média de km rodados por mês e consumo do veículo
  const [kmPerMonth, setKmPerMonth] = useState<number>(3000);
  const [vehicleConsumption, setVehicleConsumption] = useState<number>(10.0); // km/L
  const [fuelType, setFuelType] = useState<'gasolina' | 'etanol'>('gasolina');

  // Preços atuais de referência no RJ / Baixada Fluminense
  const [liquidPrice, setLiquidPrice] = useState<number>(5.89); // Gasolina padrão
  const [gnvPrice, setGnvPrice] = useState<number>(4.39); // GNV por m³
  const [showAdvancedPrices, setShowAdvancedPrices] = useState<boolean>(false);

  // Alterar preço líquido ao alternar combustível
  const handleFuelTypeChange = (type: 'gasolina' | 'etanol') => {
    setFuelType(type);
    if (type === 'gasolina') {
      setLiquidPrice(5.89);
      if (vehicleConsumption === 7.0) setVehicleConsumption(10.0);
    } else {
      setLiquidPrice(4.19);
      if (vehicleConsumption === 10.0) setVehicleConsumption(7.0);
    }
  };

  // Rendimento do GNV: 1 m³ de GNV rende em média 20% a 25% mais quilômetros que 1 litro de gasolina
  // E cerca de 70% mais que 1 litro de etanol
  const gnvConsumption =
    fuelType === 'gasolina'
      ? vehicleConsumption * 1.25 // ex: 10 km/L -> 12.5 km/m³
      : vehicleConsumption * 1.70; // em relação ao etanol

  // Cálculos Mensais
  const validKm = Math.max(100, kmPerMonth);
  const validConsumption = Math.max(1, vehicleConsumption);
  const validGnvConsumption = Math.max(1, gnvConsumption);

  const litersPerMonth = validKm / validConsumption;
  const m3GnvPerMonth = validKm / validGnvConsumption;

  const currentMonthlyCost = litersPerMonth * liquidPrice;
  const gnvMonthlyCost = m3GnvPerMonth * gnvPrice;

  const monthlySavings = Math.max(0, currentMonthlyCost - gnvMonthlyCost);
  const annualSavings = monthlySavings * 12;
  const savingsPercent =
    currentMonthlyCost > 0
      ? Math.round((monthlySavings / currentMonthlyCost) * 100)
      : 0;

  // Estimativa de Payback (considerando kit G5 médio de ~R$ 4.500)
  const estimatedKitCost = 4500;
  const paybackMonths =
    monthlySavings > 0 ? (estimatedKitCost / monthlySavings).toFixed(1) : '0';

  // Desconto IPVA médio no RJ (ex: carro de 50 mil: IPVA 4% = 2.000 vs 1.5% GNV = 750 -> economia de R$ 1.250/ano)
  const estimatedIpvaSavingsYear = 1250;
  const totalAnnualSavingsWithIpva = annualSavings + estimatedIpvaSavingsYear;

  const handleSendToWhatsApp = () => {
    const fuelLabel = fuelType === 'gasolina' ? 'Gasolina' : 'Etanol';
    const summary = `R$ ${Math.round(monthlySavings).toLocaleString('pt-BR')}/mês (Rodando ${kmPerMonth.toLocaleString('pt-BR')} km/mês com consumo de ${vehicleConsumption} km/L na ${fuelLabel})`;
    
    const details = `Simulação no site NOVAGÁS:\n• Quilometragem: ${kmPerMonth.toLocaleString('pt-BR')} km/mês\n• Consumo: ${vehicleConsumption} km/L (${fuelLabel})\n• Economia calculada: R$ ${Math.round(monthlySavings).toLocaleString('pt-BR')}/mês (R$ ${Math.round(annualSavings).toLocaleString('pt-BR')}/ano)`;

    const url = getWhatsAppUrl('Conversão para GNV', details, summary);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl">
      {/* Luzes de fundo atmosféricas */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Cabeçalho da Calculadora */}
      <div className="relative z-10 max-w-3xl mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-400/10 border border-amber-400/20 text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
          <Calculator className="w-4 h-4" />
          <span>Calculadora de Economia GNV</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-display tracking-tight">
          Calcule sua economia mensal ao <span className="text-amber-400">converter para GNV</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-300 mt-2.5 leading-relaxed">
          Informe seus dados de rodagem e veja na ponta do lápis o quanto você economiza no combustível e no IPVA no Estado do Rio de Janeiro.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Painel Esquerdo: Entradas do Usuário */}
        <div className="lg:col-span-7 space-y-6">
          {/* 1. Média de km rodados por mês (com botões de perfil rápido e slider) */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <label htmlFor={kmMonthSliderId} className="text-sm font-bold text-white flex items-center gap-2">
                <Gauge className="w-4 h-4 text-amber-400" />
                <span>Média de KM rodados por mês:</span>
              </label>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-amber-400 font-display tabular-nums">
                  {kmPerMonth.toLocaleString('pt-BR')}
                </span>
                <span className="text-xs text-slate-400 font-semibold uppercase">km/mês</span>
              </div>
            </div>

            {/* Slider de KM por mês */}
            <input
              id={kmMonthSliderId}
              type="range"
              min="500"
              max="10000"
              step="100"
              value={kmPerMonth}
              onChange={(e) => setKmPerMonth(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400 focus:outline-none"
            />

            {/* Marcadores de referência */}
            <div className="flex justify-between text-[11px] text-slate-400 font-medium">
              <span>500 km</span>
              <span>3.000 km (Uso diário)</span>
              <span>6.000 km (App/Táxi)</span>
              <span>10.000 km</span>
            </div>

            {/* Atalhos rápidos por perfil */}
            <div className="pt-2 border-t border-slate-800/60">
              <span className="block text-[11px] uppercase font-semibold text-slate-400 mb-2">
                Ou selecione uma média frequente:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { label: 'Passeio', km: 1200, desc: '40 km/dia' },
                  { label: 'Uso Misto', km: 2500, desc: '80 km/dia' },
                  { label: 'App (Uber/99)', km: 4500, desc: '150 km/dia' },
                  { label: 'Táxi / Frota', km: 6500, desc: '220 km/dia' },
                ].map((preset) => (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => setKmPerMonth(preset.km)}
                    className={`py-2 px-2.5 rounded-xl text-left border transition-all ${
                      kmPerMonth === preset.km
                        ? 'bg-amber-400 text-slate-950 border-amber-400 font-bold shadow-md shadow-amber-400/20'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    <span className="block text-xs font-bold leading-tight">{preset.label}</span>
                    <span className={`text-[10px] block mt-0.5 ${kmPerMonth === preset.km ? 'text-slate-900 font-medium' : 'text-slate-400'}`}>
                      {preset.km.toLocaleString('pt-BR')} km/mês
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Consumo do Veículo e Combustível Atual */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Tipo de Combustível Líquido Atual */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 space-y-2.5">
              <label htmlFor={fuelTypeSelectId} className="text-xs font-bold text-slate-300 uppercase tracking-wide flex items-center gap-1.5">
                <Fuel className="w-4 h-4 text-sky-400" />
                <span>Combustível Atual</span>
              </label>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => handleFuelTypeChange('gasolina')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition-colors ${
                    fuelType === 'gasolina'
                      ? 'bg-sky-500 text-white border-sky-400 shadow-sm'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  Gasolina
                </button>
                <button
                  type="button"
                  onClick={() => handleFuelTypeChange('etanol')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition-colors ${
                    fuelType === 'etanol'
                      ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  Etanol
                </button>
              </div>
              <span className="text-[11px] text-slate-400 block pt-1">
                Preço ref: R$ {liquidPrice.toFixed(2)} / litro
              </span>
            </div>

            {/* Consumo do Veículo Atual (km/litro) */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 space-y-2">
              <label htmlFor={consumptionInputId} className="text-xs font-bold text-slate-300 uppercase tracking-wide flex items-center gap-1.5">
                <Gauge className="w-4 h-4 text-amber-400" />
                <span>Consumo do Veículo</span>
              </label>
              <div className="relative pt-1">
                <input
                  id={consumptionInputId}
                  type="number"
                  step="0.5"
                  min="3"
                  max="30"
                  value={vehicleConsumption}
                  onChange={(e) => setVehicleConsumption(Number(e.target.value) || 1)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white font-bold text-lg tabular-nums focus:outline-none focus:border-amber-400 transition-colors"
                />
                <span className="absolute right-3.5 top-3.5 text-xs text-slate-400 font-semibold pointer-events-none">
                  km / Litro
                </span>
              </div>
              <span className="text-[11px] text-slate-400 block">
                Média urbana/estrada do seu veículo.
              </span>
            </div>
          </div>

          {/* Toggle de Preços Customizados (Opcional) */}
          <div className="pt-1">
            <button
              type="button"
              onClick={() => setShowAdvancedPrices(!showAdvancedPrices)}
              className="text-xs text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <Coins className="w-3.5 h-3.5" />
              <span>{showAdvancedPrices ? 'Ocultar ajuste de tarifas' : 'Ajustar preços por litro/m³ (opcional)'}</span>
            </button>

            {showAdvancedPrices && (
              <div className="grid grid-cols-2 gap-3 mt-3 p-4 bg-slate-950/90 border border-slate-800 rounded-xl animate-in fade-in duration-200 text-xs">
                <div>
                  <label className="block text-slate-400 mb-1">
                    Preço {fuelType === 'gasolina' ? 'Gasolina' : 'Etanol'} (R$/L):
                  </label>
                  <input
                    type="number"
                    step="0.05"
                    value={liquidPrice}
                    onChange={(e) => setLiquidPrice(Number(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white font-bold tabular-nums focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Preço GNV (R$/m³):</label>
                  <input
                    type="number"
                    step="0.05"
                    value={gnvPrice}
                    onChange={(e) => setGnvPrice(Number(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white font-bold tabular-nums focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Painel Direito: Cartão de Resultados e Conversão */}
        <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-amber-400/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
          {/* Header do Resultado */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <span className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">
              Sua Economia Estimada
            </span>
            <span className="text-xs font-black text-slate-950 bg-amber-400 px-3 py-1 rounded-full shadow-sm">
              ~{savingsPercent}% de Redução
            </span>
          </div>

          {/* Destaque Principal da Economia Mensal */}
          <div className="py-6">
            <span className="text-xs font-semibold text-slate-300 block mb-1">
              Você economiza no combustível:
            </span>
            <div className="text-4xl sm:text-5xl font-black text-amber-400 font-display tabular-nums tracking-tight">
              R$ {Math.round(monthlySavings).toLocaleString('pt-BR')}
              <span className="text-base font-semibold text-slate-400 ml-1.5">/mês</span>
            </div>

            <div className="mt-3 flex items-center gap-2 text-sm font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-2 rounded-xl">
              <TrendingDown className="w-4 h-4 shrink-0" />
              <span>
                Economia de <strong>R$ {Math.round(annualSavings).toLocaleString('pt-BR')}</strong> por ano só no combustível!
              </span>
            </div>
          </div>

          {/* Comparativo de Gastos */}
          <div className="space-y-3 pb-5 border-b border-slate-800 text-xs">
            <div className="flex justify-between items-center text-slate-300">
              <span>Gasto mensal no combustível atual:</span>
              <span className="font-bold text-rose-400 tabular-nums text-sm">
                R$ {Math.round(currentMonthlyCost).toLocaleString('pt-BR')}
              </span>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span>Gasto mensal estimado com GNV:</span>
              <span className="font-bold text-emerald-400 tabular-nums text-sm">
                R$ {Math.round(gnvMonthlyCost).toLocaleString('pt-BR')}
              </span>
            </div>
            <div className="flex justify-between items-center text-slate-400 pt-2 border-t border-slate-800/80">
              <span>Retorno do investimento (Payback):</span>
              <span className="font-semibold text-sky-400 tabular-nums">
                ~ {paybackMonths} meses
              </span>
            </div>
          </div>

          {/* Bônus IPVA RJ */}
          <div className="my-5 p-3.5 bg-sky-500/10 border border-sky-500/20 rounded-xl space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-sky-300">
              <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Bônus Especial no Estado do Rio de Janeiro</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-snug">
              Veículos convertidos para GNV pagam apenas <strong>1,5% de IPVA</strong> (contra 4% da gasolina), gerando uma economia adicional média de ~R$ 1.250/ano.
            </p>
            <div className="text-xs font-bold text-amber-300 pt-1">
              Economia total projetada (Combustível + IPVA):{' '}
              <span className="tabular-nums font-black text-amber-400">
                R$ {Math.round(totalAnnualSavingsWithIpva).toLocaleString('pt-BR')} / ano
              </span>
            </div>
          </div>

          {/* Ações Comerciais com WhatsApp */}
          <div className="space-y-3 pt-2">
            <button
              onClick={handleSendToWhatsApp}
              className="w-full py-4 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-xl text-sm transition-all shadow-xl shadow-amber-400/25 active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 fill-slate-950" />
              <span>ENVIAR SIMULAÇÃO PELO WHATSAPP</span>
            </button>

            <button
              onClick={() => onOpenQuoteModal('Conversão para GNV')}
              className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Personalizar com o Modelo do Meu Carro</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
