// src/components/RegistrationModal.js

import React, { useState } from 'react';

const RegistrationModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [regNumber, setRegNumber] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regNumberRegex = /^\d{7}$/; 

    if (!email) {
      newErrors.email = "College email is required.";
    } else if (!email.endsWith('@sliet.ac.in')) {
      newErrors.email = "Please use your official college email.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!regNumber) {
      newErrors.regNumber = "Registration number is required.";
    } else if (!regNumberRegex.test(regNumber)) {
      // The error message for invalid registration number
      newErrors.regNumber = "Invalid registration number: must be exactly 7 digits.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate an API call or form submission
      setTimeout(() => {
        alert(`Registration successful!\nEmail: ${email}\nReg. No.: ${regNumber}`);
        setIsSubmitting(false);
        onClose(); // Close the modal
      }, 1500);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-lg w-full relative transform transition-all duration-300 scale-100">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white transition duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        <h2 className="text-2xl font-bold text-center text-white mb-6">Get Your Pass</h2>
        <p className="text-gray-400 text-center mb-6">
          Please enter your details to register for the Tech & Culture Fest.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">College Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring focus:ring-indigo-500"
              placeholder="e.g. 2341008@sliet.ac.in"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="regNumber" className="block text-sm font-medium text-gray-300">Registration Number</label>
            <input
              type="text"
              id="regNumber"
              value={regNumber}
              onChange={(e) => setRegNumber(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring focus:ring-indigo-500"
              placeholder="e.g. 2341008"
            />
            {errors.regNumber && (
              <p className="text-red-400 text-sm mt-1">{errors.regNumber}</p>
            )}
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-300 disabled:bg-indigo-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Registering...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;