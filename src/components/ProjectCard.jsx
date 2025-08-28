import { useState } from 'react';

function ProjectCard({ project }) {
  
    const [isClicked, setIsClicked] = useState(false);

    const handleCardClick = () => {
        setIsClicked(!isClicked);
    };

    if (!isClicked) {
        return (
        <div className="inline-block border border-slate-300 p-4 m-4 rounded-md shadow-md w-100 h-100 cursor-pointer transition duration-100 hover:scale-110" 
        onClick={handleCardClick}>
            <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
            <p className="text-slate-700 mt-2">{project.briefDescription}</p>
        </div>
        );
    } else {
        return (
        <div className="fixed inset-0 flex items-center justify-center z-50 " onClick={handleCardClick}>
            <div className="bg-white border border-slate-300 p-6 rounded-md shadow-md w-300 max-w-[60%] h-300 max-h-[60%] transition duration-300 ease-in-out"
             onClick={(e) => e.stopPropagation()} >
            <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
            <p className="text-slate-700 mt-4">{project.longDescription}</p>
            </div>
        </div>
        );
    }
}

export default ProjectCard;
