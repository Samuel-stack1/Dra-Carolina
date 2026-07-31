import React, { useState, useRef } from 'react';
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function FaqSection({ onOpenBooking }) {
  const [openIndex, setOpenIndex] = useState(0);
  const faqRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.faq-header',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: faqRef.current, start: 'top 95%', once: true },
        clearProps: 'all',
      }
    );

    gsap.fromTo('.faq-accordion-item',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.faq-accordion-item', start: 'top 95%', once: true },
        clearProps: 'all',
      }
    );

    gsap.fromTo('.faq-support-box',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.faq-support-box', start: 'top 95%', once: true },
        clearProps: 'all',
      }
    );
  }, { scope: faqRef });

  const faqs = [
    {
      question: 'Como funciona a consulta com a Dra. Carolina Pitelli?',
      answer:
        'A consulta é conduzida com calma e escuta atenta (olho no olho). Avaliamos todo o seu histórico de saúde, sintomas de cansaço, peso, sono, rotina e exames anteriores. O objetivo é investigar a causa raiz dos desequilíbrios metabólicos em vez de tratar apenas sintomas isolados.',
    },
    {
      question: 'Dra. Carolina atende convênio ou plano de saúde?',
      answer:
        'Os atendimentos são exclusivamente particulares para garantir o tempo, a profundidade e a dedicação que uma endocrinologia de excelência exige. Fornecemos nota fiscal médica e relatório completo para que você possa solicitar o reembolso junto ao seu plano de saúde.',
    },
    {
      question: 'É possível realizar a consulta por Telemedicina (online)?',
      answer:
        'Sim! Atendemos pacientes de todas as regiões do Brasil e do exterior através de plataforma segura de Telemedicina. A solicitação de exames e receitas médicas com assinatura digital têm validade em todo o território nacional.',
    },
    {
      question: 'Quais exames devo levar na primeira consulta?',
      answer:
        'Se você tiver exames laboratoriais ou de imagem realizados nos últimos 6 meses, traga-os ou envie antes da consulta. Caso não possua exames recentes, não se preocupe: a Dra. Carolina solicitará todos os marcadores metabólicos e hormonais necessários após a avaliação inicial.',
    },
    {
      question: 'Quais são os registros profissionais da Dra. Carolina?',
      answer:
        'Dra. Carolina Pitelli é médica devidamente registrada no Conselho Regional de Medicina de São Paulo sob o CRM/SP 211.934 e especialista em Endocrinologia e Metabologia com RQE 147.555.',
    },
    {
      question: 'Como faço para agendar um horário?',
      answer:
        'O agendamento é feito de maneira rápida e direta pelo nosso WhatsApp oficial (17) 99185-0164. Nossa equipe indicará os próximos horários disponíveis de acordo com a sua preferência.',
    },
  ];

  return (
    <section ref={faqRef} id="faq" className="py-14 sm:py-24 bg-[#F6EFEE] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="faq-header text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#5C3327]/10 border border-[#5C3327]/20 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#5C3327] mb-3">
            <HelpCircle className="w-4 h-4 text-[#B85D36]" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-4xl font-semibold text-[#1D1F1E] tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-base text-[#1D1F1E]/75 font-light">
            Esclarecimentos sobre o formato de consulta, reembolso e atendimento.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="faq-accordion-item glass-card rounded-2xl border border-[#5C3327]/10 bg-white overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-3 sm:gap-4 font-serif-brand text-base sm:text-xl font-semibold text-[#5C3327] hover:text-[#B85D36] transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-[#5C3327] text-white rotate-180' : 'bg-[#5C3327]/10 text-[#5C3327]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#1D1F1E]/80 font-light leading-relaxed animate-in fade-in duration-300 border-t border-[#5C3327]/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Box */}
        <div className="faq-support-box mt-10 sm:mt-12 text-center p-6 sm:p-8 rounded-3xl bg-[#FAF5F2] border border-[#5C3327]/10 space-y-4">
          <p className="text-sm text-[#1D1F1E]/80 font-light">
            Ainda tem alguma dúvida específica sobre o atendimento?
          </p>
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#5C3327] hover:bg-[#68392C] text-white px-6 py-3.5 rounded-full text-sm font-medium transition-all shadow-md cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#B85D36]" />
            <span>Falar com a equipe no WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
}
