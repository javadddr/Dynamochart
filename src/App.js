import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './component/Nav';
import GetStarted from './component/GetStarted';
import Samples from './component/Samples';
import Contact from './component/Contact';
import Pricing from './component/Pricing';
import Home from './component/Home';
import Footer from './component/Footer';
import './App.css';

function App() {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(true);

  const handleCookiesChoice = (accept) => {
    setCookiesAccepted(accept);
    localStorage.setItem('cookies', accept ? 'true' : 'false');
    setShowCookieConsent(false);
  };

  useEffect(() => {
    const storedCookiesAccepted = localStorage.getItem('cookies');
    if (storedCookiesAccepted === 'true') {
      setCookiesAccepted(true);
      setShowCookieConsent(false);
    }
  }, []);

  return (
    <Router>
      <Nav />
      {showCookieConsent && (
        <div className="cookie-consent">
          <p>
            DynamoChart uses cookies to keep this site reliable and secure. If you select "That’s OK," you accept this and agree that we may share this information with third parties, such as our marketing partners (like Google Analytics). If you deny, we will use only the essential cookies. Unfortunately, for more information, please read our{' '}
            <a href="https://globalpackagetracker.com/policies/privacy-policy">privacy notice</a>.
          </p>
          <div className="cookie-buttons">
            <button onClick={() => handleCookiesChoice(true)}>That’s OK</button>
            <button onClick={() => handleCookiesChoice(true)}>Only Essential</button>
          </div>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/samples" element={<Samples />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
