import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';

gsap.registerPlugin(ScrollTrigger);
import Hero from './components/Hero';
import ManifestoSection from './components/ManifestoSection';
import PillarsSection from './components/PillarsSection';
import SpecialtiesSection from './components/SpecialtiesSection';
import ClinicHonosSection from './components/ClinicHonosSection';
import InstagramCarouselSection from './components/InstagramCarouselSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import FloatingWhatsapp from './components/FloatingWhatsapp';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('load', handleLoad);
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F6EFEE] font-sans-brand text-[#1D1F1E] selection:bg-[#B85D36] selection:text-white">
      {/* Fixed Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenBooking={handleOpenBooking} />
        <ManifestoSection onOpenBooking={handleOpenBooking} />
        <PillarsSection onOpenBooking={handleOpenBooking} />
        <SpecialtiesSection onOpenBooking={handleOpenBooking} />
        <ClinicHonosSection onOpenBooking={handleOpenBooking} />
        <InstagramCarouselSection />
        <FaqSection onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Floating Action Button */}
      <FloatingWhatsapp onOpenBooking={handleOpenBooking} />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
      />
    </div>
  );
}
