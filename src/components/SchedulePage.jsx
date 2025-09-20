// src/components/SchedulePage.js

import React from 'react';

const eventSchedule = [
  {
    day: 1,
    time: '9:00 AM - 10:00 AM',
    title: 'Opening Ceremony',
    description: 'The official start of Tech & Culture Fest 2025 with an address from our esteemed guests and a keynote speech.',
    type: 'General',
  },
  {
    day: 1,
    time: '10:00 AM - 1:00 PM',
    title: 'Hackathon Kickoff',
    description: 'Code Fiesta Hackathon begins. Teams get their problem statements and start their 24-hour coding sprint.',
    type: 'Technical',
  },
  {
    day: 1,
    time: '1:00 PM - 2:00 PM',
    title: 'Lunch Break',
    description: 'Refuel at the Food Carnival with a variety of delicious options.',
    type: 'General',
  },
  {
    day: 1,
    time: '2:00 PM - 5:00 PM',
    title: 'Electrica Circuit Challenge',
    description: 'A hands-on challenge for electrical engineers to design and debug complex circuits.',
    type: 'Technical',
  },
  {
    day: 1,
    time: '5:00 PM - 7:00 PM',
    title: 'Chermis E-Sports Prelims',
    description: 'BGMI, Free Fire, and Chess preliminary rounds begin. Teams battle for a spot in the finals.',
    type: 'Gaming',
  },
  {
    day: 1,
    time: '7:00 PM onwards',
    title: 'Cultural Night Auditions',
    description: 'Participants showcase their talents in dance, music, and drama for a chance to perform on the main stage.',
    type: 'Cultural',
  },
  {
    day: 2,
    time: '9:00 AM - 11:00 AM',
    title: 'Mechanica Contraption Challenge',
    description: 'Teams build and demonstrate their contraptions, testing their mechanical design and engineering skills.',
    type: 'Technical',
  },
  {
    day: 2,
    time: '11:00 AM - 1:00 PM',
    title: 'Chemica Race',
    description: 'Chem-E-Car teams compete in a thrilling race powered by chemical reactions.',
    type: 'Technical',
  },
  {
    day: 2,
    time: '1:00 PM - 2:00 PM',
    title: 'Lunch Break',
    description: 'Take a break and enjoy a wide range of food and beverages.',
    type: 'General',
  },
  {
    day: 2,
    time: '2:00 PM - 5:00 PM',
    title: 'Hackathon Finals',
    description: 'The top hackathon teams present their final applications to a panel of judges.',
    type: 'Technical',
  },
  {
    day: 2,
    time: '5:00 PM - 7:00 PM',
    title: 'Chermis Finals',
    description: 'The final showdown for our E-Sports championships. Who will be crowned champion?',
    type: 'Gaming',
  },
  {
    day: 2,
    time: '7:00 PM onwards',
    title: 'Grand Cultural Night & Closing Ceremony',
    description: 'The grand finale featuring top performances and the prize distribution ceremony.',
    type: 'Cultural',
  },
];

const SchedulePage = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen pt-24 pb-8 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-white mb-8" data-aos="fade-up">Event Schedule</h2>
        
        <div className="relative">
          <div className="absolute left-1/2 w-1 h-full bg-indigo-500 transform -translate-x-1/2 hidden md:block" data-aos="fade-in"></div>
          
          {eventSchedule.map((event, index) => (
            <div
              key={index}
              className={`mb-8 flex ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center w-full`}
              data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
              data-aos-delay={index * 50}
            >
              <div className="w-full md:w-1/2 p-4 z-10">
                <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition-colors duration-200">
                  <span className={`inline-block px-3 py-1 mb-2 text-xs font-semibold rounded-full ${
                    event.type === 'Technical' ? 'bg-blue-500' :
                    event.type === 'Gaming' ? 'bg-green-500' :
                    event.type === 'Cultural' ? 'bg-purple-500' :
                    'bg-gray-500'
                  }`}>
                    {event.type}
                  </span>
                  <h3 className="text-xl font-bold text-white">{event.title}</h3>
                  <p className="text-sm text-gray-400">{event.time}</p>
                  <p className="mt-2 text-gray-300">{event.description}</p>
                </div>
              </div>
              <div className="hidden md:block w-1/2 p-4 text-center z-10">
                <span className="bg-indigo-500 text-white w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold">
                  {event.day}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;