// src/App.jsx
// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import UploadPage from "./Upload"; // Importing from the root level
// import ResultPage from "./Result";
import ResearchPaper from './components/Researchpaper';// Import the ResearchPaper component

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <FeatureSection />
              <Workflow />
              <Testimonials />
              <Footer />
            </>
          } />
          <Route path="/upload" element={<UploadPage />} />
          {/* <Route path="/result" element={<ResultPage />} /> */}
          <Route path="/researchpaper" element={<ResearchPaper />} /> {/* Add this route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
