import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// // Setup for the PDF.js worker
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.mjs',
//   import.meta.url,
// ).toString();

{/* <Document
                file="/Aiden-Ballard-Resume.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={console.error}
                loading={<p className="text-center p-6 text-slate-500">Loading PDF...</p>}
                error={<p className="text-center p-6 text-red-500">Failed to load PDF.</p>}
              >
                <Page pageNumber={1} width={550} />
              </Document> */}

function Experience() {
  const [numPages, setNumPages] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleCardClick =() => {
    setIsClicked(!isClicked);
  }


  return (
    <div className="bg-slate-50">
      <div className="container mx-auto px-4 py-3">
        <div className="grid grid-cols-2 gap-12">
          
          {/* Left Column / PDF Viewer*/}
          <div className="flex flex-col items-center">
            <div className="w-135 max-w-xl border border-slate-200 rounded-lg shadow-xl overflow-hidden bg-white">
              <iframe className="border-none" src="/Aiden-Ballard-Resume.pdf#toolbar=0&navpanes=0&scrollbar=0" height="675" width="100%" />
            </div>
            <a
              href="/Aiden-Ballard-Resume.pdf"
              download
              className="mt-2 bg-blue-600 hover:bg-slate-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              Download Resume
            </a>
          </div>

          {/* Right Column / Experience / Coursework*/}
          <div className="p-2 bg-white rounded-lg shadow-xl border border-slate-200 hover:scale-102" onClick={handleCardClick} hidden={isClicked}>
          <h2 className="text-2xl font-bold text-slate-900 text-center">Work History</h2>
            <ul className="space-y-6">
              <li>
                <h3 className="text-xl font-semibold text-slate-900">Embedded Artificial Intelligence Intern</h3>
                <p className="text-sm text-slate-500 italic">West Virginia University (February 2025 - Present)</p>
                <ul className="list-disc list-inside mt-2 ml-4 space-y-2 text-slate-700">
                  <li>Optimized dataset retrieval by caching vectors in a persistent file structure, reducing retrieval
                  time on average by 84%.</li>
                  <li>Improved machine learning model accuracy by 13% through dataset expansion (15x larger),
                  data augmentation, and hyperparameter fine-tuning for enhanced natural language processing.</li>
                </ul>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-slate-900">Engineering Tutor</h3>
                <p className="text-sm text-slate-500 italic">West Virginia University (August 2024 - Present)</p>
                <ul className="list-disc list-inside mt-2 ml-4 space-y-2 text-slate-700">
                  <li>Assist university students in learning mathematics, computer science, and engineering.</li>
                  <li>Act as a help desk for general inquiries.</li>
                </ul>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-slate-900">Student Worker</h3>
                <p className="text-sm text-slate-500 italic">West Virginia University (August 2023 - Present)</p>
                <ul className="list-disc list-inside mt-2 ml-4 space-y-2 text-slate-700">
                  <li>Maintained an organized office space, handled office mail, and received/directed calls.</li>
                </ul>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-slate-900">Undergraduate Lab Assistant</h3>
                <p className="text-sm text-slate-500 italic">West Virginia University (September 2023 - August 2024)</p>
                <ul className="list-disc list-inside mt-2 ml-4 space-y-2 text-slate-700">
                  <li>Researched computer vision tracking techniques, and led the Visions subteam in development, to detect objects in real time producing a 75% accuracy rate on edge devices.</li>
                  <li>Facilitated autonomy in drones using ROS2 resulting in a successful, autonomous capture during competition.</li>
                </ul>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-slate-900">Accomplished Customer Expert</h3>
                <p className="text-sm text-slate-500 italic">Oberweis Dairy (October 2021 - August 2023)</p>
                <ul className="list-disc list-inside mt-2 ml-4 space-y-2 text-slate-700">
                  <li>Prepared, stocked, and sold frozen and fresh dairy items.</li>
                  <li>Handled elevated customer complaints and trained new employees.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-xl border border-slate-200 hover:scale-102" onClick={handleCardClick} hidden={!isClicked}>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 text-center">Coursework (Taken/In-Progress(IP))</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>Microprocessor Systems (IP)</li>
              <li>Data and Computer Communications (IP)</li>
              <li>Analysis of Algorithms (IP)</li>
              <li>Linear Algebra (IP)</li>
              <li>Technical Writing (IP)</li>
              <li>File and Data Structures</li>
              <li>Discrete Mathematics</li>
              <li>Software Engineering</li>
              <li>Principles of Programming Languages</li>
              <li>Computer System Concepts</li>
              <li>Cybersecurity Principles and Practice</li>
              <li>Secure Software Development</li>
              <li>Calculus I, II, and III</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;