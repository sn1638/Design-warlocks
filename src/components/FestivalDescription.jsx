// src/components/FestivalDescription.js

import React, { useState } from 'react';

// Reusable registration form component
const EventRegistrationForm = ({ eventName, isTeamEvent, onRegister, onCancel }) => {
  const [teamSize, setTeamSize] = useState(1);
  const [formData, setFormData] = useState([{ email: '', regNumber: '' }]);
  const [errors, setErrors] = useState([]);

  const validate = () => {
    let newErrors = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regNumberRegex = /^\d{7}$/;

    formData.forEach((member, index) => {
      let memberErrors = {};
      if (!member.email) {
        memberErrors.email = "Email is required.";
      } else if (!member.email.endsWith('@sliet.ac.in')) {
        memberErrors.email = "Please use a valid college email.";
      } else if (!emailRegex.test(member.email)) {
        memberErrors.email = "Invalid email format.";
      }

      if (!member.regNumber) {
        memberErrors.regNumber = "Registration number is required.";
      } else if (!regNumberRegex.test(member.regNumber)) {
        memberErrors.regNumber = "Must be exactly 7 digits.";
      }
      newErrors[index] = memberErrors;
    });

    setErrors(newErrors);
    const hasErrors = newErrors.some(err => Object.keys(err).length > 0);
    return !hasErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`You have successfully registered for ${eventName}!`);
      onRegister();
    }
  };
  
  const handleTeamSizeChange = (e) => {
    const size = parseInt(e.target.value, 10);
    if (size >= 1 && size <= 3) {
        setTeamSize(size);
        setFormData(Array.from({ length: size }, () => ({ email: '', regNumber: '' })));
    }
  };

  const handleMemberChange = (index, field, value) => {
    const newFormData = [...formData];
    newFormData[index][field] = value;
    setFormData(newFormData);
  };

  return (
    <div className="relative bg-gradient-to-br from-indigo-900 to-slate-900 p-6 mt-4 rounded-lg shadow-inner ">
      <h4 className="text-xl font-semibold mb-4 text-white">Register for {eventName}</h4>
      <form onSubmit={handleSubmit} className="space-y-4">
        {isTeamEvent && (
          <div>
            <label htmlFor="teamSize" className="block text-sm font-medium text-gray-300">Number of Team Members (1-3)</label>
            <input
              type="number"
              id="teamSize"
              value={teamSize}
              onChange={handleTeamSizeChange}
              className="mt-1 block w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-md text-white"
              min="1"
              max="3"
            />
          </div>
        )}

        {formData.map((member, index) => (
          <div key={index} className="bg-gray-600 p-4 rounded-md">
            <h5 className="text-lg font-bold mb-2">Member {index + 1}</h5>
            <div>
              <label htmlFor={`email-${index}`} className="block text-sm font-medium text-gray-300">College Email</label>
              <input
                type="email"
                id={`email-${index}`}
                name="email"
                value={member.email}
                onChange={(e) => handleMemberChange(index, 'email', e.target.value)}
                className="mt-1 block w-full px-4 py-2 bg-gray-500 border border-gray-400 rounded-md text-white"
                placeholder="e.g., 2341008@sliet.ac.in"
              />
              {errors[index]?.email && <p className="text-red-400 text-sm mt-1">{errors[index].email}</p>}
            </div>
            <div>
              <label htmlFor={`regNumber-${index}`} className="block text-sm font-medium text-gray-300 mt-2">Registration Number</label>
              <input
                type="text"
                id={`regNumber-${index}`}
                name="regNumber"
                value={member.regNumber}
                onChange={(e) => handleMemberChange(index, 'regNumber', e.target.value)}
                className="mt-1 block w-full px-4 py-2 bg-gray-500 border border-gray-400 rounded-md text-white"
                placeholder="e.g., 2341008"
              />
              {errors[index]?.regNumber && <p className="text-red-400 text-sm mt-1">{errors[index].regNumber}</p>}
            </div>
          </div>
        ))}

        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-gray-500 text-gray-300 rounded-md hover:bg-gray-600 transition duration-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-200"
          >
            Register Now
          </button>
        </div>
      </form>
    </div>
  );
};


const FestivalDescription = () => {
  const [activeEvent, setActiveEvent] = useState(null);

  const events = [
    { id: 'electrica', title: 'Electrica', description: 'Power up your skills in our electrical engineering challenges. From circuit design to robotics, this event is all about innovation.', isTeamEvent: true },
    { id: 'chemica', title: 'Chemica', description: 'Explore the world of chemical processes and material science. Compete in our Chem-E-Car race and showcase your knowledge of chemical engineering.', isTeamEvent: true },
    { id: 'mechanica', title: 'Mechanica', description: 'Put your mechanical skills to the test in events like CAD design competitions and a contraption challenge. This event is a true test of engineering ingenuity.', isTeamEvent: true },
    { id: 'cultural_night', title: 'Cultural Night', description: 'Showcase your talent on stage! From mesmerizing dance routines to soulful singing, this is the ultimate platform for cultural expression. A solo event.', isTeamEvent: false },
    { id: 'chermis', title: 'Chermis E-Sports Fest', description: 'Battle it out in our grand e-sports tournament! Featuring top titles like BGMI, Free Fire, and a strategic Chess tournament. All events are for teams.', isTeamEvent: true },
    { id: 'hackathon', title: 'Code Fiesta Hackathon', description: 'A 24-hour coding challenge where teams race to build the next big app. Form your team now!', isTeamEvent: true },
    { id: 'robotics', title: 'Robotics Workshop', description: 'Dive into the world of robotics and learn to program a bot. No team required, just a passion for tech!', isTeamEvent: false },
    { id: 'music', title: 'Synesthesia Music Night', description: 'Experience a fusion of electronic music and live visuals. An immersive, solo experience.', isTeamEvent: false },
  ];

  const handleRegisterClick = (eventId) => {
    setActiveEvent(eventId);
  };

  const handleCancelClick = () => {
    setActiveEvent(null);
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-800 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-aos="fade-up">What's Happening?</h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Explore our wide range of events, from technical competitions to cultural performances.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <div 
              key={event.id} 
              className="bg-gray-700 bg-opacity-80 backdrop-filter backdrop-blur-sm p-6 rounded-lg shadow-lg"
              data-aos="fade-up" // Animation type
              data-aos-delay={index * 100} // Staggered delay for each card
            >
              <h3 className="text-2xl font-semibold mb-2 text-indigo-400">{event.title}</h3>
              <p className="text-gray-300 mb-4">{event.description}</p>
              {activeEvent === event.id ? (
                <EventRegistrationForm
                  eventName={event.title}
                  isTeamEvent={event.isTeamEvent}
                  onRegister={handleCancelClick}
                  onCancel={handleCancelClick}
                />
              ) : (
                <button
                  onClick={() => handleRegisterClick(event.id)}
                  className="w-full mt-4 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
                >
                  Register
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FestivalDescription;