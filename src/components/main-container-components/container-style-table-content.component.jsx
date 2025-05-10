import React from 'react';

const containerStyle = {
  minHeight: '100vh',
  minWidth: '90vh',
};

function ContainerStyleTableContent({ children }) {
  return (
    <div style={containerStyle}>
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  );
}

export default ContainerStyleTableContent;