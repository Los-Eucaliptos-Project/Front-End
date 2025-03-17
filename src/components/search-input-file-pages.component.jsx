import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchInputFilePages({ type, placeholder, value, onChange, children, icon }) {
  const inputStyle = {
    width: '100%',
    padding: '0.5rem 2.5rem 0.5rem 2.5rem',
    border: '1px solid rgba(97, 148, 226, 0.7)',
    borderRadius: '0.375rem',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.3s ease',
    backgroundColor: '#dae9f6',
  };

  const inputFocusStyle = {
    borderColor: '#dde5ec',
    boxShadow: '0 0 0 2px rgba(101, 164, 216, 0.36)',
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = inputFocusStyle.borderColor;
    e.target.style.boxShadow = inputFocusStyle.boxShadow;
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = '#D1D5DB';
    e.target.style.boxShadow = 'none';
  };

  const iconStyle = {
    position: 'absolute',
    left: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: 'gray',
  };

  return (
    <div style={{ position: 'relative' }}>
      {children && (
        <label
          style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: 'bold',
            color: 'darkblue',
            textAlign: 'left',
          }}
          className="text-xl mb-6"
        >
          {children}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={inputStyle}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <FontAwesomeIcon icon={faSearch} style={iconStyle} /> {/* Agrega el icono */}

      <style>
        {`
          @media (max-width: 600px) {
            input {
              padding: 0.5rem 2.5rem 0.5rem 2.5rem;
              font-size: 0.9rem;
            }
          }
        `}
      </style>
    </div>
  );
}

export default SearchInputFilePages;