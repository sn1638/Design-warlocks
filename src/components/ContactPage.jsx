// src/components/ContactPage.js

import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    recipient: 'general', // Default recipient
    name: '',
    email: '',
    message: '',
  });

  const coordinators = [
    {
      title: 'Fest Coordinator',
      name: 'Riya Sharma',
      phone: '+91 98765 43210',
      email: 'coordinator@techculturefest.edu',
    },
    {
      title: 'Sponsorship Lead',
      name: 'Amit Singh',
      phone: '+91 91234 56789',
      email: 'sponsorship@techculturefest.edu',
    },
    {
      title: 'Technical Events Head',
      name: 'Vivek Jain',
      phone: '+91 87654 32109',
      email: 'tech@techculturefest.edu',
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would send the data to a backend endpoint.
    // The 'formData.recipient' value can be used to route the message correctly.
    alert(`Your message has been sent to the ${formData.recipient} team. We will get back to you soon.`);
    setFormData({
      recipient: 'general',
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen pt-24 pb-8 flex flex-col items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-4xl flex flex-col md:flex-row gap-8">
        {/* Contact Information Section */}
        <div className="md:w-1/2" data-aos="fade-up" data-aos-delay="50">
          <h2 className="text-2xl font-bold text-white mb-4">Core Team Contacts</h2>
          <p className="text-gray-400 mb-6">For direct inquiries, feel free to reach out to our team leaders.</p>
          <div className="space-y-4">
            {coordinators.map((coord, index) => (
              <div key={index} className="border border-gray-700 p-4 rounded-md" data-aos="fade-up" data-aos-delay={100 + index * 50}>
                <h3 className="text-lg font-semibold text-indigo-400">{coord.title}</h3>
                <p className="text-gray-300">{coord.name}</p>
                <p className="text-sm text-gray-400">Phone: {coord.phone}</p>
                <p className="text-sm text-gray-400">Email: {coord.email}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Messaging Form Section */}
        <div className="md:w-1/2" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-2xl font-bold text-white mb-4">Send Us a Message</h2>
          <p className="text-gray-400 mb-6">Use the form below to send a message to the relevant department.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="recipient" className="block text-sm font-medium text-gray-300">Send to</label>
              <select
                id="recipient"
                name="recipient"
                value={formData.recipient}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring focus:ring-indigo-500"
              >
                <option value="general">General Inquiry</option>
                <option value="sponsorship">Sponsorship & Partnership</option>
                <option value="tech">Technical Events</option>
                <option value="culture">Cultural Events</option>
              </select>
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring focus:ring-indigo-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;