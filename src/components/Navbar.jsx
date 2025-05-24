import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <div className="font-bold">Aiden Ballard</div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
      </div>
    </nav>
  );
}

export default Navbar;