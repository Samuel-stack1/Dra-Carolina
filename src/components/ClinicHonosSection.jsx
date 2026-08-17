import React, { useRef } from 'react';
import { Clock, Shield, Building2, ArrowRight, MapPin } from 'lucide-react';
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
              <img loading="lazy"
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

        {/* Map Section */}
        <div className="mt-16 sm:mt-24 relative">
          {/* Decorative background blob behind the map section */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#5C3327]/5 to-transparent rounded-[2.5rem] -mx-2 sm:-mx-8 pointer-events-none"></div>
          
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-12 rounded-[2.5rem] bg-white border border-[#5C3327]/10 shadow-xl overflow-hidden">
            
            {/* Subtle corner graphic */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#B85D36]/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="lg:col-span-5 text-center lg:text-left space-y-5 relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#FAF5F2] border border-[#5C3327]/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#5C3327] shadow-sm">
                <MapPin className="w-4 h-4 text-[#B85D36]" />
                <span>Nossa Localização</span>
              </div>
              <h3 className="font-serif-brand text-3xl sm:text-4xl font-semibold text-[#1D1F1E] leading-tight">
                Como chegar na Clínica Honos
              </h3>
              <p className="text-[#4E594F] font-light text-base leading-relaxed">
                Um espaço planejado para o seu conforto, localizado no coração de Rio Preto.
              </p>
              
              <div className="pt-2 flex justify-center lg:justify-start">
                <div className="bg-[#FAF5F2] p-5 rounded-2xl border border-[#5C3327]/10 text-left shadow-inner flex gap-4 items-start">
                  <div className="p-2 bg-white rounded-xl shadow-sm shrink-0 border border-[#5C3327]/5">
                    <Building2 className="w-5 h-5 text-[#B85D36]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1D1F1E] text-sm mb-1">Endereço Oficial</p>
                    <p className="text-[#4E594F] text-sm leading-relaxed">
                      Av. José Munia, 7301<br />
                      4º andar, salas 401 e 402<br />
                      São José do Rio Preto - SP
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 relative z-10">
              <div className="relative w-full h-[320px] sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-[#FAF5F2] border border-[#5C3327]/15 group bg-[#E8DED5] transform transition-transform duration-700 hover:-translate-y-1 hover:shadow-3xl">
                {/* Glassmorphism Inner Border */}
                <div className="absolute inset-0 border-[6px] border-white/20 rounded-3xl pointer-events-none z-10 mix-blend-overlay"></div>
                
                {/* Map Iframe */}
                <iframe 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight="0" 
                  marginWidth="0" 
                  src="https://maps.google.com/maps?q=Av.%20Jos%C3%A9%20Munia,%207301,%20S%C3%A3o%20Jos%C3%A9%20do%20Rio%20Preto&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  title="Mapa Clínica Honos"
                  className="grayscale-[30%] contrast-110 opacity-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100 transition-all duration-700 ease-in-out w-full h-full"
                ></iframe>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}

