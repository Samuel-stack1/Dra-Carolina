import React, { useRef } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero({ onOpenBooking }) {
  const heroRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.1 });

    // Background photo animation (Desktop and Mobile)
    tl.fromTo(['.hero-bg-img-desktop', '.hero-bg-img-mobile'],
      { scale: 1.05, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.6, ease: 'power2.out', clearProps: 'all' }
    )
      .fromTo('.hero-headline-line',
        { y: '110%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 1.1, stagger: 0.12, ease: 'power4.out', clearProps: 'all' },
        '-=1.2'
      )
      .fromTo(
        '.hero-subtext',
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, clearProps: 'all' },
        '-=0.8'
      )
      .fromTo(
        '.hero-cta-group',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, clearProps: 'all' },
        '-=0.6'
      )
      .fromTo(
        '.hero-creds',
        { opacity: 0 },
        { opacity: 1, duration: 0.8, clearProps: 'all' },
        '-=0.5'
      );
  }, { scope: heroRef });

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full bg-[#FAF5F2] overflow-hidden flex flex-col justify-end lg:flex-row lg:items-center"
    >
      {/* DESKTOP BACKGROUND (Solid Cream + Floating Cutout PNG) */}
      <div className="hidden lg:block absolute inset-0 z-0 bg-[#FAF5F2]">
        {/* Floating Cutout PNG anchored to bottom right and pushed towards the right edge */}
        <img
          src="/assets/dra_carolina_hero_black_top.png"
          alt="Dra. Carolina Pitelli - Endocrinologista"
          className="hero-bg-img-desktop absolute -right-[5%] xl:-right-[10%] bottom-0 h-[92vh] w-auto max-w-none object-contain object-bottom drop-shadow-2xl opacity-100 pointer-events-none"
        />
      </div>

      {/* MOBILE & TABLET BACKGROUND (Top Half) */}
      <div className="lg:hidden absolute top-0 inset-x-0 h-[65vh] sm:h-[70vh] z-0 overflow-hidden bg-[#FAF5F2]">
        <img
          src="/assets/dra_carolina_white_shirt.jpg"
          alt="Dra. Carolina Pitelli"
          className="hero-bg-img-mobile w-full h-full object-cover object-top opacity-100"
        />
        {/* Fade to solid cream at the bottom of the mobile photo */}
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#FAF5F2] via-[#FAF5F2]/85 via-50% to-transparent pointer-events-none" />
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full min-h-screen lg:h-screen lg:min-h-0 flex flex-col justify-end pb-10 pt-[60vh] sm:pt-[65vh] lg:py-0 lg:justify-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full h-full lg:h-auto">
          
          {/* LEFT COLUMN: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-6 text-left pr-0 lg:pr-4">
            
            {/* Main Headline */}
            <h1 className="hero-headline font-serif-brand italic text-[2.75rem] sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#1D1F1E] leading-none drop-shadow-2xs flex flex-col gap-0 sm:gap-1">
              <span className="inline-block overflow-hidden pb-1 w-full">
                <span className="hero-headline-line inline-block pr-2">Sua saúde merece</span>
              </span>
              <span className="inline-block overflow-hidden pb-1 w-full -mt-1 sm:-mt-2">
                <span className="hero-headline-line inline-block font-normal text-[#5C3327] underline decoration-[#B85D36]/40 underline-offset-8 pr-2">
                  escuta atenta, olho no olho
                </span>
              </span>
              <span className="inline-block overflow-hidden pb-1 w-full -mt-1 sm:-mt-2">
                <span className="hero-headline-line inline-block">e ciência sem modismos.</span>
              </span>
            </h1>

            {/* Subtext */}
            <p className="hero-subtext text-base sm:text-xl lg:text-2xl text-[#1D1F1E]/85 font-light leading-relaxed max-w-2xl">
              Cansada(o) de consultas rápidas e tratamentos genéricos? Na consulta com a <strong className="font-semibold text-[#5C3327]">Dra. Carolina Pitelli</strong>, investigamos a causa raiz do seu cansaço, peso e hormônios com a profundidade que você merece.
            </p>

            {/* Action CTA Buttons */}
            <div className="hero-cta-group flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#5C3327] hover:bg-[#68392C] text-[#FAF5F2] px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-medium text-sm sm:text-base transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 border border-[#B85D36]/40 cursor-pointer group"
              >
                <MessageCircle className="w-5 h-5 text-[#B85D36] group-hover:scale-110 transition-transform" />
                <span>Agendar Consulta no WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-[#EBDAD3] group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#manifesto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/90 hover:bg-white text-[#5C3327] px-6 py-3.5 sm:py-4 rounded-full font-medium text-sm sm:text-base transition-all duration-300 border border-[#5C3327]/20 shadow-md backdrop-blur-md"
              >
                <span>Nossa Metodologia</span>
              </a>
            </div>

            {/* Discretionary Medical Credentials */}
            <div className="hero-creds pt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#5C3327]/90 font-medium">
              <span className="font-semibold bg-white/85 backdrop-blur-sm px-2.5 py-1 rounded-md border border-[#5C3327]/10 shadow-2xs">CRM/SP 211.934</span>
              <span className="font-semibold bg-white/85 backdrop-blur-sm px-2.5 py-1 rounded-md border border-[#5C3327]/10 shadow-2xs">RQE 147.555</span>
              <span className="text-[#1D1F1E]/80">Consultas Presenciais & Telemedicina</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
