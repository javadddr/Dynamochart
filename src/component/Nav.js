import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'; // Import the CSS file
import logom from "../res/logot.png"
import burgerIcon from '../res/menu-burger.png'; // Adjust the path as necessary

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div >
      <header className="dynamo-homepage">
        <NavLink to="/">
          <img src={logom} alt="DYNAMOCHART Logo" className="navbar-logodyoo" />
        </NavLink>
        
        <img src={burgerIcon} alt="Menu" className="hamburger" onClick={toggleMenu} />
     

        <nav className={isMenuOpen ? 'active' : ''}>
        <ul className='navuloip'>
            <li><NavLink to="/" className="button3" onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/get-started" className="button1" onClick={closeMenu}>Get Started</NavLink></li>
            <li><NavLink to="/samples" className="button2" onClick={closeMenu}>View Samples</NavLink></li>
            <li><NavLink to="/pricing" className="button4" onClick={closeMenu}>Pricing</NavLink></li>
            <li><NavLink to="/contact" className="button5" onClick={closeMenu}>Contact</NavLink></li>
          </ul>
        </nav>
    
      </header>
     
    </div>
  );
};

export default Nav;
