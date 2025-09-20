// src/components/HeroSection.js
import React, { useState } from 'react';
import RegistrationModal from './RegistrationModel';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden bg-gradient-to-br from-indigo-900 to-slate-900">
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        <div className="relative z-20 p-6 md:p-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight" data-aos="fade-up">
            Tech & Culture Fest 2025
          </h1>
          <p className="mt-4 text-xl sm:text-2xl font-light" data-aos="fade-up" data-aos-delay="100">
            Where Innovation Meets Imagination!
          </p>
          <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Get ready for an epic fusion of brilliant minds and creative souls! Join us for an unforgettable experience!
          </p>
          <button
            onClick={handleOpenModal}
            className="mt-8 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
            data-aos="fade-up" data-aos-delay="300"
          >
            Get Your Pass
          </button>
        </div>
      </header>
      {isModalOpen && <RegistrationModal onClose={handleCloseModal} />}
    </>
  );
};
export default HeroSection;