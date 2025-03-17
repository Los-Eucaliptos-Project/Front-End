import React from 'react';

function FormTextAreaField({ label, id, value, onChange, placeholder}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <textarea id={id}
       value={value}
       onChange={onChange}
       placeholder={placeholder}
       style={{ width: '100%', height: '100px' }} />
    </div>
  );
}

export default FormTextAreaField;