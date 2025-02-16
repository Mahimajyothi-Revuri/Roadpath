// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import './IndustryPage.css';
// import ProfilePage from './ProfilePage';

// function IndustryPage() {
//   const { value } = useParams();

  // const jobList = {
  //   "Education": [
  //     "Teacher", "Principal", "Counselor", "Education Consultant", "Librarian",
  //     "Content Developer", "School Administrator", "Special Education Teacher", "Tutor",
  //     "College Professor", "Training Manager", "Researcher", "Academic Coordinator",
  //     "School Counselor", "Educational Psychologist", "Instructional Designer",
  //     "Education Technology Specialist", "Online Course Developer", "Subject Matter Expert",
  //     "Exam Invigilator"
  //   ],
  //   "IT & Software": [
  //     "Software Engineer", "Data Scientist", "Web Developer", "DevOps Engineer", "System Administrator",
  //     "Database Administrator", "Cybersecurity Analyst", "Machine Learning Engineer", "Cloud Engineer",
  //     "Full Stack Developer", "UI/UX Designer", "Android Developer", "iOS Developer", "Network Engineer",
  //     "Data Analyst", "QA Engineer", "Blockchain Developer", "Technical Support Engineer", "IT Consultant",
  //     "Game Developer"
  //   ],
  //   "Banking & Finance": [
  //     "Investment Banker", "Financial Analyst", "Insurance Underwriter", "Risk Manager", "Bank Branch Manager",
  //     "Loan Officer", "Financial Planner", "Accounting Manager", "Actuary", "Compliance Officer",
  //     "Investment Advisor", "Relationship Manager", "Auditor", "Tax Consultant", "Credit Analyst",
  //     "Personal Banker", "Mortgage Broker", "Trader", "Insurance Agent", "Financial Consultant"
  //   ],
  //   "Healthcare": [
  //     "Doctor", "Nurse", "Pharmacist", "Lab Technician", "Radiologist", "Physiotherapist", "Dentist",
  //     "Medical Researcher", "Occupational Therapist", "Healthcare Administrator", "Public Health Expert",
  //     "Healthcare Consultant", "Medical Transcriptionist", "Healthcare Assistant", "Biomedical Engineer",
  //     "Clinical Research Associate", "Medical Writer", "Emergency Medical Technician", "Veterinarian",
  //     "Psychiatrist"
  //   ],
  //   "E-commerce": [
  //     "E-commerce Manager", "Product Manager", "Digital Marketing Manager", "SEO Specialist", "Content Manager",
  //     "Business Development Manager", "Supply Chain Manager", "Web Developer", "Customer Service Manager",
  //     "Logistics Coordinator", "Brand Manager", "Sales Manager", "UX/UI Designer", "Data Analyst",
  //     "Social Media Manager", "Product Photographer", "Warehouse Manager", "Market Research Analyst",
  //     "E-commerce Executive", "Account Manager"
  //   ],
  //   "Manufacturing": [
  //     "Manufacturing Engineer", "Production Manager", "Quality Control Analyst", "Process Engineer", "Operations Manager",
  //     "Mechanical Engineer", "Product Designer", "Assembly Line Supervisor", "Industrial Engineer", "Supply Chain Manager",
  //     "Maintenance Technician", "Logistics Manager", "Inventory Planner", "Lean Manufacturing Expert", "Process Improvement Specialist",
  //     "Manufacturing Technician", "Factory Manager", "Production Planner", "Manufacturing Supervisor", "Automation Engineer"
  //   ],
  //   "Construction": [
  //     "Project Manager", "Construction Manager", "Civil Engineer", "Architect", "Surveyor", "Real Estate Agent",
  //     "Building Inspector", "Site Engineer", "Contract Manager", "Urban Planner", "Interior Designer",
  //     "Construction Laborer", "Real Estate Developer", "Estimator", "Property Manager", "Structural Engineer",
  //     "Landscape Architect", "Construction Superintendent", "Mechanical Engineer", "Real Estate Appraiser"
  //   ],
  //   "Telecom": [
  //     "Network Engineer", "Telecom Technician", "Project Manager", "Sales Manager", "Customer Support Engineer",
  //     "Telecommunications Specialist", "IT Support Technician", "Systems Administrator", "Data Analyst", "Service Manager",
  //     "Field Technician", "Network Architect", "Business Development Manager", "Customer Experience Manager", 
  //     "Product Manager", "Mobile Device Specialist", "VoIP Engineer", "Cloud Solutions Architect", "Wireless Communication Engineer", "Security Engineer"
  //   ],
  //   "Media & Entertainment": [
  //     "Content Creator", "Video Editor", "Sound Engineer", "Producer", "Director", "Cinematographer", 
  //     "Scriptwriter", "Art Director", "Animator", "Motion Graphics Designer", "Film Editor", "Media Planner",
  //     "Broadcast Technician", "Public Relations Manager", "Social Media Manager", "Advertising Manager", "Media Buyer",
  //     "Graphic Designer", "Journalist", "Photographer"
  //   ],
  //   "Travel": [
  //     "Hotel Manager", "Travel Consultant", "Tour Guide", "Event Coordinator", "Chef", "Travel Blogger",
  //     "Restaurant Manager", "Concierge", "Flight Attendant", "Tourism Specialist", "Travel Agency Executive",
  //     "Tour Operator", "Catering Manager", "Reservation Agent", "Travel Writer", "Hotel Receptionist",
  //     "Hospitality Consultant", "Event Planner", "Travel Operations Manager", "Customer Service Representative"
  //   ],
  //   "Agriculture": [
  //     "Agricultural Engineer", "Farm Manager", "Agronomist", "Soil Scientist", "Agriculture Technician",
  //     "Agribusiness Manager", "Horticulturist", "Food Scientist", "Livestock Manager", "Farm Equipment Operator",
  //     "Veterinarian", "Agriculture Consultant", "Research Scientist", "Forester", "Agriculture Extension Specialist",
  //     "Water Resource Specialist", "Food Safety Manager", "Sustainability Consultant", "Agricultural Economist", "Farming Specialist"
  //   ],
  //   "Automotive": [
  //     "Automobile Engineer", "Mechanical Engineer", "Car Designer", "Automobile Technician", "Automotive Sales Manager",
  //     "Quality Control Inspector", "Parts Manager", "Product Manager", "Automobile Production Engineer", "Assembly Line Technician",
  //     "Automotive Software Engineer", "Electric Vehicle Engineer", "Service Technician", "After-Sales Manager", "Test Engineer",
  //     "Car Engineer", "Car Manufacturer", "Automobile Repair Specialist", "Automotive Marketing Manager", "Supply Chain Manager"
  //   ],
  //   "Energy": [
  //     "Electrical Engineer", "Energy Analyst", "Power Plant Operator", "Renewable Energy Engineer", "Energy Consultant",
  //     "Mechanical Engineer", "Environmental Engineer", "Power Systems Engineer", "Energy Manager", "Solar Energy Technician",
  //     "Wind Energy Engineer", "Project Manager", "Energy Auditor", "Geothermal Energy Specialist", "Hydroelectric Engineer",
  //     "Energy Storage Specialist", "Electrical Design Engineer", "Field Engineer", "Power Distribution Engineer", "Utilities Manager"
  //   ],
  //   "FMCG": [
  //     "Brand Manager", "Product Manager", "Marketing Manager", "Sales Manager", "Supply Chain Manager", 
  //     "Business Analyst", "Account Manager", "Retail Manager", "Quality Assurance Manager", "Logistics Manager", 
  //     "Category Manager", "Regional Sales Manager", "Customer Service Manager", "Operations Manager", 
  //     "Brand Executive", "Consumer Research Analyst", "Packaging Specialist", "Product Development Manager", 
  //     "Trade Marketing Manager", "FMCG Sales Executive"
  //   ],
  //   "Logistics": [
  //     "Logistics Manager", "Supply Chain Analyst", "Warehouse Manager", "Logistics Coordinator", "Inventory Manager",
  //     "Operations Manager", "Transport Manager", "Procurement Specialist", "Supply Chain Consultant", "Demand Planner",
  //     "Export Manager", "Import Manager", "Freight Forwarder", "Distribution Manager", "Product Flow Manager",
  //     "Material Planner", "Fleet Manager", "Purchasing Manager", "Warehouse Coordinator", "Supply Chain Director"
  //   ],
  //   "Mining & Oil": [
  //     "Geologist", "Mining Engineer", "Petroleum Engineer", "Oil Rig Worker", "Mining Technician", "Safety Engineer",
  //     "Environmental Engineer", "Drilling Engineer", "Geophysicist", "Offshore Engineer", "Operations Manager",
  //     "Exploration Manager", "Energy Consultant", "Petroleum Geologist", "Energy Trader", "Mining Safety Officer",
  //     "Wellsite Supervisor", "Environmental Consultant", "Mining Operations Manager", "Gas Engineer"
  //   ],
  //   "Consulting": [
  //     "Consultant", "Management Consultant", "Business Analyst", "Strategy Consultant", "Human Resources Consultant",
  //     "Legal Consultant", "Financial Consultant", "Operations Consultant", "IT Consultant", "Marketing Consultant",
  //     "Project Manager", "Legal Advisor", "Consulting Manager", "Business Development Manager", "Recruitment Consultant",
  //     "Supply Chain Consultant", "Tax Consultant", "Healthcare Consultant", "Environmental Consultant", "Real Estate Consultant"
  //   ],
  //   "Government": [
  //     "Civil Servant", "Public Policy Advisor", "Government Official", "Social Worker", "Project Coordinator",
  //     "Regulatory Affairs Specialist", "Public Relations Specialist", "Legal Advisor", "Data Analyst", "Urban Planner",
  //     "Environmental Consultant", "Public Health Advisor", "Administrative Officer", "Public Affairs Specialist",
  //     "Government Relations Manager", "City Planner", "Public Safety Officer", "Public Finance Analyst", "Budget Analyst", "Policy Analyst"
  //   ],
  //   "Startups": [
  //     "Startup Founder", "Business Development Manager", "Product Manager", "Marketing Manager", "Operations Manager",
  //     "Investment Analyst", "Software Engineer", "Sales Manager", "Customer Success Manager", "Data Scientist",
  //     "Business Analyst", "Digital Marketing Specialist", "HR Manager", "Project Manager", "UX/UI Designer",
  //     "Growth Hacker", "Financial Analyst", "Chief Technology Officer (CTO)", "Chief Executive Officer (CEO)", "Product Designer"
  //   ],
  //   "Nonprofits": [
  //     "Social Worker", "Program Manager", "Community Outreach Coordinator", "Nonprofit Executive Director", "Fundraiser",
  //     "Volunteer Coordinator", "Grant Writer", "Development Officer", "Philanthropy Manager", "Public Relations Manager",
  //     "Policy Analyst", "Community Organizer", "Event Coordinator", "Social Media Manager", "Project Manager",
  //     "Nonprofit Researcher", "Humanitarian Aid Worker", "Charity Fundraising Manager", "Environmental Program Manager",
  //     "NGO Officer"
  //   ]
  // };

//   const industries = Object.keys(jobList).sort((a, b) => a.localeCompare(b));

//   const [industry, setIndustry] = useState(value || 'Education');
//   const [jobs, setJobs] = useState([]);
//   const [search, setSearch] = useState('');
//   const [selectedJobs, setSelectedJobs] = useState([]);

//   useEffect(() => {
//     const savedIndustry = localStorage.getItem('selectedIndustry');
//     const savedSearch = localStorage.getItem('searchTerm');
    
//     if (savedIndustry) setIndustry(savedIndustry);
//     if (savedSearch) setSearch(savedSearch);
    
//     if (jobList[industry]) {
//       setJobs([...jobList[industry]].sort((a, b) => a.localeCompare(b)));
//     } else {
//       setJobs([...jobList['Education']].sort((a, b) => a.localeCompare(b)));
//     }
    
//     setSelectedJobs([]);
//   }, [industry]);

//   const handleIndustryChange = (event) => {
//     const newIndustry = event.target.value;
//     setIndustry(newIndustry);
//     localStorage.setItem('selectedIndustry', newIndustry);
//   };

//   const handleSearchChange = (event) => {
//     setSearch(event.target.value);
//   };

//   const handleSearchClick = () => {
//     localStorage.setItem('searchTerm', search);
//   };

//   const toggleJobSelection = (job) => {
//     setSelectedJobs(prevSelected =>
//       prevSelected.includes(job) ? prevSelected.filter(j => j !== job) : [...prevSelected, job]
//     );
//   };

//   const filteredJobs = jobs.filter(job => job.toLowerCase().includes(search.toLowerCase())).sort((a, b) => a.localeCompare(b));
//   const sortedSelectedJobs = [...selectedJobs].sort((a, b) => a.localeCompare(b));
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className='Container'>
//       <header className='header'>
//         <div className='logo'>WHAT'S NEXT</div>
//         <nav className='menu'>
//           <button className="navbar-toggler" onClick={toggleMenu}>☰</button>
//           <ul className={isOpen ? 'open' : ''}>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/standard">Standard Path</Link></li>
//             <li><Link to="/custom">Custom Path</Link></li>
//             <li><Link to="/login"><button>Login</button></Link></li>
//             <li><ProfilePage /></li>
//           </ul>
//         </nav>
//       </header>
//       <main>
//         <br />
//         <div>
//           <h3>Search Another Careers field</h3>
//           <div className='input-group'>
//             <select className='search-section' onChange={handleIndustryChange} value={industry}>
//               {industries.map(ind => (
//                 <option key={ind} value={ind}>{ind}</option>
//               ))}
//             </select>
//             <span className="input-group-text" onClick={handleSearchClick}>
//               <Link to="/industry"><button className="fa fa-arrow-right">→</button></Link>
//             </span>
//           </div>
//           <br />
//           <div>
//             <h3>Search Results for {industry}:</h3>
//           </div>
//           <div className='text5'>
//             <h6>Print🖨</h6>
//             <h6>Share➡</h6>
//           </div>
//           <br />
//         </div>

//         <div>
//           <h3>Top 20 Jobs in {industry}:</h3>
//           <div className='job-boxes'>
//             {filteredJobs.length > 0 ? (
//               filteredJobs.map((job, index) => (
//                 <div key={index} className={`job-box ${selectedJobs.includes(job) ? 'selected' : ''}`} onClick={() => toggleJobSelection(job)}>
//                   <p><Link to={`/job/${encodeURIComponent(job)}`}>{job}</Link></p>
//                 </div>
//               ))
//             ) : (
//               <div className='job-box'>
//                 <p>No jobs found for this industry.</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </main>
//       <br />
//       <footer className='footer'>
//         <ul>
//           <li>About</li>
//           <li>Contact</li>
//           <li>Privacy Policy</li>
//           <li>Terms of Service</li>
//           <li>Cookies</li>
//           <li className="bi bi-instagram"> Instagram</li>
//           <li className="bi bi-whatsapp"> WhatsApp</li>
//         </ul>
//       </footer>
//     </div>
//   );
// }

// export default IndustryPage;


import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './IndustryPage.css';
import ProfilePage from './ProfilePage';

function IndustryPage() {
  const { value } = useParams();

  const jobList = {
    "Education": [
      "Teacher", "Principal", "Counselor", "Education Consultant", "Librarian",
      "Content Developer", "School Administrator", "Special Education Teacher", "Tutor",
      "College Professor", "Training Manager", "Researcher", "Academic Coordinator",
      "School Counselor", "Educational Psychologist", "Instructional Designer",
      "Education Technology Specialist", "Online Course Developer", "Subject Matter Expert",
      "Exam Invigilator"
    ],
    "IT & Software": [
      "Software Engineer", "Data Scientist", "Web Developer", "DevOps Engineer", "System Administrator",
      "Database Administrator", "Cybersecurity Analyst", "Machine Learning Engineer", "Cloud Engineer",
      "Full Stack Developer", "UI/UX Designer", "Android Developer", "iOS Developer", "Network Engineer",
      "Data Analyst", "QA Engineer", "Blockchain Developer", "Technical Support Engineer", "IT Consultant",
      "Game Developer"
    ],
    "Banking & Finance": [
      "Investment Banker", "Financial Analyst", "Insurance Underwriter", "Risk Manager", "Bank Branch Manager",
      "Loan Officer", "Financial Planner", "Accounting Manager", "Actuary", "Compliance Officer",
      "Investment Advisor", "Relationship Manager", "Auditor", "Tax Consultant", "Credit Analyst",
      "Personal Banker", "Mortgage Broker", "Trader", "Insurance Agent", "Financial Consultant"
    ],
    "Healthcare": [
      "Doctor", "Nurse", "Pharmacist", "Lab Technician", "Radiologist", "Physiotherapist", "Dentist",
      "Medical Researcher", "Occupational Therapist", "Healthcare Administrator", "Public Health Expert",
      "Healthcare Consultant", "Medical Transcriptionist", "Healthcare Assistant", "Biomedical Engineer",
      "Clinical Research Associate", "Medical Writer", "Emergency Medical Technician", "Veterinarian",
      "Psychiatrist"
    ],
    "E-commerce": [
      "E-commerce Manager", "Product Manager", "Digital Marketing Manager", "SEO Specialist", "Content Manager",
      "Business Development Manager", "Supply Chain Manager", "Web Developer", "Customer Service Manager",
      "Logistics Coordinator", "Brand Manager", "Sales Manager", "UX/UI Designer", "Data Analyst",
      "Social Media Manager", "Product Photographer", "Warehouse Manager", "Market Research Analyst",
      "E-commerce Executive", "Account Manager"
    ],
    "Manufacturing": [
      "Manufacturing Engineer", "Production Manager", "Quality Control Analyst", "Process Engineer", "Operations Manager",
      "Mechanical Engineer", "Product Designer", "Assembly Line Supervisor", "Industrial Engineer", "Supply Chain Manager",
      "Maintenance Technician", "Logistics Manager", "Inventory Planner", "Lean Manufacturing Expert", "Process Improvement Specialist",
      "Manufacturing Technician", "Factory Manager", "Production Planner", "Manufacturing Supervisor", "Automation Engineer"
    ],
    "Construction": [
      "Project Manager", "Construction Manager", "Civil Engineer", "Architect", "Surveyor", "Real Estate Agent",
      "Building Inspector", "Site Engineer", "Contract Manager", "Urban Planner", "Interior Designer",
      "Construction Laborer", "Real Estate Developer", "Estimator", "Property Manager", "Structural Engineer",
      "Landscape Architect", "Construction Superintendent", "Mechanical Engineer", "Real Estate Appraiser"
    ],
    "Telecom": [
      "Network Engineer", "Telecom Technician", "Project Manager", "Sales Manager", "Customer Support Engineer",
      "Telecommunications Specialist", "IT Support Technician", "Systems Administrator", "Data Analyst", "Service Manager",
      "Field Technician", "Network Architect", "Business Development Manager", "Customer Experience Manager", 
      "Product Manager", "Mobile Device Specialist", "VoIP Engineer", "Cloud Solutions Architect", "Wireless Communication Engineer", "Security Engineer"
    ],
    "Media & Entertainment": [
      "Content Creator", "Video Editor", "Sound Engineer", "Producer", "Director", "Cinematographer", 
      "Scriptwriter", "Art Director", "Animator", "Motion Graphics Designer", "Film Editor", "Media Planner",
      "Broadcast Technician", "Public Relations Manager", "Social Media Manager", "Advertising Manager", "Media Buyer",
      "Graphic Designer", "Journalist", "Photographer"
    ],
    "Travel": [
      "Hotel Manager", "Travel Consultant", "Tour Guide", "Event Coordinator", "Chef", "Travel Blogger",
      "Restaurant Manager", "Concierge", "Flight Attendant", "Tourism Specialist", "Travel Agency Executive",
      "Tour Operator", "Catering Manager", "Reservation Agent", "Travel Writer", "Hotel Receptionist",
      "Hospitality Consultant", "Event Planner", "Travel Operations Manager", "Customer Service Representative"
    ],
    "Agriculture": [
      "Agricultural Engineer", "Farm Manager", "Agronomist", "Soil Scientist", "Agriculture Technician",
      "Agribusiness Manager", "Horticulturist", "Food Scientist", "Livestock Manager", "Farm Equipment Operator",
      "Veterinarian", "Agriculture Consultant", "Research Scientist", "Forester", "Agriculture Extension Specialist",
      "Water Resource Specialist", "Food Safety Manager", "Sustainability Consultant", "Agricultural Economist", "Farming Specialist"
    ],
    "Automotive": [
      "Automobile Engineer", "Mechanical Engineer", "Car Designer", "Automobile Technician", "Automotive Sales Manager",
      "Quality Control Inspector", "Parts Manager", "Product Manager", "Automobile Production Engineer", "Assembly Line Technician",
      "Automotive Software Engineer", "Electric Vehicle Engineer", "Service Technician", "After-Sales Manager", "Test Engineer",
      "Car Engineer", "Car Manufacturer", "Automobile Repair Specialist", "Automotive Marketing Manager", "Supply Chain Manager"
    ],
    "Energy": [
      "Electrical Engineer", "Energy Analyst", "Power Plant Operator", "Renewable Energy Engineer", "Energy Consultant",
      "Mechanical Engineer", "Environmental Engineer", "Power Systems Engineer", "Energy Manager", "Solar Energy Technician",
      "Wind Energy Engineer", "Project Manager", "Energy Auditor", "Geothermal Energy Specialist", "Hydroelectric Engineer",
      "Energy Storage Specialist", "Electrical Design Engineer", "Field Engineer", "Power Distribution Engineer", "Utilities Manager"
    ],
    "FMCG": [
      "Brand Manager", "Product Manager", "Marketing Manager", "Sales Manager", "Supply Chain Manager", 
      "Business Analyst", "Account Manager", "Retail Manager", "Quality Assurance Manager", "Logistics Manager", 
      "Category Manager", "Regional Sales Manager", "Customer Service Manager", "Operations Manager", 
      "Brand Executive", "Consumer Research Analyst", "Packaging Specialist", "Product Development Manager", 
      "Trade Marketing Manager", "FMCG Sales Executive"
    ],
    "Logistics": [
      "Logistics Manager", "Supply Chain Analyst", "Warehouse Manager", "Logistics Coordinator", "Inventory Manager",
      "Operations Manager", "Transport Manager", "Procurement Specialist", "Supply Chain Consultant", "Demand Planner",
      "Export Manager", "Import Manager", "Freight Forwarder", "Distribution Manager", "Product Flow Manager",
      "Material Planner", "Fleet Manager", "Purchasing Manager", "Warehouse Coordinator", "Supply Chain Director"
    ],
    "Mining & Oil": [
      "Geologist", "Mining Engineer", "Petroleum Engineer", "Oil Rig Worker", "Mining Technician", "Safety Engineer",
      "Environmental Engineer", "Drilling Engineer", "Geophysicist", "Offshore Engineer", "Operations Manager",
      "Exploration Manager", "Energy Consultant", "Petroleum Geologist", "Energy Trader", "Mining Safety Officer",
      "Wellsite Supervisor", "Environmental Consultant", "Mining Operations Manager", "Gas Engineer"
    ],
    "Consulting": [
      "Consultant", "Management Consultant", "Business Analyst", "Strategy Consultant", "Human Resources Consultant",
      "Legal Consultant", "Financial Consultant", "Operations Consultant", "IT Consultant", "Marketing Consultant",
      "Project Manager", "Legal Advisor", "Consulting Manager", "Business Development Manager", "Recruitment Consultant",
      "Supply Chain Consultant", "Tax Consultant", "Healthcare Consultant", "Environmental Consultant", "Real Estate Consultant"
    ],
    "Government": [
      "Civil Servant", "Public Policy Advisor", "Government Official", "Social Worker", "Project Coordinator",
      "Regulatory Affairs Specialist", "Public Relations Specialist", "Legal Advisor", "Data Analyst", "Urban Planner",
      "Environmental Consultant", "Public Health Advisor", "Administrative Officer", "Public Affairs Specialist",
      "Government Relations Manager", "City Planner", "Public Safety Officer", "Public Finance Analyst", "Budget Analyst", "Policy Analyst"
    ],
    "Startups": [
      "Startup Founder", "Business Development Manager", "Product Manager", "Marketing Manager", "Operations Manager",
      "Investment Analyst", "Software Engineer", "Sales Manager", "Customer Success Manager", "Data Scientist",
      "Business Analyst", "Digital Marketing Specialist", "HR Manager", "Project Manager", "UX/UI Designer",
      "Growth Hacker", "Financial Analyst", "Chief Technology Officer (CTO)", "Chief Executive Officer (CEO)", "Product Designer"
    ],
    "Nonprofits": [
      "Social Worker", "Program Manager", "Community Outreach Coordinator", "Nonprofit Executive Director", "Fundraiser",
      "Volunteer Coordinator", "Grant Writer", "Development Officer", "Philanthropy Manager", "Public Relations Manager",
      "Policy Analyst", "Community Organizer", "Event Coordinator", "Social Media Manager", "Project Manager",
      "Nonprofit Researcher", "Humanitarian Aid Worker", "Charity Fundraising Manager", "Environmental Program Manager",
      "NGO Officer"
    ]
  };
  const industries = Object.keys(jobList).sort((a, b) => a.localeCompare(b));

  const [industry, setIndustry] = useState(value || 'Education');
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedJobs, setSelectedJobs] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (jobList[industry]) {
      setJobs([...jobList[industry]].sort((a, b) => a.localeCompare(b)));
    } else {
      setJobs([...jobList['Education']].sort((a, b) => a.localeCompare(b)));
    }
    setSelectedJobs([]);
  }, [industry]);

  const handleIndustryChange = (event) => {
    setIndustry(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const toggleJobSelection = (job) => {
    setSelectedJobs(prevSelected =>
      prevSelected.includes(job) ? prevSelected.filter(j => j !== job) : [...prevSelected, job]
    );
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Check out this career page!',
          text: `Explore top jobs in ${industry}`,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      alert('Sharing is not supported in your browser.');
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const filteredJobs = jobs.filter(job => job.toLowerCase().includes(search.toLowerCase()));

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
        <br />
        <div>
          <h3>Search Another Careers field</h3>
          <div className='input-group'>
            <select className='search-section' onChange={handleIndustryChange} value={industry}>
              {industries.map(ind => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
          </div>
          <br />
          <div>
            <h3>Search Results for {industry}:</h3>
          </div>
          <div className="actions-container">
  <a href="#" className="small-action-link" onClick={handlePrint}>Print 🖨</a>
  <a href="#" className="small-action-link" onClick={handleShare}>Share ➡</a>
</div>


          <br />
        </div>

        <div>
          <h3>Top Jobs in {industry}:</h3>
          <div className='job-boxes'>
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <div key={index} className={`job-box ${selectedJobs.includes(job) ? 'selected' : ''}`} onClick={() => toggleJobSelection(job)}>
                  <p><Link to={`/job/${encodeURIComponent(job)}`}>{job}</Link></p>
                </div>
              ))
            ) : (
              <div className='job-box'>
                <p>No jobs found for this industry.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <br />
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
}

export default IndustryPage;
