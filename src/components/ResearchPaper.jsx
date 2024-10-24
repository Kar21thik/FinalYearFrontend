
import React from 'react';

const ResearchPaper = () => {
  const pdfLinks = [
    {
      title: "Base Research Paper",
      viewUrl: "https://www.mdpi.com/2227-9032/11/2/212/pdf", // Base Paper Link
    },
    {
      title: "Project Paper",
      viewUrl: "https://link-to-our-project-paper.pdf", // Replace with actual project paper link
    },
    {
      title: "Transformer Paper",
      viewUrl: "https://link-to-paper-1.pdf", // Replace with actual PDF link
    },
    {
      title: "Additional Paper 2",
      viewUrl: "https://link-to-paper-2.pdf", // Replace with actual PDF link
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Research Papers</h2>

      {/* Base Paper Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">Base Research Paper</h3>
          <a
            href={pdfLinks[0].viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-orange-500 to-black text-white py-2 px-4 rounded-md hover:from-orange-600 hover:to-black"
          >
            Download PDF
          </a>
        </div>
        <hr className="my-4 border-t-2 border-gray-300" />
      </div>

      {/* Our Project Paper Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Project Paper</h3>
          <a
            href={pdfLinks[1].viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-orange-500 to-black text-white py-2 px-4 rounded-md hover:from-orange-600 hover:to-black"
          >
            Download PDF
          </a>
        </div>
        <hr className="my-4 border-t-2 border-gray-300" />
      </div>

      {/* Additional Papers */}
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Transformer Model Paper</h3>
          <a
            href={pdfLinks[2].viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-orange-500 to-black text-white py-2 px-4 rounded-md hover:from-orange-600 hover:to-black"
          >
            Download PDF
          </a>
        </div>
        <hr className="my-4 border-t-2 border-gray-300" />
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Additional Paper 2</h3>
          <a
            href={pdfLinks[3].viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-orange-500 to-black text-white py-2 px-4 rounded-md hover:from-orange-600 hover:to-black"
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResearchPaper;
