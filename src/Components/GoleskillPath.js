import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Goleskillpath.css';
import ProfilePage from './ProfilePage';

const Goleskillpath = () => {
  const [careerList, setCareerList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activePath, setActivePath] = useState(localStorage.getItem('activePath') || 'goalPath');
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem('searchTerm') || '');

  const toggleMenu = () => setIsOpen(!isOpen);

  const goalResults = [
    "Software Developers",
    "Software Quality Assurance Analysts & Testers",
    "Full stack developer",
    "Computer Systems Analysts",
  ];

  const skillResults = [
    "JavaScript Mastery Program",
    "DevOps Bootcamp",
    "Cloud Computing Fundamentals",
    "UI/UX Design Essentials",
  ];

  useEffect(() => {
    handleSearch(searchTerm);
  }, [activePath]);

  const handleSearch = (term = searchTerm) => {
    const data = activePath === 'goalPath' ? goalResults : skillResults;
    const filtered = data.filter(item =>
      item.toLowerCase().includes(term.toLowerCase())
    );

    setCareerList(filtered.length > 0 ? filtered : data);

    localStorage.setItem('searchTerm', term);
    localStorage.setItem('activePath', activePath);
  };

  const handlePathChange = (path) => {
    setActivePath(path);
    localStorage.setItem('activePath', path);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
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

      <main>
        <div className="page-wrapper">
          <div className="goleskill-wrapper">
            <h1 className="title">Search Another</h1>

            <div className="search-group">
              <input
                type="text"
                placeholder="Search your dream job"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button onClick={() => handleSearch()}>→</button>
            </div>

            <h2 className="results-title">Search Results for: {searchTerm || 'All'}</h2>

            <div className="actions-container">
              <a href="#" className="small-action-link">Print 🖨</a>
              <a href="#" className="small-action-link">Share ➡</a>
            </div>

            <div className="path-buttons">
              <button
                className={`goal ${activePath === 'goalPath' ? 'active' : ''}`}
                onClick={() => handlePathChange('goalPath')}
              >
                Goal Path
              </button>
              <button
                className={`skill ${activePath === 'skillPath' ? 'active' : ''}`}
                onClick={() => handlePathChange('skillPath')}
              >
                Skill Path
              </button>
            </div>

            <ul className="results-list">
              {careerList.map((job, index) => (
                <li key={index}>
                  <Link to="/finalpage" state={{ job }}>
                    {job}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <footer className="footer">
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Cookies</li>
          <li><i className="bi bi-instagram"></i> Instagram</li>
          <li><i className="bi bi-whatsapp"></i> WhatsApp</li>
        </ul>
      </footer>
    </div>
  );
};

export default Goleskillpath;
