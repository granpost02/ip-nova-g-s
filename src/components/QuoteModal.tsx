import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Phone, CheckCircle2, Flame } from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST, getWhatsAppUrl } from '../data/companyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [profile, setProfile] = useState<'app' | 'particular' | 'taxi' | 'frota'>('app');
  const [vehicleBrand, setVehicleBrand] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    } else if (!selectedService) {
      setSelectedService(SERVICES_LIST[0].name);
    }
  }, [initialService, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const profileLabels = {
      app: 'Motorista de Aplicativo (Uber / 99)',
      particular: 'Uso Particular / Passeio',
      taxi: 'Taxista',
      frota: 'Empresa / Frotista / Utilitário',
    };

    const vehicleStr = `${vehicleBrand ? vehicleBrand + ' ' : ''}${vehicleModel || 'Não especificado'}${vehicleYear ? ' (' + vehicleYear + ')' : ''} — Perfil: ${profileLabels[profile]}`;
    
    let extra = '';
    if (notes.trim()) {
      extra = `\n💬 *Observação:* ${notes.trim()}`;
    }

    const whatsappLink = getWhatsAppUrl(
      selectedService || 'Conversão para GNV',
      vehicleStr + extra
    );

    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-100 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-amber-400 flex items-center justify-center text-slate-950 shadow-md shadow-amber-400/20">
            <Flame className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white font-display">
              Solicitar Orçamento
            </h3>
            <p className="text-xs text-slate-400">
              Resposta ágil direto com a equipe técnica da NOVAGÁS (30 anos de experiência)
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Perfil de Uso */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">
              Qual é o uso principal do veículo?
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { id: 'app', label: 'Motorista de App (Uber/99)' },
                { id: 'particular', label: 'Uso Particular' },
                { id: 'taxi', label: 'Táxi' },
                { id: 'frota', label: 'Empresa / Frota' },
              ].map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setProfile(item.id as any)}
                  className={`py-2 px-3 rounded-lg border text-left transition-colors font-medium ${
                    profile === item.id
                      ? 'bg-amber-400/15 border-amber-400 text-amber-300'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Serviço Desejado */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">
              Serviço Desejado
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
            >
              {SERVICES_LIST.map((srv) => (
                <option key={srv.id} value={srv.name}>
                  {srv.name}
                </option>
              ))}
            </select>
          </div>

          {/* Dados do Carro */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-1">
              <label className="block text-xs font-medium text-slate-400 mb-1">
                Marca
              </label>
              <input
                type="text"
                placeholder="Ex: Fiat, Chevrolet"
                value={vehicleBrand}
                onChange={(e) => setVehicleBrand(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-xs font-medium text-slate-400 mb-1">
                Modelo
              </label>
              <input
                type="text"
                placeholder="Ex: Onix, Argo, Spin"
                value={vehicleModel}
                onChange={(e) => setVehicleModel(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-xs font-medium text-slate-400 mb-1">
                Ano
              </label>
              <input
                type="text"
                placeholder="Ex: 2021"
                value={vehicleYear}
                onChange={(e) => setVehicleYear(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          {/* Observações */}
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">
              Dúvidas ou detalhes (opcional)
            </label>
            <textarea
              rows={2}
              placeholder="Ex: Gostaria de saber cilindro de 10m³ ou 15m³, formas de pagamento..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400 resize-none"
            />
          </div>

          {/* Trust points */}
          <div className="py-1 flex items-center gap-2 text-xs text-slate-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Atendimento sem compromisso, direto na Rodovia Presidente Dutra</span>
          </div>

          {/* Action Button */}
          <button
            type="submit"
            className="w-full py-3.5 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-bold text-sm transition-all shadow-lg shadow-amber-400/20 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <MessageCircle className="w-5 h-5 fill-slate-950" />
            <span>ENVIAR ORÇAMENTO PELO WHATSAPP</span>
          </button>
        </form>

        {/* Alternative Phone Call */}
        <div className="mt-4 pt-4 border-t border-slate-800 text-center">
          <p className="text-xs text-slate-400 mb-2">Prefere falar por telefone agora?</p>
          <a
            href={COMPANY_INFO.phone.link}
            className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Ligue: {COMPANY_INFO.phone.formatted}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
