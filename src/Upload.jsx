// UploadPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);

      // Create a preview URL for the selected image
      const previewUrl = URL.createObjectURL(selectedFile);
      setPreview(previewUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      // Example classification result
      const classification = 'Disease Type A'; // Replace with actual result from your logic

      // Navigate to ResultPage with image and classification
      navigate('/result', { state: { image: preview, classification } });
    }
  };

  const handleCancel = () => {
    setFile(null);
    setPreview(null);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-black to-orange-800">
      <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg shadow-md space-y-4 max-w-md w-full">
        <h2 className="text-2xl mb-4 text-center text-white">Upload Your Image</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:py-3 file:px-4 file:border file:border-gray-700 file:rounded-lg file:text-sm file:font-semibold file:bg-gray-800 hover:file:bg-gray-700"
          required
        />
        {preview && (
          <div className="mt-4">
            <img src={preview} alt="Image Preview" className="w-full h-auto rounded-md shadow-md border border-gray-600" />
          </div>
        )}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleCancel}
            className="bg-red-500 py-2 px-4 rounded-md text-white w-full mr-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4 rounded-md text-white w-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadPage;
