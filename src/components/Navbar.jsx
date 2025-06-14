import { Link } from 'react-router-dom';
import linkedin from '../assets/linkedin.png';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between sticky top-0">
      <div className="font-bold">Aiden Ballard</div>
      <div className="space-x-4">
        {/* <Link href="https://www.linkedin.com/in/aiden-ballard/">
          <img
            className="h-5 w-5" 
            src={linkedin}
            alt="linkedin link"
          />
        </Link> */}
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </nav>
  );
}

export default Navbar;