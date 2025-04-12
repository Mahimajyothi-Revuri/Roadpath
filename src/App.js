import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CustomPath from './Components/CustomPath';
import FinalPage from './Components/FinalPage';
import Goleskillpath from './Components/GoleskillPath';
import HomePage from './Components/HomePage';
import IndustryPage from './Components/IndustryPage';
import LoginForm from './Components/LoginForm';
import PathPage from './Components/PathPage';
import ProfilePage from './Components/ProfilePage';
import StandardPath from './Components/StandardPath';

function App() {
  useEffect(() => {
    const storedIndustry = localStorage.getItem('selectedIndustry');
    if (storedIndustry) {
      localStorage.setItem('selectedIndustry', storedIndustry);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/custom" element={<CustomPath />} />
        <Route path="/standard" element={<StandardPath />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/industry/:value" element={<IndustryPage />} />
        <Route path="/goleskill/:job" element={<Goleskillpath />} /> {/* ✅ dynamic job route for Goleskillpath */}
        <Route path="/pathpage/:job" element={<PathPage />} /> {/* ✅ dynamic job route for PathPage */}
        <Route path="/finalpage" element={<FinalPage />} />
      </Routes>
    </Router>
  );
}

export default App;
