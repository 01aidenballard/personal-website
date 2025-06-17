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
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* Left / PDF Viewer*/}
      <div className="p-8">

        
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
      {/* Right / Experience */}
      <div className="p-8 flex flex-col">
        <h2 className="text-2xl center font-bold mb-4">Experience</h2>
        <ul className="list-disc pl-5 space-y-4">
          <li>
            <strong> Embedded Artifical Intelligence Intern</strong> at West Virginia University ( February 2025 - Present)
            <ul className="list-['-'] list-inside ml-4">
              <li>  Expanded dataset 7x using data augmentation for enhanced natural language processing and
                  model training.</li>
              <li>  Developed a Python-based speech recognition and text-to-speech interface, achieving response
                  times under 4 seconds.</li>
            </ul>
          </li>
          <li>
            <strong>Engineering Tutor</strong> at West Virginia University (August 2024 - Present)
            <ul className="list-['-'] list-inside ml-4">
              <li>  Assist university students in learning mathematics, computer science, and engineering.</li>
              <li>  Act as a help desk for general inquiries.</li>
            </ul>
          </li>
          <li>
            <strong>Student Worker</strong> at West Virginia University (August 2023 - Present)
            <ul className="list-['-'] list-inside ml-4">
              <li>  Maintained an organized office space, handled office mail, and received/directed calls.</li>
            </ul>
          </li>
          <li>
            <strong>Undergraduate Lab Assistant</strong> at West Virginia University (September 2023 - August 2024)
            <ul className="list-['-'] list-inside ml-4">
              <li>  Researched computer vision tracking techniques, and led the Visions subteam in development, to detect objects in real time producing a 75%
                  accuracy rate on edge devices.</li>
              <li>  Facilitated autonomy in drones using ROS2 resulting in a successful, autonomous capture
                  during competition.</li>
            </ul>
          </li>
          <li>
            <strong>Accomplished Customer Expert</strong> at Oberweis Dairy (October 2021 - August 2023)
            <ul className="list-['-'] list-inside ml-4">
              <li>  Prepared, stocked, and sold frozen and fresh dairy items.</li>
              <li>  Handled elevated customer complaints and trained new employees.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
