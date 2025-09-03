import { useState, useEffect } from 'react';

function ProjectCard({ project }) {
  
    const [isClicked, setIsClicked] = useState(false);
    const [isVideo, setIsVideo] = useState(false);

    const handleCardClick = () => {
        setIsClicked(!isClicked);
    };

    useEffect(() => {
        setIsVideo(!!project.video); 
      }, [project]);


    const TechBadge = ({ skill }) => (
    <span className="inline-block bg-slate-200 text-slate-600 text-sm font-medium mt-2 mr-2 mb-2 px-3 py-1 rounded-full">
        {skill}
    </span>
    );

        return (
        <>
            <div className="inline-block border border-slate-300 p-4 m-4 rounded-md shadow-md w-100 h-140 cursor-pointer transition duration-100 hover:scale-110" 
            onClick={handleCardClick}>
                <h3 className="text-xl font-semibold text-slate-900 text-center">{project.title}</h3>
                <p className="text-slate-700 mt-2 text-center">{project.briefDescription}</p>
                <img className="items-center mt-8" src={project.cover} alt={project.title} width="480" height ="360" />
            </div>
            <div className="fixed inset-0 flex items-center justify-center z-50 text-center backdrop-blur"  onClick={handleCardClick} hidden={!isClicked}>
                <div className="bg-white border border-slate-300 p-6 rounded-md shadow-md w-300 max-w-[60%] h-300 max-h-[60%] transition duration-300 ease-in-out"
                onClick={(e) => e.stopPropagation()} >
                    <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                    <div>{project.techStack.map(skill => <TechBadge key={skill} skill={skill} />)}</div>
                    <div className="grid grid-cols-2">
                        <div className="flex justify-center items-center text-left">
                            <p className="text-slate-700 mt-4">&nbsp;{project.longDescription}</p>
                        </div>
                        <div className="flex justify-center items-center">
                            {isVideo ? (
                                <video className="ml-2" width="480" height="360" controls preload="auto">
                                <source src={project.media} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            ) : (
                                <img className="ml-2" src={project.media} alt={project.title} width="480" height ="360" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
        );
}

export default ProjectCard;
