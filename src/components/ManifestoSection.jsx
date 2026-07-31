import React, { useRef } from 'react';
import { Sparkles, MessageCircle, ArrowRight, Eye, Microscope, ShieldCheck, HeartHandshake } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function ManifestoSection({ onOpenBooking }) {
  const manifestoRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.manifesto-header',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: manifestoRef.current, start: 'top 95%', once: true },
        clearProps: 'all',
      }
    );

    gsap.fromTo('.manifesto-photo',
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.manifesto-photo', start: 'top 95%', once: true },
        clearProps: 'all',
      }
    );

    gsap.fromTo('.manifesto-text',
      { x: 30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.manifesto-text', start: 'top 95%', once: true },
        clearProps: 'all',
      }
    );

    gsap.fromTo('.manifesto-pillar-card',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.manifesto-pillar-card', start: 'top 95%', once: true },
        clearProps: 'all',
      }
    );

    gsap.fromTo('.manifesto-footer',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.manifesto-footer', start: 'top 95%', once: true },
        clearProps: 'all',
      }
    );
  }, { scope: manifestoRef });

  const manifestoPillars = [
    {
      icon: Eye,
      title: 'Resgate do Olho no Olho',
      description: 'Consultas estendidas e sem pressa. Cada sintoma e histórico de vida são ouvidos com empatia para entender sua rotina real.',
    },
    {
      icon: Microscope,
      title: 'Foco na Causa Raiz',
      description: 'Não tratamos apenas números de exames em papel. Investigamos o metabolismo, a tireoide e o sistema hormonal por completo.',
    },
    {
      icon: ShieldCheck,
      title: 'Ciência Sem Modismos',
      description: 'Zero fórmulas mágicas ou modas corporais passageiras. Apenas condutas endocrinológicas consolidadas e seguras.',
    },
  ];

  return (
    <section ref={manifestoRef} id="manifesto" className="py-14 sm:py-24 bg-[#FAF5F2] relative overflow-hidden border-t border-[#5C3327]/10">
      
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-10 right-[-5%] w-[450px] h-[450px] rounded-full bg-[#B85D36]/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-[450px] h-[450px] rounded-full bg-[#4E594F]/8 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="manifesto-header text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#5C3327]/10 border border-[#5C3327]/20 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#5C3327] mb-4">
            <Sparkles className="w-4 h-4 text-[#B85D36]" />
            <span>Endocrinologia Raiz</span>
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1D1F1E] tracking-tight leading-tight">
            "Eu recuso a medicina fria e superficial. <br />
            <span className="italic font-normal text-[#5C3327] underline decoration-[#B85D36]/30 underline-offset-8">
              Seu corpo merece escuta de verdade e ciência.
            </span>"
          </h2>
        </div>

        {/* 2 Columns Editorial Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Clean Portrait Photo */}
          <div className="manifesto-photo lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img
                src="/assets/dra_carolina_brown_top_smile.jpg"
                alt="Dra. Carolina Pitelli Endocrinologista"
                className="w-full h-full object-cover object-top hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 bg-gradient-to-t from-[#1D1F1E]/80 via-[#1D1F1E]/30 to-transparent text-white">
                <p className="font-serif-brand text-xl font-semibold text-[#ECE3D8]">
                  Dra. Carolina Pitelli
                </p>
                <p className="text-xs text-[#EBDAD3]/90 font-light mt-0.5">
                  CRM/SP 211.934 • RQE 147.555
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Inspiring Manifesto Narrative Cards */}
          <div className="lg:col-span-7 space-y-6">
            
            <p className="manifesto-text text-base sm:text-lg text-[#1D1F1E]/85 font-light leading-relaxed">
              Durante toda a minha formação médica, percebi o quanto os pacientes chegam aos consultórios desanimados e desgastados por atendimento impessoal e promessas milagrosas.
            </p>

            <div className="manifesto-text p-4 sm:p-6 rounded-2xl bg-white border-l-4 border-[#B85D36] shadow-sm space-y-2">
              <p className="font-serif-brand text-lg sm:text-xl text-[#5C3327] italic font-medium leading-snug">
                "Aceitar consultas rápidas faz com que a verdadeira causa do seu cansaço, ganho de peso ou oscilação hormonal nunca seja descoberta."
              </p>
            </div>

            {/* 3 Pillars List */}
            <div className="grid grid-cols-1 gap-4 pt-2">
              {manifestoPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="manifesto-pillar-card p-5 rounded-2xl bg-white border border-[#5C3327]/10 hover:border-[#B85D36]/30 transition-all shadow-sm flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#5C3327]/10 text-[#5C3327] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-base text-[#1D1F1E]">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#1D1F1E]/75 font-light mt-1 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Signature & CTA */}
            <div className="manifesto-footer pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-[#5C3327]/10">
              <img
                src="/assets/logo_carolina_pitelli_horizontal.png"
                alt="Dra. Carolina Pitelli Logo Oficial"
                className="h-8 w-auto object-contain self-start sm:self-auto"
              />

              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#5C3327] hover:bg-[#68392C] text-white px-6 py-3.5 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg cursor-pointer group"
              >
                <MessageCircle className="w-4 h-4 text-[#B85D36]" />
                <span>Agendar Consulta Humanizada</span>
                <ArrowRight className="w-4 h-4 text-[#EBDAD3] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
