import React, { useRef } from 'react';
import { MessageCircle, MapPin, ShieldCheck, Phone, ArrowUp } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Footer({ onOpenBooking }) {
  const footerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.footer-content > div',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 95%',
          once: true,
        },
        clearProps: 'all',
      }
    );
  }, { scope: footerRef });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={footerRef} className="bg-[#1D1F1E] text-[#ECE3D8] pt-16 pb-12 relative overflow-hidden border-t border-white/10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="footer-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img loading="lazy"
                src="/assets/logo_carolina_pitelli_vertical.png"
                alt="Dra. Carolina Pitelli Logo Oficial"
                className="h-16 w-auto object-contain invert"
              />
            </div>

            <p className="text-sm text-[#ECE3D8]/70 font-light max-w-md leading-relaxed">
              Resgatando a medicina humanizada, a escuta atenta, olho no olho e o tratamento metabólico embasado na ciência de verdade, sem modismos.
            </p>

            <div className="flex items-center gap-3 text-xs text-[#9DAA9E] pt-2">
              <ShieldCheck className="w-4 h-4 text-[#B85D36]" />
              <span>CRM/SP 211.934 • RQE 147.555</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-brand text-lg font-semibold text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-[#ECE3D8]/80 font-light">
              <li>
                <a href="#manifesto" className="hover:text-[#B85D36] transition-colors">Endocrinologia Raiz</a>
              </li>
              <li>
                <a href="#pilares" className="hover:text-[#B85D36] transition-colors">Os 4 Pilares</a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-[#B85D36] transition-colors">Especialidades</a>
              </li>
              <li>
                <a href="#clinica" className="hover:text-[#B85D36] transition-colors">Clínica Honos</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#B85D36] transition-colors">Dúvidas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif-brand text-lg font-semibold text-white mb-4">
              Contato & Local
            </h4>

            <div className="space-y-3 text-sm text-[#ECE3D8]/80">
              <button
                onClick={onOpenBooking}
                className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer text-left w-full"
              >
                <div className="w-8 h-8 rounded-lg bg-[#5C3327] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#B85D36]" />
                </div>
                <div>
                  <p className="text-xs text-[#9DAA9E]">WhatsApp Oficial</p>
                  <p className="font-semibold text-white">(17) 99228-5084</p>
                </div>
              </button>

              <a
                href="https://instagram.com/dracarolinapitelli"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#5C3327] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#B85D36] fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[#9DAA9E]">Instagram</p>
                  <p className="font-semibold text-white">@dracarolinapitelli</p>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#5C3327] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#B85D36]" />
                </div>
                <div>
                  <p className="text-xs text-[#9DAA9E]">Atendimento Presencial</p>
                  <p className="font-semibold text-white">Clínica Honos</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Legal Rights & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#ECE3D8]/50">
          <p>
            © {new Date().getFullYear()} Dra. Carolina Pitelli — Endocrinologista CRM/SP 211.934 | RQE 147.555. Todos os direitos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-4 h-4 text-[#B85D36]" />
          </button>
        </div>

      </div>
    </footer>
  );
}

