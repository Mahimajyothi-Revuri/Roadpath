import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PathPage.css';
import ProfilePage from './ProfilePage';

const PathPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPath, setSelectedPath] = useState(localStorage.getItem('selectedPath') || ''); // Retrieve from localStorage if exists
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Save the selected path to localStorage whenever it changes
  const handlePathSelect = (path) => {
    setSelectedPath(path);
    localStorage.setItem('selectedPath', path); // Save to localStorage
  };

  // UseEffect to load the selected path when component is mounted
  useEffect(() => {
    const pathFromLocalStorage = localStorage.getItem('selectedPath');
    if (pathFromLocalStorage) {
      setSelectedPath(pathFromLocalStorage); // Initialize with stored path
    }
  }, []);

  return (
    <div className="Container">
      <header className="header">
        <div className="logo">WHAT'S NEXT</div>
        <nav className="menu">
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
          <a href="#" className="small-action-link">Print 🖨</a>
          <a href="#" className="small-action-link">Share ➡</a>
        </div>

        <h3 className="highlight">Show my path</h3>

        <div className="path-buttons">
          <Link to="/finalpage">
            <button 
              className={`path-btn ${selectedPath === 'Inter' ? 'active' : ''}`} 
              onClick={() => handlePathSelect('Inter')}
            >
              Inter <span className="arrow">→</span>
            </button>
          </Link>
          <Link to="/finalpage">
            <button 
              className={`path-btn ${selectedPath === 'Undergraduate' ? 'active' : ''}`} 
              onClick={() => handlePathSelect('Undergraduate')}
            >
              Undergraduate <span className="arrow">→</span>
            </button>
          </Link>
          <Link to="/finalpage">
            <button 
              className={`path-btn ${selectedPath === 'Postgraduate' ? 'active' : ''}`} 
              onClick={() => handlePathSelect('Postgraduate')}
            >
              Postgraduate <span className="arrow">→</span>
            </button>
          </Link>
        </div>

        <div className="card">
          <h3 className="card-title">MileStone Card</h3>
          <p><strong>Also Called:</strong> Application Developer, Software Architect</p>
          <p><strong>Skills:</strong> Java, Python, C++, JS, HTML, CSS, React, Angular, SQL</p>
          <p>
            <strong>Free Websites:</strong> 
            <a href="#"> W3 schools</a>, 
            <a href="#"> Code academy</a>, 
            <a href="#"> Frontend Masters</a>
          </p>
          <p><strong>Estimated Goal Timeline:</strong> 7 years</p>
        </div>
      </main>

      <footer className="footer">
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

export default PathPage;
