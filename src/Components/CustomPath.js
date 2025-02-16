// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Select from "react-select";
// import './CustomPath.css';
// import ProfilePage from './ProfilePage';

// function CustomPath() {
//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const [selectedIndustry, setSelectedIndustry] = useState('');
//   const navigate = useNavigate();

//   const options = [
//     { value: "option1", label: "Angular" },
//     { value: "option2", label: "AWS" },
//     { value: "option3", label: "C/C++" },
//     { value: "option4", label: "CSS" },
//     { value: "option5", label: "HTML" },
//     { value: "option6", label: "Java" },
//     { value: "option7", label: "JavaScript" },
//     { value: "option8", label: "Machine Learning" },
//     { value: "option9", label: "MongoDB" },
//     { value: "option10", label: "Networking" },
//     { value: "option11", label: "Power BI" },
//     { value: "option12", label: "Python" },
//     { value: "option13", label: "React" },
//     { value: "option14", label: "R" },
//     { value: "option15", label: "SQL" },
//     { value: "option16", label: "Tableau" },
//     { value: "option17", label: "Technical Updates" },
//   ];

//   // Sort options alphabetically by label
//   options.sort((a, b) => a.label.localeCompare(b.label));

//   useEffect(() => {
//     // Retrieve the selected options and industry from local storage on component mount
//     const storedOptions = localStorage.getItem('selectedOptions');
//     const storedIndustry = localStorage.getItem('selectedIndustry');
    
//     if (storedOptions) {
//       setSelectedOptions(JSON.parse(storedOptions));
//     }
    
//     if (storedIndustry) {
//       setSelectedIndustry(storedIndustry);
//     }
//   }, []);

//   const handleChange = (selected) => {
//     setSelectedOptions(selected);
//     // Store the selected options in local storage
//     localStorage.setItem('selectedOptions', JSON.stringify(selected));
//   };

//   const handleIndustryChange = (event) => {
//     const value = event.target.value;
//     setSelectedIndustry(value);
//     // Store the selected industry in local storage
//     localStorage.setItem('selectedIndustry', value);
//   };

//   // This function navigates to the industry page only when the button is clicked
//   const handleIndustryNavigate = () => {
//     if (selectedIndustry) {
//       navigate(`/industry/${selectedIndustry}`);
//     } else {
//       alert('Please select an industry before proceeding.');
//     }
//   };

//   return (
//     <div className='Container'>
//       <header className='header'>
//         <div className='logo'>WHAT'S NEXT</div>
//         <nav className='menu'>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/standard">Standard Path</Link></li>
//             <li><Link to="/custom">Custom Path</Link></li>
//             <li><Link to="/login"><button>Login</button></Link></li>
//             <li><ProfilePage /></li>
//           </ul>
//         </nav>
//       </header>
//       <main>
//         <div className='main'>
//           <section>
//             <div>
//               <p1>CUSTOM PATH</p1><br /><br />
//               <h3>Define your current level</h3><br />
//               <select className='search-section'>
//                 <option>SSC</option>
//                 <option>Inter/Diploma</option>
//                 <option>Btech</option>
//                 <option>Undergraduate</option>
//                 <option>Postgraduate</option>
//               </select>
//             </div>

//             <br />

//             <div>
//               <h3>Multi-Select Dropdown</h3><br/>
//               <Select
//                 isMulti
//                 options={options}
//                 value={selectedOptions}
//                 onChange={handleChange}
//                 placeholder="Select options"
//                 className='search-section'
//               />
//             </div>

//             <br />

//             <h3>If you know your dream job:</h3><br/>
//             <div className='input-group'>
//               <input 
//                 type="text" 
//                 className="form-control" 
//                 placeholder='Search your dream job' 
//               />
//               <span className="input-group-text">
//                 <button className="arrow-button">→</button>
//               </span>
//             </div>

//             <br />

//             <h3>If you are still exploring:</h3><br/>
//             <div className='input-group'>
//               <select 
//                 value={selectedIndustry} 
//                 onChange={handleIndustryChange}
//                 className='search-section'
//               >
//                 <option value="">Select Industry</option>
//                 <option value="Agriculture">Agriculture</option>
//                 <option value="Automotive">Automotive</option>
//                 <option value="Banking & Finance">Banking & Finance</option>
//                 <option value="Construction">Construction</option>
//                 <option value="Consulting">Consulting</option>
//                 <option value="E-commerce">E-commerce</option>
//                 <option value="Education">Education</option>
//                 <option value="Energy">Energy</option>
//                 <option value="FMCG">FMCG</option>
//                 <option value="Government">Government</option>
//                 <option value="Healthcare">Healthcare</option>
//                 <option value="IT & Software">IT & Software</option>
//                 <option value="Logistics">Logistics</option>
//                 <option value="Manufacturing">Manufacturing</option>
//                 <option value="Media & Entertainment">Media & Entertainment</option>
//                 <option value="Mining & Oil">Mining & Oil</option>
//                 <option value="Nonprofits">Nonprofits</option>
//                 <option value="Startups">Startups</option>
//                 <option value="Telecom">Telecom</option>
//                 <option value="Travel">Travel</option>
//               </select>
//               <span className="input-group-text">
//                 <button 
//                   className="arrow-button"
//                   onClick={handleIndustryNavigate}
//                 >→</button>
//               </span>
//             </div>
//             <br />
//           </section>
//         </div>
//       </main>
//       <footer className='footer'>
//         <ul>
//           <li>About</li>
//           <li>Contact</li>
//           <li>Privacy Policy</li>
//           <li>Terms of Service</li>
//           <li>Cookies</li>
//           <li className="bi bi-instagram">Instagram</li>
//           <li className="bi bi-whatsapp">WhatsApp</li>
//         </ul>
//       </footer>
//     </div>
//   );
// }

// export default CustomPath;



import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Select from "react-select";
import './CustomPath.css';
import ProfilePage from './ProfilePage';

function CustomPath() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const options = [
    { value: "option1", label: "Angular" },
    { value: "option2", label: "AWS" },
    { value: "option3", label: "C/C++" },
    { value: "option4", label: "CSS" },
    { value: "option5", label: "HTML" },
    { value: "option6", label: "Java" },
    { value: "option7", label: "JavaScript" },
    { value: "option8", label: "Machine Learning" },
    { value: "option9", label: "MongoDB" },
    { value: "option10", label: "Networking" },
    { value: "option11", label: "Power BI" },
    { value: "option12", label: "Python" },
    { value: "option13", label: "React" },
    { value: "option14", label: "R" },
    { value: "option15", label: "SQL" },
    { value: "option16", label: "Tableau" },
    { value: "option17", label: "Technical Updates" },
  ];

  // Sort options alphabetically by label
  options.sort((a, b) => a.label.localeCompare(b.label));

  useEffect(() => {
    // Retrieve the selected options and industry from local storage on component mount
    const storedOptions = localStorage.getItem('selectedOptions');
    const storedIndustry = localStorage.getItem('selectedIndustry');
    
    if (storedOptions) {
      setSelectedOptions(JSON.parse(storedOptions));
    }
    
    if (storedIndustry) {
      setSelectedIndustry(storedIndustry);
    }
  }, []);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
    // Store the selected options in local storage
    localStorage.setItem('selectedOptions', JSON.stringify(selected));
  };

  const handleIndustryChange = (event) => {
    const value = event.target.value;
    setSelectedIndustry(value);
    // Store the selected industry in local storage
    localStorage.setItem('selectedIndustry', value);
  };

  // This function navigates to the industry page only when the button is clicked
  const handleIndustryNavigate = () => {
    if (selectedIndustry) {
      navigate(`/industry/${selectedIndustry}`);
    } else {
      alert('Please select an industry before proceeding.');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='Container'>
      <header className='header'>
        <div className='logo'>WHAT'S NEXT</div>
        <nav className='menu'>
          <button className="navbar-toggler" onClick={toggleMenu}>☰</button>
          <ul className={isMenuOpen ? 'open' : ''}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/standard">Standard Path</Link></li>
            <li><Link to="/custom">Custom Path</Link></li>
            <li><Link to="/login"><button>Login</button></Link></li>
            <li><ProfilePage /></li>
          </ul>
        </nav>
      </header>

      <main>
        <div className='main'>
          <section>
            <div>
              <p1>CUSTOM PATH</p1><br /><br />
              <h3>Define your current level</h3><br />
              <select className='search-section'>
                <option>SSC</option>
                <option>Inter/Diploma</option>
                <option>Btech</option>
                <option>Undergraduate</option>
                <option>Postgraduate</option>
              </select>
            </div>

            <br />

            <div>
              <h3>Multi-Select Dropdown</h3><br/>
              <Select
                isMulti
                options={options}
                value={selectedOptions}
                onChange={handleChange}
                placeholder="Select options"
                className='search-section'
              />
            </div>

            <br />

            <h3>If you know your dream job:</h3><br/>
            <div className='input-group'>
              <input 
                type="text" 
                className="form-control" 
                placeholder='Search your dream job' 
              />
              <span className="input-group-text">
                <button className="arrow-button">→</button>
              </span>
            </div>

            <br />

            <h3>If you are still exploring:</h3><br/>
            <div className='input-group'>
              <select 
                value={selectedIndustry} 
                onChange={handleIndustryChange}
                className='search-section'
              >
                <option value="">Select Industry</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Automotive">Automotive</option>
                <option value="Banking & Finance">Banking & Finance</option>
                <option value="Construction">Construction</option>
                <option value="Consulting">Consulting</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Education">Education</option>
                <option value="Energy">Energy</option>
                <option value="FMCG">FMCG</option>
                <option value="Government">Government</option>
                <option value="Healthcare">Healthcare</option>
                <option value="IT & Software">IT & Software</option>
                <option value="Logistics">Logistics</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Media & Entertainment">Media & Entertainment</option>
                <option value="Mining & Oil">Mining & Oil</option>
                <option value="Nonprofits">Nonprofits</option>
                <option value="Startups">Startups</option>
                <option value="Telecom">Telecom</option>
                <option value="Travel">Travel</option>
              </select>
              <span className="input-group-text">
                <button 
                  className="arrow-button"
                  onClick={handleIndustryNavigate}
                >→</button>
              </span>
            </div>
            <br />
          </section>
        </div>
      </main>

      <footer className='footer'>
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Cookies</li>
          <li className="bi bi-instagram">Instagram</li>
          <li className="bi bi-whatsapp">WhatsApp</li>
        </ul>
      </footer>
    </div>
  );
}

export default CustomPath;
