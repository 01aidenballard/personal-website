import headshot from "../assets/aiden_mountain.jpg";

function Home() {
  const skills = {
    languages: ["Java", "Python", "C/C++", "HTML", "CSS", "JavaScript", "SQL", "VHDL"],
    tools: ["Technical Writing", "Git/GitHub", "React", "TailwindCSS", "ROS2", "Eclipse", "VSCode", "Microsoft Office", "Google Suite", "Quartus Prime", "NodeJS", "ExpressJS"],
    os: ["Windows", "Ubuntu", "Raspbian", "Debian", "Kali"]
  };

  const SkillBadge = ({ skill }) => (
    <span className="inline-block bg-slate-200 text-slate-600 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full">
      {skill}
    </span>
  );

  const lastUpdatedDate = "2 September 2025";

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Left Column / Intro */}
          <div className="lg:col-span-2 flex flex-col items-center text-center space-y-6 lg:sticky lg:top-31">
            <div className="relative">
              <img
                className="rounded-full h-100 w-100 object-cover object-center shadow-xl ring-4 ring-white"
                src={headshot}
                alt="Headshot of Aiden Ballard at Cooper's Rock"
              />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-bold text-slate-800">Hi, I'm Aiden Ballard</h1>
              <p className="text-xl text-slate-400 font-medium mt-2">Aspiring Software Engineer</p>
              <p className="text-xs mt-2 text-slate-400 ">Last Updated: {lastUpdatedDate}</p>
            </div>
          </div>

          {/* Right Column / Content (Spans 3 columns on large screens) */}
          <div className="lg:col-span-3 bg-white rounded-lg shadow-xl border border-slate-200">
            {/* About Me */}
            <section className="p-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">About Me</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  I am a Junior at West Virginia University studying Computer Science with a strong interest in software engineering and embedded systems. As an undergraduate research assistant, I collaborated with Mechanical and Aerospace Engineering students to produce autonomous, target-tracking, lighter-than-air drones (blimps, to the layman) for competition. I led the Vision subteam, where I focused on real-time object detection.
                </p>
                <p>
                  I also contributed to a published research paper on embedded artificial intelligence, which detailed the creation of an AI Ambassador for West Virginia University's Lane Department of Computer Science and Electrical Engineering (LCSEE). Feel free to check out these projects and more in my portfolio!
                </p>
                <p>
                  Outside of programming, I love reading, gaming, and playing Ultimate Frisbee, a passion that has led me to serve as Vice President, Captain, and now President of WVU Wild, our university’s competitive Ultimate team.
                </p>
              </div>
            </section>

            {/* Skills */}
            <section className="border-t border-slate-200 p-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Skills</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-600 mb-3">Programming Languages</h3>
                  <div>{skills.languages.map(skill => <SkillBadge key={skill} skill={skill} />)}</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-600 mb-3">Tools & Frameworks</h3>
                  <div>{skills.tools.map(skill => <SkillBadge key={skill} skill={skill} />)}</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-600 mb-3">Operating Systems</h3>
                  <div>{skills.os.map(skill => <SkillBadge key={skill} skill={skill} />)}</div>
                </div>
              </div>
            </section>

            {/* Reading List */}
            <section className="border-t border-slate-200 p-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Reading List</h2>
              <ul className="space-y-8">
                <li>
                  <h3 className="text-xl font-semibold text-slate-900">Brandon Sanderson's <i>The Way of Kings</i></h3>
                  <p className="text-slate-700 mt-2">
                    I have been trying to get into the Cosmere Universe for a long time and I finally found an available copy at my local bookstore. Excited to finish this and move on through the rest of the Stormlight Archive. Kaladin is definitely the most entertaining character of the first 200 pages.
                  </p>
                  <p className="text-sm italic text-slate-600 mt-3 border-l-4 border-indigo-200 pl-4">
                    "Life before death. Strength before weakness. Journey before destination."
                  </p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold text-slate-900">GuiltyThree's <i>Shadow Slave</i></h3>
                  <p className="text-slate-700 mt-2">
                    For those that don't know webnovels, this is one of the best out there. I love GuiltyThree's writing style and am currently on chapter 2440. Here are my favorite arcs: Forgotten Shore, The Fall of Antarctica, and the Third Nightmare.
                  </p>
                  <p className="text-sm italic text-slate-600 mt-3 border-l-4 border-indigo-200 pl-4">
                    "But here is a thing about luck... Luck is something you have to make happen yourself."
                  </p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold text-slate-900">Future Reads</h3>
                  <p className="text-slate-700 italic mt-2">
                    <i>Lord of the Mysteries</i>, the rest of the Stormlight Archive, Jeff Smith's <i>Bone</i>, and finally finishing <i>The Hobbit</i>.
                  </p>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;