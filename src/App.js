import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CustomPath from './Components/CustomPath';
import HomePage from './Components/HomePage';
import IndustryPage from './Components/IndustryPage'; // Import the IndustryPage component
import LoginForm from './Components/LoginForm';
import ProfilePage from './Components/ProfilePage';
import StandardPath from './Components/StandardPath';

function App() {
  // Use useEffect to check if there is any previously stored industry in localStorage
  useEffect(() => {
    const storedIndustry = localStorage.getItem('selectedIndustry');
    if (storedIndustry) {
      // If there is a stored industry, use it
      window.localStorage.setItem('selectedIndustry', storedIndustry);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/custom" element={<CustomPath />} />
        <Route path="/standard" element={<StandardPath />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path='profile' element={<ProfilePage />} />
        <Route path="/industry/:value" element={<IndustryPage />} /> {/* Dynamic route for IndustryPage */}
      </Routes>
    </Router>
  );
}

export default App;