import React from 'react';

const WhatsappIcon = ({ className = "w-7 h-7" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.285-.143-1.689-.834-1.951-.929-.262-.095-.453-.143-.644.143-.19.285-.737.929-.904 1.119-.167.19-.333.214-.618.071-.285-.143-1.204-.444-2.294-1.416-.848-.756-1.421-1.689-1.587-1.974-.167-.285-.018-.439.125-.581.129-.128.285-.333.428-.5.143-.167.19-.285.285-.476.095-.19.048-.357-.024-.5-.071-.143-.644-1.552-.882-2.124-.232-.558-.468-.482-.644-.491l-.547-.01c-.19 0-.499.071-.76.357-.261.285-.998.976-.998 2.38 0 1.404 1.022 2.76 1.165 2.951.143.19 2.012 3.073 4.876 4.308.681.294 1.213.469 1.628.601.684.218 1.306.187 1.798.114.548-.081 1.689-.69 1.927-1.356.238-.666.238-1.237.167-1.356-.07-.119-.261-.19-.546-.333z"/>
  </svg>
);

export default function FloatingWhatsapp({ onOpenBooking }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip badge - Fixed, no bounce */}
      <div className="hidden md:flex items-center gap-2 bg-[#1D1F1E]/90 text-white px-4 py-2.5 rounded-full text-xs font-medium backdrop-blur-md border border-white/10 shadow-xl">
        <span className="w-2 h-2 rounded-full bg-emerald-400" />
        <span>Agendar com Dra. Carolina</span>
      </div>

      {/* Floating Button - Fixed, no ping animation, official WhatsApp SVG */}
      <button
        onClick={onOpenBooking}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl transition-all duration-300 border-2 border-white cursor-pointer group relative"
        aria-label="Falar no WhatsApp com a Dra. Carolina Pitelli"
      >
        <WhatsappIcon className="w-7 h-7 text-white" />
      </button>
    </div>
  );
}
