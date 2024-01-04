import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Footer.css';
import logop from '../res/logo5.png'; // Ensure the correct path to your logo

const Footer = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleLogoClick = () => {
    navigate('/'); // Navigate to home page on logo click
  };

  return (
    <footer className="footer">
      <div className='justloagb'>
      <img 
        src={logop} 
        alt="Logo" 
        className="footer-logo" 
        onClick={handleLogoClick} // Add onClick event for logo
      />
<div className="footer-links">
        <Link to="https://globalpackagetracker.com/policies/impressum" className="footer-link">Impressum</Link>
        <Link to="https://globalpackagetracker.com/policies/privacy-policy" className="footer-link">Privacy Policy</Link>
        <Link to="https://globalpackagetracker.com/policies/terms-of-service" className="footer-link">Terms of Service</Link>
        <Link to="https://globalpackagetracker.com/policies/legal-notice" className="footer-link">Legal Notice</Link>
      </div>
      <div className="footer-copy">
        ©2023 DynamoChart UG
      </div>
      </div>
      <div className="footer-company-info">
        <h1>DynamoChart UG</h1>
        <p>Holzheimer Weg 11</p>
        <p>41464 Neuss, Deutschland</p>
        <p>Internet: <a href="https://DynamoChart.com/" className="footer-link">DynamoChart.com</a></p>
        <p>Contact: <a href="mailto:Hello@DynamoChart.com" className="footer-link">Hello@DynamoChart.com</a></p>
        <p>Sitz der Gesellschaft/Registered office:<span> Neuss</span></p>
        <p>Eintragung/Commercial Register:<span> Amtsgericht Neuss HRB 23027</span></p>
        <p>VAT identification number (USt-ID):<span> DE361618143</span></p>
        <p>Geschäftsführung/Managing Directors:<span> Javad Khalil Arjmandi</span></p>
      </div>
      
      

      
    </footer>
  );
};

export default Footer;
