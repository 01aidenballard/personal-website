import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function Experience() {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="p-8">

      {/* PDF Viewer */}
      <div className="mx-auto max-w-xl border border-gray-300 rounded shadow-md overflow-hidden">
        <Document
          file="/Aiden-Ballard-Resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={console.error}
          loading={<p className="text-center p-4">Loading PDF...</p>}
          error={<p className="text-center p-4 text-red-600">Failed to load PDF.</p>}
        >
          <Page pageNumber={1} />
        </Document>
      </div>

      {/* Download Button */}
      <div className="mt-4 text-center">
        <a
          href="/Aiden-Ballard-Resume.pdf"
          download
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Experience;
