import React from 'react';

// This is a reusable Button component that can be styled and used throughout the application.
const Button = ({ text, onClick }) => {
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;