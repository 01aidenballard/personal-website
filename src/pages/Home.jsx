import headshot from "../assets/aiden_mountain.jpg";

function Home() {
  return (
    <div className="mx-auto p-6 space-y-10">
      {/* Intro Section */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Aiden Ballard</h1>
        <img
          className="object-cover object-center rounded-full h-64 w-64 mb-4 shadow-md"
          src={headshot}
          alt="Headshot of Aiden Ballard at Cooper's Rock"
        />
        <p className="text-xl text-gray-600">Aspiring Software Engineer</p>
      </div>

      {/* About Me */}
      <section className="space-y-4 border-t pt-6">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="text-md leading-relaxed text-gray-700">
          I am currently a Junior at West Virginia University studying Computer Science with a strong interest in software engineering and embedded systems. 
          As an undergraduate research assistant, I collaborated with Mechanical and Aerospace Engineering students to produce autonomous, target-tracking,  
          lighter-than-air drones (blimps, to the layman) for competition. I led the Vision subteam, where I focused on real-time object detection.
          I also contributed to a published research paper on embedded artificial intelligence, which detailed the creation of an AI Ambassador for West Virginia University's 
          Lane Department of Computer Science and Electrical Engineering (LCSEE). Feel free to check out these projects and more in my portfolio!
        </p>
        <p className="text-md leading-relaxed text-gray-700">
          Outside of programming, I love reading, gaming, and playing Ultimate Frisbee, a passion that has led me to serve as Vice President, Captain, and now President of WV Wild, 
          our university’s competitive Ultimate team.
        </p>
      </section>

      {/* Skills */}
      <section className="space-y-4 border-t pt-6">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <ul className="space-y-4 text-gray-700">
          <li>
            <h3 className="italic text-lg">Programming Languages</h3>
            <p className="text-sm ml-4">Java, Python, C/C++, HTML, CSS, JavaScript, SQL, VHDL</p>
          </li>
          <li>
            <h3 className="italic text-lg">Tools and Frameworks</h3>
            <p className="text-sm ml-4">Git/GitHub, React, TailwindCSS, ROS2, Eclipse, VSCode, Microsoft Office, Google Suite, Quartus Prime</p>
          </li>
          <li>
            <h3 className="italic text-lg">Operating Systems</h3>
            <p className="text-sm ml-4">Windows (10/11), Ubuntu (22.04+), Raspbian, Debian, Kali</p>
          </li>
        </ul>
      </section>
  
      {/* Reading List */}
      <section className="space-y-4 border-t pt-6">
        <h2 className="text-2xl font-semibold">Reading List</h2>
        <ul className="space-y-6">
          <li>
            <h3 className="text-xl font-medium">
              Brandon Sanderson's <i>The Way of Kings</i>
            </h3>
            <p className="text-gray-700">
              I have been trying to get into the Cosmere Universe for a long time and I finally found an available copy at my local bookstore. 
              Excited to finish this and move on through the rest of the Stormlight Archive. Kaladin is definitely the most entertaining character of the first 200 pages.
            </p>
            <p className="text-sm italic text-gray-500 mt-2">
              "Life before death. Strength before weakness. Journey before destination."
            </p>
          </li>
          <li>
            <h3 className="text-xl font-medium">
              GuiltyThree's <i>Shadow Slave</i>
            </h3>
            <p className="text-gray-700">
              For those that don't know webnovels, this is one of the best out there. I love GuiltyThree's writing style and am currently on chapter 2066. Here are my favorite arcs: Forgotten Shore, The Fall of Antarctica, and the Third Nightmare.
            </p>
            <p className="text-sm italic text-gray-500 mt-2">
              "But here is a thing about luck. People usually speak about it as though luck is something that just happens to you. It's not. Luck is fifty percent circumstance and fifty percent your own ability to grasp it. Luck is something you have to make happen yourself."
            </p>
          </li>
          <li>
            <h3 className="text-xl font-medium">Future Reads</h3>
            <p className="text-gray-700 italic">
              <i>Lord of the Mysteries</i>, the rest of the Stormlight Archive, Jeff Smith's <i>Bone</i>, and finally finishing <i>The Hobbit</i>
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
