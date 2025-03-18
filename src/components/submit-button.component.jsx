import React from "react";

function SubmitButton({ children, onClick, marginLeft, marginRight, marginTop, marginBottom }) {
  return (
    <button 
      style={{
        color: 'white', 
        fontSize: '18px', 
        padding: '0.5rem 4rem', 
        width: '240px',
        marginLeft: marginLeft || '0px',
        marginRight: marginRight || '0px',
        marginTop: marginTop || '0px',
        marginBottom: marginBottom || '0px',
        borderRadius: '0.375rem',
        backgroundColor: '#1a5b33',
        transition: 'all 0.3s ease', 
      }} 
      className="hover:bg-green-700 font-bold rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default SubmitButton;