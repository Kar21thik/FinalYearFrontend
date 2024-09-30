// UploadPage.jsx
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

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
      const formData = new FormData();
      formData.append('file', file);

      setLoading(true); // Show loading indicator

      fetch('http://localhost:8080/predict', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setLoading(false); // Hide loading indicator
          if (data.error) {
            setResult(`Error: ${data.error}`);
          } else {
            setResult(`Classification Result: ${data.result}`);
          }
        })
        .catch((error) => {
          setLoading(false); // Hide loading indicator
          setResult(`Error: ${error.message}`);
        });
    }
  };

  const handleCancel = () => {
    setFile(null);
    setPreview(null);
    setResult('');
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
        {loading && <div className="text-white text-center">Loading...</div>}
        {result && <div className="text-white text-center mt-4">{result}</div>}
      </form>
    </div>
  );
};

export default UploadPage;