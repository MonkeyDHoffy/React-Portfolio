import React from 'react';

// Matches Contact field markup for input or textarea without behavior changes.
const FormField = ({
  label,
  type = 'text',
  textarea = false,
  rows,
  ...props
}) => {
  const labelClass =
    'font-firacode block text-secondary text-sm mb-2';

  const inputClass =
    'font-karla w-full bg-transparent border-b border-secondary focus:border-secondary outline-none py-2 text-white placeholder-gray-500 hover:placeholder-white transition-colors';

  return (
    <div>
      <label className={labelClass}>{label}</label>

      {textarea ? (
        <textarea
          rows={rows}
          className={`${inputClass} resize-none`}
          {...props}
        />
      ) : (
        <input
          type={type}
          className={inputClass}
          {...props}
        />
      )}
    </div>
  );
};

export default FormField;
