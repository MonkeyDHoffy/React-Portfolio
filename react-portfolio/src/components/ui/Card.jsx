import React from 'react';

/**
 * Card displays an image with title and description content.
 * @param {{ title: string, description: string, image?: string }} props
 * @returns {JSX.Element}
 */
let Card = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Card;