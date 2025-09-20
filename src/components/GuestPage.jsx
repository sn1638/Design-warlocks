import React from 'react';
import GuestBios from './GuestBios'; // Assuming you want to reuse this component

const GuestsPage = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <GuestBios />
      </div>
    </div>
  );
};

export default GuestsPage;