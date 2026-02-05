import React from 'react';

// Matches Contact field markup for input or textarea without behavior changes.
const FormField = ({ label, type = 'text', placeholder, rows, textarea = false }) => {
  const labelClass = 'font-firacode block text-secondary text-sm mb-2';
  const inputClass = 'font-karla w-full bg-transparent border-b border-secondary focus:border-secondary outline-none py-2 text-white placeholder-gray-500 hover:placeholder-white transition-colors';

  return (
    <div>
      <label className={labelClass}>{label}</label>
      {textarea ? (
        <textarea
          rows={rows}
          placeholder={placeholder}
          className={`${inputClass} resize-none`}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={inputClass}
        />
      )}
    </div>
  );
};

export default FormField;
