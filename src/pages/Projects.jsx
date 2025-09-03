import ProjectCard from '../components/ProjectCard';


function Projects() {
  
  return (
    <div className="p-8">
      <ul className= "flex grid grid-cols-3 place-items-center">
        <ProjectCard 
          project={{ 
            title: "Attacker Blimp", 
            briefDescription: "The attacker drone for WVU's competing team at Defend the Republic.",
            techStack: ["ROS2", "C++", "Python", "OpenCV", "Raspberry Pi 02W", "Raspberry Pi 4B"],
            longDescription: "The Attacker Blimp was my first collegiant project. I was fortunate to land a research position as a freshman where they had me shadow the Controls team. The group was full of Mechanical/Aerospace and Electrical Engineers, so I got to learn a lot about many disciplines as I was figuring out what I wanted to study. After I had got comfortable in the team, I was elected to lead the Visions subteam where I led another CS student and occasional assitant to design our targeting algorithms using C++/Python and OpenCV on Raspberry Pi 4bs and Zero 2Ws. I had a blast working on this side of the project and was very proud to see it in action at the competition! In the video, you can notice the spinning, rising motion the blimp does. This is our searching method, where the blimb spins and rises until it spots an object, where it will then store the coordinates and location data it had until it can bring the object back into view.",
            video: true,
            media: "/videos/attacker.mp4",
            cover: "/drones.jpg"}} />
        <ProjectCard project={{
           title: "Defender Blimp", 
           briefDescription: "The defender drone for WVU's competing team at Defend the Republic.",
           techStack: ["ROS2", "C++", "Python", "Raspberry Pi 02W"],
           longDescription: "The Bomber, as we called him. A few weeks before the competition, we realized that our defense needed more work as the other drone could not handle both on our hardware. I was pulled from my Visions subteam to help the lead engineer on this project, as I was to carry on the team's legacy after they graduated. The design was three balloons for stability, three motors that moved along eigenvectors, and a work-in-progress net drop system. Unfortunately, the net drop system was pushed for the next semester. These bad guys traversed the arena following the Random Walk theory. They ran without cameras, but acted as a mobile shield to defend our goals. As the prototypes that they were, these were our greatest accomplishment as a team and produced more than acceptable results. Used a barometer to hold altitude and an IMU to for orientation.",
           video: true,
           media: "/videos/defender.mp4",
           cover: "/drones.jpg"}} />
        <ProjectCard project={{ 
          title: "Snowhere You're Going", 
          briefDescription: "Software Engineering Class Project: a cloud-based, data-driven web application. Meet, Snowhere You're Going, an app to help you find ski resorts in the US, plan trips around them, and review your experience!",
          techStack: ["JavaScript", "HTML", "CSS", "NodeJS", "ExpressJS", "Azure", "SQL"],
          longDescription: "Snowhere You're Going was a class project for my Introduction to Software Engineering course at WVU. Here, we were sponsored by NOAA to work with live data from their APIs and hosted on a Azure server they provided. I worked with 8 partners in 4, 2-week sprints to build our app. I was elected the Product Owner and facilitated our team's work so that it fit our project's goals. As a developer, I built our database infrastructure using the provided Azure SQL Server. Furthermore, I built authentication and secure SQL queries to handle all user data our app received. I was also the handyman of the group, where I handled miscellaneous errors and bugs that came up during tests and development.",
          video: false,
          media: "/snowhere.png",
          cover: "/snowhere.png" }} />
          <ProjectCard project={{
            title: "AI Ambassador (Work in Progress)",
            briefDescription: "An embedded AI assistant for the Lane Department of Computer Science and Electrical Engineering at WVU.",
            techStack: ["Python", "Raspberry Pi 4B", "Hugging Face"],
            longDescription: "",
            video: false,
            media: "",
            cover: ""
          }}/>
      </ul>
    </div>
  );
}

export default Projects;