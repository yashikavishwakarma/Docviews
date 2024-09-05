import React, { useState } from 'react';
import bgImage from '../src/images/img.jpg'; // Adjust the path based on your component's location

const DocumentUploader = () => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setPreviewUrl(URL.createObjectURL(uploadedFile));
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setPreviewUrl(null);
    URL.revokeObjectURL(previewUrl);
  };

  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url(${bgImage})` }}>
      
      {/* Heading at the Top with Shadow */}
      <header className="w-full py-6 bg-white bg-opacity-0 text-center shadow-lg">
        <h1 className="text-8xl font-bold text-white shadow-lg">DocView</h1>
      </header>

      {/* Content Section with Box Color and Shadow */}
      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-md w-full p-6 bg-white shadow-2xl rounded-lg bg-opacity-90 ">
          <h2 className="text-xl font-semibold mb-4 text-center">Upload and View Document</h2>
          <input
            type="file"
            accept=".pdf,.doc,.docx,.txt"
            onChange={handleFileUpload}
            className="mb-4 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          
          {file && (
            <div className="mt-4 text-center">
              <p className="text-sm"><strong>File Name:</strong> {file.name}</p>
              <p className="text-sm"><strong>File Size:</strong> {(file.size / 1024).toFixed(2)} KB</p>
              <button
                onClick={handleRemoveFile}
                className="mt-2 inline-block bg-red-500 text-white text-sm px-4 py-2 rounded hover:bg-red-600"
              >
                Remove File
              </button>
            </div>
          )}
          
          {previewUrl && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2 text-center">Preview:</h3>
              <iframe
                src={previewUrl}
                width="100%"
                height="400px"
                title="Document Preview"
                className="border border-gray-300 rounded"
              ></iframe>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default DocumentUploader;


