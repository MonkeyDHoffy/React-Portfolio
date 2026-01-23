import React from 'react';

// Footer component for the portfolio
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        {/* TODO: Add social media links */}
      </div>
    </footer>
  );
};

export default Footer;