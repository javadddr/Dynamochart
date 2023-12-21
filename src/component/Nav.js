import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'; // Import the CSS file
import logom from "../res/logot.png"
const Nav = () => {
  return (
    <div className="chartjs-homepage">
      <header>
     
        <NavLink to="/">
          <img src={logom} alt="DYNAMOCHART Logo" className="navbar-logo"  />
        </NavLink>
        <nav>
          <ul>
          <li><NavLink to="/"  className="button3">Home</NavLink></li>
            <li><NavLink to="/get-started"  className="button1">Get Started</NavLink></li>
            <li><NavLink to="/samples" className="button2">View Samples</NavLink></li>
            <li><NavLink to="/pricing" className="button4">Pricing</NavLink></li>
            <li><NavLink to="/contact" className="button5">ontact</NavLink></li>
          </ul>
        </nav>
      </header>
     
    </div>
  );
};

export default Nav;
