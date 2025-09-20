// src/App.js

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS
import HeroSection from './components/HeroSection';
import FestivalDescription from './components/FestivalDescription';
import GuestBios from './components/GuestBios';
import ContactPage from './components/ContactPage';
import SchedulePage from './components/SchedulePage';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="bg-gray-900 text-gray-100 font-sans min-h-screen">
      <nav className="fixed top-0 w-full bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-md p-4 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-indigo-400">T&C Fest</a>
          <div className="space-x-4">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a>
            <a href="#events" className="text-gray-300 hover:text-white transition-colors duration-200">Events</a>
            <a href="#guests" className="text-gray-300 hover:text-white transition-colors duration-200">Guests</a>
            <a href="#schedule" className="text-gray-300 hover:text-white transition-colors duration-200">Schedule</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="events" className="scroll-mt-16">
          <FestivalDescription />
        </section>
        <section id="guests" className="scroll-mt-16">
          <GuestBios />
        </section>
        <section id="schedule" className="scroll-mt-16">
          <SchedulePage />
        </section>
        <section id="contact" className="scroll-mt-16">
          <ContactPage />
        </section>
      </main>
      <footer className="py-8 text-center text-gray-400">
        &copy; 2025 Tech & Culture Fest. All rights reserved.
      </footer>
    </div>
  );
}
export default App;