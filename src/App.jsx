// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
// import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import UploadPage from './Upload'; // Correct the import path
import ResultPage from './Result'; // Add import for ResultPage

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
              {/* <Pricing /> */}
              <Testimonials />
              <Footer />
            </>
          } />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/result" element={<ResultPage />} /> {/* Add route for ResultPage */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
