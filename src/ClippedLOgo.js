
import React from 'react';
import logo from './images/acm-chennai-logo.png'; // Import the logo
import './App.css'; // Import the CSS file if needed for styling

const ClippedLogo = () => {
  return (
    <div className="clipped-logo-container">
      <img src={logo} alt="ACMC Chapter logo for VIT Chennai" className="clipped-logo" />
    </div>
  );
};

export default ClippedLogo;
