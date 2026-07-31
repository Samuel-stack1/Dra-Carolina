import React, { useState } from 'react';
import { X, MessageCircle, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  const [modalType, setModalType] = useState('Presencial');
  const [reason, setReason] = useState('Avaliação Endocrinológica Geral');
  const [preferredPeriod, setPreferredPeriod] = useState('Manhã');
  const [patientName, setPatientName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameText = patientName ? `Meu nome é ${patientName}. ` : '';
    const message = `Olá, equipe da Dra. Carolina Pitelli! ${nameText}Gostaria de solicitar um agendamento de consulta:\n\n` +
      `• Modalidade: ${modalType}\n` +
      `• Motivo Principal: ${reason}\n` +
      `• Período Preferencial: ${preferredPeriod}\n\n` +
      `Como funcionam os próximos horários disponíveis?`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/5517991850164?text=${encoded}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="glass-card bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-[#5C3327]/20">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-[#1D1F1E]/60 hover:text-[#5C3327] hover:bg-[#5C3327]/10 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Official Logo */}
        <div className="text-left mb-6">
          <img
            src="/assets/logo_carolina_pitelli_horizontal.png"
            alt="Dra. Carolina Pitelli Logo Oficial"
            className="h-8 w-auto object-contain mb-3"
          />

          <div className="inline-flex items-center gap-2 bg-[#5C3327]/10 text-[#5C3327] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#B85D36]" />
            <span>Atendimento Personalizado</span>
          </div>
          <h3 className="font-serif-brand text-2xl sm:text-3xl font-semibold text-[#5C3327]">
            Agendar Consulta
          </h3>
          <p className="text-xs text-[#1D1F1E]/70 font-light mt-1">
            Preencha os dados abaixo para direcionar seu agendamento direto ao WhatsApp oficial.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Patient Name */}
          <div>
            <label className="block text-xs font-semibold text-[#5C3327] mb-1.5 uppercase tracking-wider">
              Seu Nome Completo
            </label>
            <input
              type="text"
              placeholder="Ex: Maria Silva"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#5C3327]/20 text-sm focus:outline-none focus:border-[#B85D36] focus:ring-1 focus:ring-[#B85D36] bg-[#FAF5F2]"
            />
          </div>

          {/* Consultation Type */}
          <div>
            <label className="block text-xs font-semibold text-[#5C3327] mb-1.5 uppercase tracking-wider">
              Modalidade Desejada
            </label>
            <div className="grid grid-cols-2 gap-3">
              {['Presencial (Clínica Honos)', 'Telemedicina (Online)'].map((type) => {
                const isSelected = modalType === type;
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setModalType(type)}
                    className={`py-3 px-3 rounded-xl text-xs font-medium border transition-all text-center ${
                      isSelected
                        ? 'bg-[#5C3327] text-white border-[#5C3327]'
                        : 'bg-[#FAF5F2] text-[#1D1F1E] border-[#5C3327]/15 hover:border-[#5C3327]/40'
                    }`}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Reason */}
          <div>
            <label className="block text-xs font-semibold text-[#5C3327] mb-1.5 uppercase tracking-wider">
              Motivo da Avaliação
            </label>
            <select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#5C3327]/20 text-sm focus:outline-none focus:border-[#B85D36] bg-[#FAF5F2] text-[#1D1F1E]"
            >
              <option value="Avaliação Endocrinológica Geral">Avaliação Endocrinológica Geral</option>
              <option value="Investigação de Cansaço Crônico">Investigação de Cansaço Crônico</option>
              <option value="Emagrecimento & Metabologia">Emagrecimento & Metabologia</option>
              <option value="Distúrbios da Tireoide">Distúrbios da Tireoide / Hashimoto</option>
              <option value="Saúde Hormonal Feminina (SOP/Menopausa)">Saúde Hormonal Feminina (SOP/Menopausa)</option>
              <option value="Diabetes ou Pré-Diabetes">Diabetes ou Pré-Diabetes</option>
            </select>
          </div>

          {/* Preferred Period */}
          <div>
            <label className="block text-xs font-semibold text-[#5C3327] mb-1.5 uppercase tracking-wider">
              Período Preferencial para Atendimento
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['Manhã', 'Tarde', 'Qualquer Horário'].map((period) => (
                <button
                  key={period}
                  type="button"
                  onClick={() => setPreferredPeriod(period)}
                  className={`py-2.5 rounded-xl text-xs font-medium border transition-all ${
                    preferredPeriod === period
                      ? 'bg-[#B85D36] text-white border-[#B85D36]'
                      : 'bg-[#FAF5F2] text-[#1D1F1E] border-[#5C3327]/15'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-[#5C3327] hover:bg-[#68392C] text-white font-medium text-sm transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-[#B85D36]" />
              <span>Enviar Solicitação no WhatsApp</span>
            </button>
          </div>

          <div className="text-[11px] text-center text-[#4E594F] pt-1">
            Atendimento presencial na <strong>Clínica Honos</strong> • CRM/SP 211.934 | RQE 147.555
          </div>

        </form>

      </div>
    </div>
  );
}
