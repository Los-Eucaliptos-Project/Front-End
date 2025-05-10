import React, { useState } from 'react';

const FormLink = ({ children, href }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const linkStyle = {
    fontSize: '0.875rem',
    color: isClicked ? '#6B7280' : (isHovered ? '#0a0a0a' : '#6B7280'), 
    textDecoration: 'underline',
    textDecorationColor: '#6B7280',
    marginLeft: '124px',
    transition: 'color 0.3s ease',
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <a
      href={href}
      style={linkStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}
      
      <style>
        {`
          @media (max-width: 600px) {
            a {
              margin-left: 10px;
              font-size: 0.8rem;
            }
          }
        `}
      </style>
    </a>
  );
};

export default FormLink;
