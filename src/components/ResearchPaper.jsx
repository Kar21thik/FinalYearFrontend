// components/ResearchPaper.jsx
// import React from 'react';

const ResearchPaper = () => {
  const pdfLinks = [
    {
      title: "Research Paper 1",
      viewUrl: "https://www.mdpi.com/2227-9032/11/2/212/pdf", // Direct PDF link
      downloadUrl: "https://www.mdpi.com/2227-9032/11/2/212/pdf", // Use the same URL for download
    },
    {
      title: "Research Paper 2",
      viewUrl: "link-to-paper-2.pdf", // Replace with actual PDF link
      downloadUrl: "link-to-paper-2.pdf",
    },
    {
      title: "Research Paper 3",
      viewUrl: "link-to-paper-3.pdf", // Replace with actual PDF link
      downloadUrl: "link-to-paper-3.pdf",
    },
    {
      title: "Research Paper 4",
      viewUrl: "link-to-paper-4.pdf", // Replace with actual PDF link
      downloadUrl: "link-to-paper-4.pdf",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Research Papers</h2>
      <ul className="list-none">
        {pdfLinks.map((paper, index) => (
          <li key={index} className="mb-4 flex items-center justify-between">
            <span className="text-blue-500 hover:underline">{paper.title}</span>
            <div>
              <a
                href={paper.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600 mx-2"
              >
                View
              </a>
              <a
                href={paper.downloadUrl}
                download
                className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600"
              >
                Download
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResearchPaper;
