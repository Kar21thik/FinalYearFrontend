// ResultPage.jsx
// import React from 'react';
import { useLocation } from 'react-router-dom';

const ResultPage = () => {
  const location = useLocation();
  const { image, classification } = location.state || {};

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-black to-orange-800 p-6">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg space-y-6 max-w-md w-full">
        <h2 className="text-3xl mb-6 text-center text-white font-semibold">Classification Result</h2>
        {image && (
          <div className="mb-6">
            <img
              src={image}
              alt="Uploaded"
              className="w-full h-auto rounded-md shadow-md border border-gray-600"
            />
          </div>
        )}
        <div className="text-center text-white">
          <p className="text-xl font-semibold">Classification Result:</p>
          <p className="text-lg mt-2">{classification || 'No result available'}</p>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
