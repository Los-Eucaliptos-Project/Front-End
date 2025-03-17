import React from 'react';

function FormLogo({ width, height, marginLeft }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src="/src/assets/images/logo-los-eucaliptos.png"
        alt="Logo de la empresa"
        width={width}
        height={height}
        style={{
          marginLeft: marginLeft,
          marginRight: 'auto',
          maxWidth: '100%',
          height: 'auto',
        }}
      />
      <style>
        {`
          @media (max-width: 290px) {
            img {
              width: 80%;
              height: auto;
            }
          }
        `}
      </style>
    </div>
  );
}

export default FormLogo;
