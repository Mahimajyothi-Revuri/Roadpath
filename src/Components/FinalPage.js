import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './FinalPage.css';
import ProfilePage from './ProfilePage';

const FinalPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPath, setSelectedPath] = useState('Inter'); // Default to Inter
  const [selectedGroup, setSelectedGroup] = useState(null);

  const navigate = useNavigate();

  // Toggle menu for mobile view
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle path selection
  const handlePathSelect = (path) => {
    setSelectedPath(path);
    setSelectedGroup(null); // Reset group on path switch
    localStorage.setItem('selectedPath', path); // Save to localStorage
  };

  // Handle group selection
  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
    localStorage.setItem('selectedGroup', group); // Save to localStorage
  };

  // Go to next page if both path and group are selected
  const goToNextPage = () => {
    if (selectedPath && selectedGroup) {
      navigate('/nextpage'); // Navigate to the next page
    } else {
      alert('Please select both a path and a group before continuing.');
    }
  };

  // Retrieve values from localStorage on page load
  useEffect(() => {
    const savedPath = localStorage.getItem('selectedPath');
    const savedGroup = localStorage.getItem('selectedGroup');

    if (savedPath) {
      setSelectedPath(savedPath); // Set the saved path if available
    }

    if (savedGroup) {
      setSelectedGroup(savedGroup); // Set the saved group if available
    }
  }, []);

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

      <div className="tab-section">
        <span>
          <button
            className={selectedPath === 'Inter' ? 'selected' : ''}
            onClick={() => handlePathSelect('Inter')}
          >
            Inter
          </button> (2 years)
        </span>
        <span>
          <button
            className={selectedPath === 'Diploma' ? 'selected' : ''}
            onClick={() => handlePathSelect('Diploma')}
          >
            Diploma
          </button> (3 years)
        </span>
      </div>

      <div className="groups-section">
        <h3 className="groups-heading">Groups:</h3>

        {selectedPath === 'Inter' && (
          <>
            <div
              className={`group-box ${selectedGroup === 'MPC' ? 'selected' : ''}`}
              onClick={() => handleGroupSelect('MPC')}
            >
              <b>MPC</b><span> (Maths, Physics, Chemistry)</span>
            </div>
            <div
              className={`group-line ${selectedGroup === 'BIPC' ? 'selected' : ''}`}
              onClick={() => handleGroupSelect('BIPC')}
            >
              <b>BiPC</b><span> (Biology, Physics, Chemistry)</span>
            </div>
            <div
              className={`group-line ${selectedGroup === 'CEC' ? 'selected' : ''}`}
              onClick={() => handleGroupSelect('CEC')}
            >
              <b>CEC</b><span> (Commerce, Economics, Civics)</span>
            </div>
          </>
        )}

        {selectedPath === 'Diploma' && (
          <>
            <div
              className={`group-box ${selectedGroup === 'CSE' ? 'selected' : ''}`}
              onClick={() => handleGroupSelect('CSE')}
            >
              <b>CSE</b><span> (Computer Science Engineering)</span>
            </div>
            <div
              className={`group-line ${selectedGroup === 'ECE' ? 'selected' : ''}`}
              onClick={() => handleGroupSelect('ECE')}
            >
              <b>ECE</b><span> (Electronics and Communication)</span>
            </div>
            <div
              className={`group-line ${selectedGroup === 'MECH' ? 'selected' : ''}`}
              onClick={() => handleGroupSelect('MECH')}
            >
              <b>MECH</b><span> (Mechanical Engineering)</span>
            </div>
          </>
        )}

        {selectedPath && (
          <div className="explore-section">
            <span className="explore-text">Explore colleges:</span>
            <a
              href="https://www.google.com/maps/search/colleges+near+me"
              target="_blank"
              rel="noopener noreferrer"
              className="view-link"
            >
              View
            </a>
            <div className="map-link"><b>(Google Maps link📍)</b></div>
          </div>
        )}
      </div>

      <div className="button-section">
        <button className="nav-button" onClick={() => navigate(-1)}>Previous</button>
        <button className="nav-button" onClick={goToNextPage}>Next</button>
      </div>

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

export default FinalPage;
