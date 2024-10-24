// components/HeroSection.jsx
import { Link } from 'react-router-dom';
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div id="home" className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Retinal Disease Classification Using
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Deep Learning
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Retinal diseases are a major cause of vision loss and blindness worldwide.
        Early detection and treatment can significantly improve outcomes, but
        diagnosis can be challenging. Our project aims to develop an AI-powered
        system for retinal disease classification, using deep learning to analyze
        retinal images and detect signs of disease. By providing accurate and
        timely diagnoses, we hope to improve patient outcomes and reduce the
        burden of retinal disease on individuals and society.
      </p>
      <div className="flex justify-center my-10">
        <Link
          to="/upload"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Get Started
        </Link>
        <Link
          to="/research-paper"
          className="py-3 px-4 mx-3 rounded-md border text-white border-orange-500 hover:underline"
        >
          View Research Papers
        </Link>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
