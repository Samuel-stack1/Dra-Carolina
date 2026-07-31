import React, { useRef } from 'react';
import { Eye, Microscope, ShieldCheck, HeartHandshake, Sparkles, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function PillarsSection({ onOpenBooking }) {
  const pillarsRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.pillars-header',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: pillarsRef.current, start: 'top 95%', once: true },
        clearProps: 'all',
      }
    );

    gsap.fromTo('.pillar-card-item',
      { y: 40, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.pillar-card-item', start: 'top 95%', once: true },
        clearProps: 'all',
      }
    );
  }, { scope: pillarsRef });

  const pillars = [
    {
      icon: Eye,
      number: '01',
      title: 'Olho no Olho & Escuta Atenta',
      subtitle: 'Sem consultas efêmeras ou checagens rápidas',
      description:
        'A consulta médica precisa ser um ambiente de acolhimento. Ouvir a sua trajetória, entender suas queixas de cansaço e estilo de vida é o primeiro passo para o diagnóstico correto.',
      color: 'bg-[#5C3327]',
      textColor: 'text-[#B85D36]',
    },
    {
      icon: Microscope,
      number: '02',
      title: 'Investigação Metabólica Profunda',
      subtitle: 'Entendendo a causa raiz dos sintomas',
      description:
        'Não tratamos apenas números de exames em papel. Investigamos a interação hormonal, a tireoide, o cortisol e a resistência à insulina em conjunto com o seu estado clínico.',
      color: 'bg-[#4E594F]',
      textColor: 'text-[#9DAA9E]',
    },
    {
      icon: ShieldCheck,
      number: '03',
      title: 'Ciência de Verdade Sem Modismos',
      subtitle: 'Sem promessas milagrosas ou modas passageiras',
      description:
        'Fórmulas mágicas geram efeito sanfona e bagunçam o organismo. A conduta médica da Dra. Carolina é totalmente embasada na endocrinologia fundamentada pela ciência séria.',
      color: 'bg-[#B85D36]',
      textColor: 'text-[#EBDAD3]',
    },
    {
      icon: HeartHandshake,
      number: '04',
      title: 'Parceria no Cuidado Contínuo',
      subtitle: 'Seu corpo tratado com a dignidade que merece',
      description:
        'A saúde metabólica é uma jornada contínua. Você terá uma médica parceira disposta a ajustar estratégias de forma realista para a sua vida.',
      color: 'bg-[#1D1F1E]',
      textColor: 'text-[#B85D36]',
    },
  ];

  return (
    <section ref={pillarsRef} id="pilares" className="py-14 sm:py-24 bg-[#ECE3D8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="pillars-header text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#5C3327]/10 border border-[#5C3327]/20 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#5C3327] mb-3">
            <Sparkles className="w-4 h-4 text-[#B85D36]" />
            <span>Fundamentos da Endocrinologia Raiz</span>
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1D1F1E] tracking-tight">
            Os 4 Pilares da Nossa Conduta Médica
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1D1F1E]/75 font-light">
            Como transformamos a experiência da consulta endocrinológica em um momento único de atenção e resultado real.
          </p>
        </div>

        {/* Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="pillar-card-item glass-card p-6 sm:p-8 rounded-3xl bg-white/90 border border-[#5C3327]/10 hover:border-[#B85D36]/40 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group shadow-luxury"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl ${pillar.color} text-white flex items-center justify-center shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-serif-brand text-3xl font-bold text-[#5C3327]/30 group-hover:text-[#B85D36] transition-colors">
                      {pillar.number}
                    </span>
                  </div>

                  <h3 className="font-serif-brand text-2xl font-semibold text-[#1D1F1E] mb-2 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-xs font-medium uppercase tracking-wider text-[#B85D36] mb-4">
                    {pillar.subtitle}
                  </p>

                  <p className="text-sm text-[#1D1F1E]/75 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#5C3327]/10 flex items-center text-xs font-semibold text-[#5C3327] group-hover:text-[#B85D36] transition-colors">
                  <span>Saber mais</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="pillars-banner mt-10 sm:mt-16 glass-panel p-6 sm:p-10 rounded-3xl border border-[#5C3327]/20 bg-[#FAF5F2] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif-brand text-2xl sm:text-3xl font-semibold text-[#5C3327]">
              Pronto(a) para vivenciar uma consulta diferente de tudo o que já viu?
            </h3>
            <p className="text-sm text-[#1D1F1E]/80 font-light">
              Agende sua avaliação presencial na Clínica Honos ou via Telemedicina.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto text-center justify-center shrink-0 bg-[#5C3327] hover:bg-[#68392C] text-white px-8 py-4 rounded-full font-medium text-sm transition-all shadow-lg hover:shadow-xl cursor-pointer"
          >
            Agendar Consulta no WhatsApp
          </button>
        </div>

      </div>
    </section>
  );
}
