import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Menu, X, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.9,
    })
      .from(
        '.nav-logo',
        {
          scale: 0.85,
          opacity: 0,
          duration: 0.6,
        },
        '-=0.5'
      )
      .from(
        '.nav-link-item',
        {
          y: -15,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
        },
        '-=0.4'
      )
      .from(
        '.nav-cta-btn',
        {
          scale: 0.9,
          opacity: 0,
          duration: 0.5,
        },
        '-=0.3'
      );
  }, { scope: navRef });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Endocrinologia Raiz', href: '#manifesto' },
    { name: 'Nossos Pilares', href: '#pilares' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Clínica Honos', href: '#clinica' },
  ];

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-0 ${
        scrolled
          ? 'bg-[#FAF5F2]/90 backdrop-blur-md py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official Brand Logo */}
          <a href="#" className="nav-logo flex items-center group py-1">
            <img
              src="/assets/logo_carolina_pitelli_horizontal.png"
              alt="Dra. Carolina Pitelli Endocrinologista Logo Oficial"
              className="h-8 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Clean Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link-item text-sm font-medium text-[#1D1F1E]/80 hover:text-[#5C3327] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B85D36] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Sleek CTA Button */}
          <div className="nav-cta-btn hidden sm:flex items-center">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-[#5C3327] hover:bg-[#68392C] text-[#FAF5F2] px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-[#B85D36]/40 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#B85D36]" />
              <span>Agendar Consulta</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="sm:hidden p-2 rounded-full bg-[#5C3327] text-[#FAF5F2] hover:bg-[#68392C]"
              aria-label="Agendar via WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#B85D36]" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1D1F1E] hover:bg-[#68392C]/10 transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#5C3327]" /> : <Menu className="w-6 h-6 text-[#1D1F1E]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF5F2] border-t border-[#68392C]/10 py-6 px-6 shadow-2xl mt-3 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-4">
            <div className="pb-3 border-b border-[#68392C]/10 flex items-center justify-between">
              <img
                src="/assets/logo_carolina_pitelli_horizontal.png"
                alt="Dra. Carolina Pitelli Logo"
                className="h-7 w-auto object-contain"
              />
              <span className="text-xs text-[#5C3327] font-medium">CRM/SP 211.934</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#1D1F1E] hover:text-[#5C3327] flex items-center justify-between py-2 border-b border-[#68392C]/5"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#B85D36]" />
              </a>
            ))}

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#5C3327] text-white py-3 rounded-xl font-medium shadow-md"
              >
                <MessageCircle className="w-5 h-5 text-[#B85D36]" />
                <span>Agendar Consulta pelo WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
