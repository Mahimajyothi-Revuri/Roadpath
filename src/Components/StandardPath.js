import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfilePage from './ProfilePage';

function StandardPath() {
  const [isOpen, setIsOpen] = useState(false);
    
        const toggleMenu = () => {
            setIsOpen(!isOpen);
        };
  return (
    <div className='Container'>
      <header className='header'>
        <div className='logo'>WHAT'S NEXT</div>
        <nav className='menu'>
          <button className="navbar-toggler" onClick={toggleMenu}>☰</button>
          <ul className={isOpen ? 'open' : ''}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/standard">Standard Path</Link></li>
            <li><Link to="/custom">Custom Path</Link></li>
            <li><Link to="/login"><button>Login</button></Link></li>
            <li><ProfilePage /></li>
          </ul>
        </nav>
      </header>
      
      <main className="main">
        <h2>Software Developer</h2>

        <div className="actions-container">
           <a href="#" className="small-action-link" >Print 🖨</a>
           <a href="#" className="small-action-link" >Share ➡</a>
          </div>


        <h3 className="highlight">Show my path</h3>

        <main className="main">
  <div className="path-buttons">
    <Link to="/finalpage">
      <button className="path-btn">Inter <span className="arrow">→</span></button>
    </Link>
    <Link to="/finalpage">
      <button className="path-btn">Under graduate <span className="arrow">→</span></button>
    </Link>
    <Link to="/finalpage">
      <button className="path-btn">Post graduate <span className="arrow">→</span></button>
    </Link>
  </div>
</main>


        
      </main>

      <footer className='footer'>
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Cookies</li>
          <li className="bi bi-instagram"> Instagram</li>
          <li className="bi bi-whatsapp"> WhatsApp</li>
        </ul>
      </footer>
    </div>
  );
};

export default StandardPath