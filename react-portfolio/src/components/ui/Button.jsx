import React from 'react';

/**
 * Button renders a themed button used across the application.
 * @param {{ text: string, onClick?: () => void }} props
 * @returns {JSX.Element}
 */
let Button = ({ text, onClick }) => {
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