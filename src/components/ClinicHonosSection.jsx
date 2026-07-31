import React, { useRef } from 'react';
import { Clock, Shield, Building2, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function ClinicHonosSection({ onOpenBooking }) {
  const clinicaRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.clinica-content',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: clinicaRef.current, start: 'top 85%', once: true },
        clearProps: 'all',
      }
    );

    gsap.fromTo('.clinica-step-card',
      { y: 25, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.clinica-step-card', start: 'top 90%', once: true },
        clearProps: 'all',
      }
    );
  }, { scope: clinicaRef });

  const steps = [
    {
      number: '01',
      title: 'Agendamento Direto',
      desc: 'Sua consulta é agendada via WhatsApp com atendimento rápido e flexibilidade de horários.',
    },
    {
      number: '02',
      title: 'Anamnese Completa',
      desc: 'Consulta estendida para ouvir toda a sua história de saúde, hábitos de vida e sintomas.',
    },
    {
      number: '03',
      title: 'Exame Físico & Diagnóstico',
      desc: 'Avaliação clínica minuciosa com solicitação apenas dos exames laboratoriais necessários.',
    },
    {
      number: '04',
      title: 'Plano Terapêutico',
      desc: 'Entrega de conduta personalizada sem modismos e canal direto para tirar dúvidas na jornada.',
    },
  ];

  return (
    <section ref={clinicaRef} id="clinica" className="py-8 sm:py-12 bg-[#FAF5F2] text-[#1D1F1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Grid: Compact Fit in Viewport */}
        <div className="clinica-content grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center min-h-[60vh]">
          
          {/* Left Column (6 cols): Text & Info */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#5C3327]/10 border border-[#5C3327]/20 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#5C3327]">
              <Building2 className="w-3.5 h-3.5 text-[#B85D36]" />
              <span>Espaço Físico & Atendimento Humanizado</span>
            </div>

            <h2 className="font-serif-brand text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1D1F1E] tracking-tight leading-tight">
              Clínica Honos: Um Ambiente Criado para o Seu Bem-Estar
            </h2>

            <p className="text-sm sm:text-base text-[#4E594F] font-light leading-relaxed">
              A <strong className="font-semibold text-[#1D1F1E]">Clínica Honos</strong> foi planejada para proporcionar conforto, privacidade e acolhimento desde a sua chegada. Um ambiente seguro onde a <strong className="font-semibold text-[#1D1F1E]">Dra. Carolina Pitelli</strong> atende cada paciente de forma individualizada.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-2xl bg-white border border-[#5C3327]/10 flex items-start gap-3 shadow-sm">
                <div className="p-2 rounded-lg bg-[#FAF5F2] text-[#B85D36] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#1D1F1E]">Consultas Sem Pressa</h4>
                  <p className="text-[11px] text-[#4E594F] mt-0.5 leading-snug">Tempo suficiente para investigação completa.</p>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white border border-[#5C3327]/10 flex items-start gap-3 shadow-sm">
                <div className="p-2 rounded-lg bg-[#FAF5F2] text-[#B85D36] shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#1D1F1E]">Sigilo & Respeito</h4>
                  <p className="text-[11px] text-[#4E594F] mt-0.5 leading-snug">Atendimento com máxima discrição médica.</p>
                </div>
              </div>
            </div>

            <div className="pt-1">
              <button
                onClick={onOpenBooking}
                className="bg-[#5C3327] hover:bg-[#68392C] text-white px-7 py-3 rounded-full text-xs sm:text-sm font-medium transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Conhecer a Clínica & Agendar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column (6 cols): Perfectly Scaled Image to fit Viewport without scrolling */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-[#5C3327]/15 bg-white max-h-[58vh] flex items-center justify-center">
              <img
                src="/assets/foto_dra_carolina_poltrona.jpg"
                alt="Espaço Clínica Honos"
                className="max-h-[58vh] w-auto h-auto object-contain block rounded-3xl"
              />
            </div>
          </div>

        </div>

        {/* Step-by-Step Patient Journey */}
        <div className="mt-10 pt-8 border-t border-[#5C3327]/15">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h3 className="font-serif-brand text-2xl sm:text-3xl font-semibold text-[#1D1F1E]">
              Como Funciona a Sua Jornada de Atendimento
            </h3>
            <p className="text-xs sm:text-sm text-[#4E594F] mt-1">
              Do primeiro contato via WhatsApp ao plano de saúde contínuo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="clinica-step-card p-4 rounded-2xl bg-white border border-[#5C3327]/10 shadow-sm"
              >
                <span className="font-serif-brand text-2xl font-bold text-[#B85D36] block mb-2">
                  {step.number}
                </span>
                <h4 className="font-serif-brand text-base font-semibold text-[#5C3327] mb-1">
                  {step.title}
                </h4>
                <p className="text-xs text-[#1D1F1E]/75 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
