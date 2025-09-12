import React from 'react';
import { FaPhone } from 'react-icons/fa';

export const CallButton: React.FC = () => {
  const phoneNumber = '+2348141701932'; 

  const handleClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#000', 
        border: 'none',
        borderRadius: '50%',
        padding: '16px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
        zIndex: 1000,
        cursor: 'pointer',
      }}
      aria-label="Call us"
    >
      <FaPhone size={24} color="#fff" />
    </button>
  );
};