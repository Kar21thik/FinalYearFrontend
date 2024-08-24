import React, { useState } from 'react';

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

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
      // Handle file upload logic here
      console.log('Image submitted:', file);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-2xl mb-4 text-center">Upload Your Image</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:py-3 file:px-4 file:border file:border-gray-300 file:rounded-lg file:text-sm file:font-semibold file:bg-gray-50 hover:file:bg-gray-100"
          required
        />
        {preview && (
          <div className="mt-4">
            <img src={preview} alt="Image Preview" className="w-full h-auto rounded-md shadow-md" />
          </div>
        )}
        <button
          type="submit"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 rounded-md text-white w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UploadPage;
