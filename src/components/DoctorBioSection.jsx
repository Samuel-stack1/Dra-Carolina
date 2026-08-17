import React, { useRef } from 'react';
import { Award, Stethoscope, Heart, Check, Sparkles, MessageCircle, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function DoctorBioSection({ onOpenBooking }) {
  const bioRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.bio-header',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: bioRef.current, start: 'top 95%', once: true },
        clearProps: 'all',
      }
    );

    gsap.fromTo('.bio-photo-main',
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.bio-photo-main', start: 'top 95%', once: true },
        clearProps: 'all',
      }
    );

    gsap.fromTo('.bio-photo-secondary',
      { x: 30, y: 30, opacity: 0 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.bio-photo-secondary', start: 'top 95%', once: true },
        clearProps: 'all',
      }
    );

    gsap.fromTo('.bio-badge',
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.bio-badge', start: 'top 95%', once: true },
        clearProps: 'all',
      }
    );

    gsap.fromTo('.bio-text',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.bio-text', start: 'top 95%', once: true },
        clearProps: 'all',
      }
    );

    gsap.fromTo('.bio-highlight-card',
      { y: 25, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.bio-highlight-card', start: 'top 95%', once: true },
        clearProps: 'all',
      }
    );

    gsap.fromTo('.bio-cta',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.bio-cta', start: 'top 95%', once: true },
        clearProps: 'all',
      }
    );
  }, { scope: bioRef });

  const highlights = [
    {
      title: 'Formação & Rigor Científico',
      desc: 'Formada em Medicina com especialização e título em Endocrinologia e Metabologia.',
    },
    {
      title: 'Abordagem Investigativa',
      desc: 'Foco em identificar a causa raiz de sintomas como cansaço crônico, oscilações de peso e alterações hormonais.',
    },
    {
      title: 'Consultas Sem Pressa',
      desc: 'Tempo dedicado exclusivamente para ouvir seu histórico de vida, hábitos, dúvidas e objetivos.',
    },
    {
      title: 'Medicina Sem Modismos',
      desc: 'Tratamentos embasados por diretrizes científicas consolidadas, sem promessas milagrosas.',
    },
  ];

  return (
    <section ref={bioRef} id="sobre-dra-carolina" className="py-14 sm:py-24 bg-[#FAF5F2] relative overflow-hidden">
      
      {/* Decorative Orbs */}
      <div className="absolute top-10 right-[-10%] w-96 h-96 bg-[#B85D36]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-96 h-96 bg-[#5C3327]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Photo Composition */}
          <div className="lg:col-span-5 relative">
            
            {/* Primary Main Photo (Armchair) */}
            <div className="bio-photo-main relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white glass-card">
              <img loading="lazy"
                src="/assets/dra_carolina_armchair.jpg"
                alt="Dra. Carolina Pitelli na poltrona do consultório"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D1F1E]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 p-3 sm:p-4 rounded-2xl glass-panel-dark text-white backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/90 p-1 flex items-center justify-center shrink-0">
                    <img loading="lazy"
                      src="/assets/logo_carolina_pitelli_monogram.png"
                      alt="CP Monograma"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif-brand font-semibold text-base text-[#ECE3D8]">
                      Dra. Carolina Pitelli
                    </h4>
                    <p className="text-xs text-[#9DAA9E]">
                      CRM/SP 211.934 | RQE 147.555
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Floating Overlapping Photo (Blue Blazer) */}
            <div className="bio-photo-secondary absolute -bottom-8 -right-6 hidden sm:block w-48 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white glass-card">
              <img loading="lazy"
                src="/assets/dra_carolina_blue_blazer.jpg"
                alt="Dra. Carolina Pitelli perfil profissional"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating Experience Badge */}
            <div className="bio-badge absolute -top-3 sm:-top-4 left-2 sm:-left-4 bg-white/95 backdrop-blur-md border border-[#5C3327]/15 p-3.5 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 max-w-[190px] sm:max-w-[220px]">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#5C3327]/10 flex items-center justify-center text-[#5C3327] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-[#1D1F1E]">Medicina Raiz</h5>
                <p className="text-[11px] text-[#4E594F]">Rigor técnico com escuta empática</p>
              </div>
            </div>

          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bio-header">
              <div className="inline-flex items-center gap-2 bg-[#5C3327]/10 border border-[#5C3327]/20 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#5C3327] mb-3">
                <Sparkles className="w-4 h-4 text-[#B85D36]" />
                <span>Conheça a Sua Médica</span>
              </div>

              <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1D1F1E] tracking-tight leading-tight">
                Uma medicina que enxerga a pessoa inteira por trás do exame.
              </h2>
            </div>

            <p className="bio-text text-base sm:text-lg text-[#1D1F1E]/80 font-light leading-relaxed">
              Olá! Sou a <strong className="font-semibold text-[#5C3327]">Dra. Carolina Pitelli</strong>. Escolhi a endocrinologia porque acredito que entender o metabolismo humano é chave para devolver a disposição, a autoestime e o equilíbrio às pessoas.
            </p>

            <p className="bio-text text-sm sm:text-base text-[#1D1F1E]/75 font-light leading-relaxed">
              Infelizmente, a medicina moderna muitas vezes se tornou industrializada: consultas de 15 minutos, prescrições padronizadas e pouca atenção à história real do paciente. O meu compromisso é o oposto disso. Dedico o tempo necessário para te ouvir com atenção e traçar um plano de tratamento sólido e transparente.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="bio-highlight-card p-4 rounded-2xl bg-white border border-[#5C3327]/10 shadow-sm flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#B85D36]/15 text-[#B85D36] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#5C3327]">{item.title}</h4>
                    <p className="text-xs text-[#4E594F] mt-0.5 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="bio-cta pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#5C3327] hover:bg-[#68392C] text-white px-7 py-3.5 rounded-full font-medium text-sm transition-all shadow-lg hover:shadow-xl cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#B85D36]" />
                <span>Agendar Avaliação com a Dra. Carolina</span>
              </button>

              <span className="text-xs text-[#4E594F] font-medium text-center sm:text-left">
                Atendimento Presencial na Clínica Honos & Telemedicina
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

