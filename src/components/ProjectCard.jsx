

function ProjectCard({ project }) {

    {/* 
        Project
        - title: string
        - description: string
        - image: string (src from public folder)
    */}

    return (
        <div className="inline-block border border-slate-300 p-4 mr-4 rounded-md shadow-md w-100 h-100">
            <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
            <p className="text-slate-700 mt-2">{project.description}</p>
        </div>
    );
}

export default ProjectCard;