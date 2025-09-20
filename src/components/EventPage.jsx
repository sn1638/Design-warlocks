import React from 'react';
import FestivalDescription from './FestivalDescription'; // Assuming you want to reuse this component

const EventsPage = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Festival Events</h1>
        <p className="text-lg text-center text-gray-400">
          Explore all the amazing tech and cultural events happening at the fest!
        </p>
        <FestivalDescription />
      </div>
    </div>
  );
};

export default EventsPage;