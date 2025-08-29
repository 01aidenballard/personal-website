import ProjectCard from '../components/ProjectCard';


function Projects() {
  
  return (
    <div className="p-8">
      <ul className= "flex grid grid-cols-3 place-items-center">
        <ProjectCard 
          project={{ 
            title: "Attacker Blimp", 
            briefDescription: "The attacker drone for WVU's competing team at Defend the Republic.",
            longDescription: "The Attacker Blimp was my first collegiant project. I was fortunate to land a research position as a freshman where they had me shadow the Controls team. The group was full of Mechanical/Aerospace and Electrical Engineers, so I got to learn a lot about many disciplines as I was figuring out what I wanted to study. After I had got comfortable in the team, I was elected to lead the Visions subteam where I led another CS student and occasional assitant to design our targeting algorithms using C++/Python and OpenCV on Raspberry Pi 4bs and Zero 2Ws. I had a blast working on this side of the project and was very proud to see it in action at the competition! That was short lived as we did horribly, but I had a lot of fun and gained more experience there than from any of my courses at that point.",
            video: true,
            mediaLink: "../assets/Videos/attacker.MOV"  }} />
        <ProjectCard project={{
           title: "Defender Blimp", 
           briefDescription: "The defender drone for WVU's competing team at Defend the Republic.",
           longDescription: "The Bomber, as we called him. A few weeks before the competition, we realized that our defense needed more work as the other drone could not handle both on our hardware. I was pulled from my Visions subteam to help the lead engineer on this project, as I was to carry on the team's legacy after they graduated. The design was three balloons for stability, three motors that moved along eigenvectors, and a work-in-progress net drop system. Unfortunately, the net drop system was pushed for the next semester. These bad guys traversed the arena following the Random Walk theory. They ran without cameras, but acted as a mobile shield to defend our goals. As the prototypes that they were, these were our greatest accomplishment as a team and produced more than acceptable results.",
           video: true,
           mediaLink: "../assets/Videos/defender.MOV"}} />
        <ProjectCard project={{ 
          title: "Snowhere You're Going", 
          briefDescription: "Software Engineering Class Project: a cloud-based, data-driven web application. Meet Snowhere You're Going, an app to help you find ski resorts in the US, plan trips around them, and review your experience!" }} />
      </ul>
    </div>
  );
}

export default Projects;