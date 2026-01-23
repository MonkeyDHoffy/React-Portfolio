import React from 'react';

// Hero component for the portfolio
const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-blue-500 text-white">
      <h1 className="text-5xl font-bold mb-4">Hello, I'm [Your Name]</h1>
      <p className="text-lg mb-8">I'm a [Your Profession/Role]. Welcome to my portfolio!</p>
      <button className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-gray-200">
        // TODO: Add functionality to this button (e.g., scroll to About section)
        Learn More
      </button>
    </section>
  );
};

export default Hero;