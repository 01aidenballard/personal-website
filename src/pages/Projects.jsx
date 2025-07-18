import ProjectCard from '../components/ProjectCard';


function Projects() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <ProjectCard project={{ title: "Project 1", description: "Description for project 1" }} />
      <ProjectCard project={{ title: "Project 2", description: "Description for project 2" }} />
      <ProjectCard project={{ title: "Project 3", description: "Description for project 3" }} />
    </div>
  );
}

export default Projects;