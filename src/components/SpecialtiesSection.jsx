import React, { useState, useRef } from 'react';
import { Scale, HeartPulse, Zap, ShieldAlert, Sparkles, CheckCircle2, ChevronRight, MessageCircle, Heart, Brain, Activity, Droplets } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function SpecialtiesSection({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState(0);
  const specRef = useRef(null);
  const isFirstRender = useRef(true);

  useGSAP(() => {
    gsap.fromTo('.spec-header',
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: specRef.current, start: 'top 95%', once: true },
        clearProps: 'all',
      }
    );

    gsap.fromTo('.spec-tab-btn',
      { x: -15, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.05,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.spec-tab-btn', start: 'top 95%', once: true },
        clearProps: 'all',
      }
    );

    gsap.fromTo('.spec-detail-card',
      { x: 25, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.spec-detail-card', start: 'top 95%', once: true },
        clearProps: 'all',
      }
    );
  }, { scope: specRef });

  useGSAP(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    gsap.from('.spec-detail-card > div', {
      opacity: 0,
      y: 12,
      duration: 0.35,
      ease: 'power2.out',
    });
  }, { scope: specRef, dependencies: [activeTab] });

  // 9 Official Specialties requested by User
  const specialties = [
    {
      id: 'diabetes',
      icon: ShieldAlert,
      title: 'Diabetes',
      badge: 'Prevenção & Controle Glicêmico',
      summary: 'Acompanhamento completo do Diabetes Tipo 1, Tipo 2, Gestacional e Resistência à Insulina com tecnologia e conduta individualizada.',
      details: [
        'Diagnóstico e manejo da Resistência à Insulina',
        'Controle de Diabetes Tipo 1, Tipo 2 e Gestacional',
        'Monitoramento contínuo da glicose e ajustes finos',
        'Prevenção de complicações cardiovasculares e renais',
      ],
    },
    {
      id: 'tireoide',
      icon: HeartPulse,
      title: 'Tireoide',
      badge: 'Hipotireoidismo, Hashimoto & Nódulos',
      summary: 'A tireoide rege a velocidade do metabolismo, energia e sono. Investigação criteriosa de disfunções e nódulos tireoidianos.',
      details: [
        'Hipotireoidismo e Hipertireoidismo',
        'Tireoidite de Hashimoto e anticorpos tireoidianos',
        'Avaliação e seguimento de nódulos à ultrassonografia',
        'Ajuste preciso da dosagem de levotiroxina',
      ],
    },
    {
      id: 'obesidade',
      icon: Scale,
      title: 'Obesidade',
      badge: 'Emagrecimento Científico & Metabólico',
      summary: 'Tratamento sério da obesidade como doença crônica e multifatorial, sem métodos punitivos ou fórmulas mágicas perigosas.',
      details: [
        'Causas hormonais e metabólicas do ganho de peso',
        'Uso ético de medicações modernas de alta eficácia',
        'Preservação da massa magra e saúde muscular',
        'Estratégias científicas para prevenção do reganho',
      ],
    },
    {
      id: 'menopausa',
      icon: Sparkles,
      title: 'Reposição Hormonal na Menopausa',
      badge: 'Terapia de Reposição Hormonal (TRH)',
      summary: 'Acompanhamento individualizado no climatério e menopausa para resgatar o bem-estar, vitalidade e qualidade de vida feminina.',
      details: [
        'Manejo de fogachos (calores), insônia e humor',
        'Terapia de reposição hormonal segura quando indicada',
        'Proteção cardiovascular, óssea e cognitiva na menopausa',
        'Melhora do ressecamento e da libido feminina',
      ],
    },
    {
      id: 'dislipidemia',
      icon: Droplets,
      title: 'Dislipidemia',
      badge: 'Colesterol & Triglicérides',
      summary: 'Diagnóstico e tratamento de alterações de gorduras no sangue (colesterol e triglicerídeos) para proteção da saúde vascular.',
      details: [
        'Avaliação de Colesterol Total, LDL, HDL e Triglicérides',
        'Redução do risco de infarto e AVC (Acidente Vascular)',
        'Manejo de Dislipidemias Familiares e Genéticas',
        'Ajuste dietético e farmacológico baseado em diretrizes',
      ],
    },
    {
      id: 'osteoporose',
      icon: Activity,
      title: 'Osteoporose e Doenças Ósseas',
      badge: 'Saúde Óssea & Cálcio',
      summary: 'Prevenção e tratamento da fragilidade óssea, osteopenia e distúrbios do metabolismo de cálcio e vitamina D.',
      details: [
        'Avaliação de Densitometria Óssea e risco de fraturas',
        'Diagnóstico e manejo da Osteopenia e Osteoporose',
        'Tratamento de alterações de Cálcio, Fósforo e Vitamina D',
        'Investigação de Hiperparatireoidismo e Paratireoide',
      ],
    },
    {
      id: 'adrenais',
      icon: Zap,
      title: 'Doenças Adrenais',
      badge: 'Supra-renais & Cortisol',
      summary: 'Investigação rigorosa da função adrenal, regulação do cortisol, pressão arterial e resposta hormonal ao estresse.',
      details: [
        'Investigação de nódulos adrenais (incidentalomas)',
        'Manejo de Insuficiência Adrenal e Síndrome de Cushing',
        'Hiperaldosteronismo e hipertensão de origem hormonal',
        'Avaliação de distúrbios de cortisol e DHEA',
      ],
    },
    {
      id: 'neuroendocrino',
      icon: Brain,
      title: 'Neuroendócrino',
      badge: 'Hipófise & Eixo Hipotalâmico',
      summary: 'Acompanhamento de condições clínicas que afetam a hipófise e o hipotálamo, mestres do sistema hormonal.',
      details: [
        'Investigação de Prolactinomas e hiperprolactinemia',
        'Acompanhamento de Adenomas Hipofisários e acromegalia',
        'Avaliação de alteração no hormônio do crescimento (GH)',
        'Manejo de Diabetes Insipidus e alterações hipofisárias',
      ],
    },
    {
      id: 'gonadas',
      icon: Heart,
      title: 'Gônadas Feminina e Masculina',
      badge: 'Saúde Hormonal & Hormônios Sexuais',
      summary: 'Cuidado especializado no equilíbrio dos hormônios sexuais (estrogênio, progesterona e testosterona) em mulheres e homens.',
      details: [
        'Síndrome dos Ovários Policísticos (SOP) e acne hormonal',
        'Deficiência de testosterona masculina (Andropausa / DAEM)',
        'Investigação hormonal da fertilidade e libido',
        'Ginecomastia e alteração de hormônios sexuais',
      ],
    },
  ];

  return (
    <section ref={specRef} id="especialidades" className="py-14 sm:py-28 bg-[#F6EFEE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="spec-header text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#5C3327]/10 border border-[#5C3327]/20 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#5C3327] mb-3">
            <Sparkles className="w-4 h-4 text-[#B85D36]" />
            <span>Áreas de Atuação Médica</span>
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1D1F1E] tracking-tight">
            Especialidades Endocrinológicas
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#1D1F1E]/75 font-light">
            Conheça todas as condições clínicas tratadas pela Dra. Carolina Pitelli com rigor científico e acolhimento.
          </p>
        </div>

        {/* Tab Navigation & Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Tabs Menu (Horizontal swipeable bar on mobile, scrollable vertical list on desktop) */}
          <div className="lg:col-span-5 flex lg:flex-col overflow-x-auto lg:overflow-y-auto space-x-2.5 lg:space-x-0 lg:space-y-2.5 max-h-[140px] lg:max-h-[600px] pb-3 lg:pb-0 pr-1 scrollbar-none [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x">
            {specialties.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(idx)}
                  className={`spec-tab-btn shrink-0 snap-start min-w-[220px] sm:min-w-[260px] lg:min-w-0 lg:w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl text-left transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-[#5C3327] text-white border-[#5C3327] shadow-md scale-[1.01]'
                      : 'bg-white hover:bg-[#FAF5F2] text-[#1D1F1E] border-[#5C3327]/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        isActive ? 'bg-[#B85D36] text-white' : 'bg-[#5C3327]/10 text-[#5C3327]'
                      }`}
                    >
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h3 className="font-serif-brand text-sm sm:text-base font-semibold leading-snug">
                        {item.title}
                      </h3>
                      <span className={`text-[10px] sm:text-[11px] block ${isActive ? 'text-[#EBDAD3]' : 'text-[#4E594F]'}`}>
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  <ChevronRight
                    className={`hidden lg:block w-4 h-4 transition-transform ${
                      isActive ? 'text-[#B85D36] translate-x-1' : 'text-gray-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Detail Showcase Card */}
          <div className="spec-detail-card lg:col-span-7 glass-card p-5 sm:p-10 rounded-3xl bg-white shadow-luxury border border-[#5C3327]/10 min-h-[420px] sm:min-h-[500px] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
                <span className="bg-[#B85D36]/15 text-[#B85D36] border border-[#B85D36]/30 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                  {specialties[activeTab].badge}
                </span>

                <span className="text-xs text-[#4E594F] font-medium">
                  Dra. Carolina Pitelli • CRM/SP 211.934
                </span>
              </div>

              <h3 className="font-serif-brand text-2xl sm:text-3xl font-semibold text-[#5C3327] mb-3">
                {specialties[activeTab].title}
              </h3>

              <p className="text-sm sm:text-base text-[#1D1F1E]/80 font-light leading-relaxed mb-6">
                {specialties[activeTab].summary}
              </p>

              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#4E594F] mb-3">
                O que inclui no plano terapêutico:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {specialties[activeTab].details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF5F2] border border-[#5C3327]/5">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#B85D36] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#1D1F1E] font-medium">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-[#5C3327]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#4E594F]">
                Deseja tratar esta condição com a Dra. Carolina?
              </span>

              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#5C3327] hover:bg-[#68392C] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-medium transition-all shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#B85D36]" />
                <span>Agendar para esta Especialidade</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
