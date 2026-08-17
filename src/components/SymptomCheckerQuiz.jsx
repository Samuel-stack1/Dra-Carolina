import React, { useState, useRef } from 'react';
import { Activity, Check, MessageCircle, AlertCircle, Sparkles, RefreshCw, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function SymptomCheckerQuiz() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const quizRef = useRef(null);
  const isFirstRender = useRef(true);

  useGSAP(() => {
    gsap.fromTo('.quiz-header',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: quizRef.current, start: 'top 95%', once: true },
        clearProps: 'all',
      }
    );

    gsap.fromTo('.quiz-box-container',
      { y: 50, opacity: 0, scale: 0.98 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.quiz-box-container', start: 'top 95%', once: true },
        clearProps: 'all',
      }
    );
  }, { scope: quizRef });

  useGSAP(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (submitted) {
      gsap.from('.quiz-result-view', {
        scale: 0.95,
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: 'power3.out',
      });
    } else {
      gsap.from('.quiz-option-btn', {
        opacity: 0,
        y: 15,
        duration: 0.4,
        stagger: 0.05,
        ease: 'power2.out',
      });
    }
  }, { scope: quizRef, dependencies: [submitted] });

  const symptomsList = [
    { id: 'cansaco', label: 'Cansaço excessivo ou falta de energia ao longo do dia' },
    { id: 'peso', label: 'Dificuldade para emagrecer mesmo com dieta ou exercício' },
    { id: 'tireoide', label: 'Suspeita ou diagnóstico de alterações na tireoide' },
    { id: 'humor_sono', label: 'Sono não reparador, ansiedade ou oscilações de humor' },
    { id: 'cabelo_pele', label: 'Queda de cabelo aumentada, unhas fracas ou pele seca' },
    { id: 'doces', label: 'Vontade incontrolável por doces e picos de fome' },
    { id: 'hormonios', label: 'Irregularidade no ciclo menstrual ou fogachos (menopausa)' },
    { id: 'glicemia', label: 'Resistência à insulina, pré-diabetes ou diabetes' },
  ];

  const toggleSymptom = (id) => {
    if (selectedSymptoms.includes(id)) {
      setSelectedSymptoms(selectedSymptoms.filter((item) => item !== id));
    } else {
      setSelectedSymptoms([...selectedSymptoms, id]);
    }
  };

  const handleGenerateAssessment = () => {
    setSubmitted(true);
  };

  const handleSendToWhatsapp = () => {
    const labels = selectedSymptoms
      .map((id) => symptomsList.find((s) => s.id === id)?.label)
      .filter(Boolean);

    const textMessage = `Olá, Dra. Carolina! Gostaria de agendar uma consulta. Fiz a autoavaliação no site e identificou os seguintes sinais:\n\n` +
      labels.map((l) => `• ${l}`).join('\n') +
      `\n\nGostaria de entender a causa metabólica/hormonal dessas alterações.`;

    const encoded = encodeURIComponent(textMessage);
    window.open(`https://wa.me/5517992285084?text=${encoded}`, '_blank');
  };

  return (
    <section ref={quizRef} id="quiz" className="py-20 bg-[#F6EFEE] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="quiz-header text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#5C3327]/10 border border-[#5C3327]/20 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#5C3327] mb-3">
            <Activity className="w-4 h-4 text-[#B85D36]" />
            <span>Ferramenta Interativa UX</span>
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-4xl font-semibold text-[#1D1F1E] tracking-tight">
            Identifique os Sinais do Seu Corpo
          </h2>
          <p className="mt-3 text-base text-[#1D1F1E]/70 font-light">
            Selecione abaixo os sintomas que você tem sentido com frequência para entender como a endocrinologia investigativa pode ajudar a restabelecer o seu equilíbrio.
          </p>
        </div>

        {/* Main Quiz Box */}
        <div className="quiz-box-container glass-card p-6 sm:p-10 rounded-3xl shadow-luxury border border-[#5C3327]/10 bg-white">
          
          {!submitted ? (
            <div>
              <h3 className="text-lg font-semibold text-[#5C3327] mb-6 flex items-center gap-2">
                <span>O que você tem notado na sua rotina ultimamente?</span>
                <span className="text-xs font-normal text-[#4E594F]">(Selecione uma ou mais opções)</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {symptomsList.map((symptom) => {
                  const isChecked = selectedSymptoms.includes(symptom.id);
                  return (
                    <button
                      key={symptom.id}
                      type="button"
                      onClick={() => toggleSymptom(symptom.id)}
                      className={`quiz-option-btn flex items-start gap-3 p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-[#5C3327] text-white border-[#5C3327] shadow-md scale-[1.01]'
                          : 'bg-[#FAF5F2] hover:bg-[#EBDAD3]/40 text-[#1D1F1E] border-[#5C3327]/10'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-md mt-0.5 flex items-center justify-center border transition-colors shrink-0 ${
                          isChecked
                            ? 'bg-[#B85D36] border-[#B85D36] text-white'
                            : 'bg-white border-[#5C3327]/30'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <span className="text-sm font-medium leading-snug">{symptom.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#5C3327]/10">
                <span className="text-xs text-[#4E594F]">
                  {selectedSymptoms.length === 0
                    ? 'Nenhuma opção selecionada ainda.'
                    : `${selectedSymptoms.length} sinal(is) selecionado(s).`}
                </span>

                <button
                  disabled={selectedSymptoms.length === 0}
                  onClick={handleGenerateAssessment}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-medium text-sm transition-all shadow-md ${
                    selectedSymptoms.length > 0
                      ? 'bg-[#B85D36] hover:bg-[#a34d2a] text-white cursor-pointer hover:shadow-lg'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <span>Analisar Meu Quadro</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Result Box */
            <div className="quiz-result-view space-y-6">
              <div className="p-6 rounded-2xl bg-[#5C3327]/5 border border-[#5C3327]/20 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#5C3327] text-white flex items-center justify-center shrink-0 font-serif-brand font-bold text-xl">
                  CP
                </div>
                <div>
                  <h4 className="font-serif-brand text-2xl font-semibold text-[#5C3327]">
                    Sinais identificados: {selectedSymptoms.length} alteração(ões) metabólica(s)
                  </h4>
                  <p className="text-sm text-[#1D1F1E]/80 mt-1 font-light leading-relaxed">
                    Sintomas como este raramente ocorrem isoladamente. Na endocrinologia raiz, avaliamos o metabolismo por inteiro para entender a interação entre tireoide, cortisol, insulina e hormônios sexuais.
                  </p>
                </div>
              </div>

              <div className="bg-[#FAF5F2] p-5 rounded-2xl border border-[#5C3327]/10 space-y-2">
                <h5 className="text-xs font-semibold uppercase tracking-wider text-[#B85D36]">Sintomas Selecionados:</h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#1D1F1E]">
                  {selectedSymptoms.map((id) => (
                    <li key={id} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#B85D36]" />
                      <span>{symptomsList.find((s) => s.id === id)?.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#5C3327]/10">
                <button
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center gap-2 text-sm text-[#4E594F] hover:text-[#5C3327] transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Refazer autoavaliação</span>
                </button>

                <button
                  onClick={handleSendToWhatsapp}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#5C3327] hover:bg-[#68392C] text-white px-8 py-3.5 rounded-full font-medium text-sm transition-all shadow-xl hover:shadow-2xl cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 text-[#B85D36]" />
                  <span>Enviar Resultado para Dra. Carolina via WhatsApp</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

