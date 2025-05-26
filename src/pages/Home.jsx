import headshot from "../assets/aiden_mountain.jpg";

function Home() {
  return (
    <>
      <div className="p-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Left */}
        <div className="flex flex-col items-center">
          {/* Left Top */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl font-bold mb-4">Hi, I'm Aiden Ballard</h1>
            <img className="object-cover object-center rounded-full h-96 w-96 mb-4" src={headshot} alt="Headshot of Aiden Ballard" />
            <p className="text-lg mb-6">Aspiring Software Engineer</p>
          </div>
          {/* Left Bottom */}
          <div>
            <h2 className="text-xl font-bold mb-2">About me</h2>
            <p className="text-sm">
              I am currently a Junior at West Virgina University studying Computer Science with a strong interest in software engineering and embedded systems. 
              As an undergraduate research assisstant, I collaborated with Mechanical and Aerospace Engineering students to produce autonomous, target-tracking,  
              lighter-than-air drones (blimps, to the layman) for competition. I led the Vision subteam, where I focused on real-time object detection.
              I also contributed to a published research paper on embedded artificial intelligence, which detailed the creation of an AI Ambassador for West Virginia University's 
              Lane Department of Computer Science and Electrical Engineering (LCSEE). Feel free to check out these projects and more in my porfolio! Outside of programming, 
              I love reading, gaming, and playing Ultimate Frisbee, a passion that has led me to serve as Vice President, Captain, and now President of WV Wild, 
              our university’s competitive Ultimate team. 
            </p>
          </div>
        </div>
        {/* Contact Form Component */}
      </div>
    </>
  );
}

export default Home;
