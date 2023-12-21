


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './component/Nav';
import GetStarted from './component/GetStarted';
import Samples from './component/Samples';
import Contact from './component/Contact';
import Pricing from './component/Pricing';
import Home from './component/Home';
import Footer from './component/Footer';


function App() {
  return (
    <Router>
      <Nav />
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
