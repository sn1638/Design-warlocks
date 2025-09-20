
import React from 'react';

const GuestBios = () => {
  const guests = [
    {
      name: "Hitesh chaudhary",
      title: "Youtuber, Educator & Developer",
      bio: "Hitesh chaudhary is a leading voice in software development and a very good teacher of modern technologies. he will be sharing his journey and insights on the future of software development."
    },
    {
      name: "DJ K-Rhythm (Kiran Rao)",
      title: "Platinum-Selling Producer",
      bio: "Known for his high-energy sets and genre-bending beats, DJ K-Rhythm has toured the world and produced tracks for some of the biggest names in music. He'll be closing out our main stage with a performance you won't want to miss."
    },
    {
      name: "Ankit Verma",
      title: "Head Chef at The Fusion Kitchen",
      bio: "Chef Ankit has taken the culinary world by storm with his unique blend of traditional flavors and modern techniques. Join him for a live cooking demo and a taste of his incredible creations."
    }
  ];

  return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900/95 to-slate-900/95">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12" data-aos="fade-up">Meet Our Guests</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {guests.map((guest, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
              data-aos="fade-up" // Animation type
              data-aos-delay={index * 150} // Staggered delay for each card
            >
              <div className="h-24 w-24 rounded-full bg-indigo-500 flex items-center justify-center text-3xl font-bold mb-4">
                {guest.name.charAt(0)}
              </div>
              <h3 className="text-xl font-semibold text-indigo-400">{guest.name}</h3>
              <p className="text-sm text-gray-400 mb-4">{guest.title}</p>
              <p className="text-gray-300">{guest.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestBios;