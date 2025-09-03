import { Link, NavLink } from 'react-router-dom';
import linkedin from '../assets/linkedin.png'; 
import github from '../assets/icons8-github.svg';



function Navbar() {


  const activeLinkStyle = {
    fontWeight: '600',
    color: '#94A3B8', // slate-400
    textDecoration: 'underline',
    textUnderlineOffset: '4px'
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm p-4 flex justify-between items-center sticky top-0 z-50 border-b border-slate-200 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side: My Name */}
        <Link to="/" className="text-2xl font-bold text-slate-800 hover:text-slate-400 transition-colors duration-300">
          Aiden Ballard
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink 
            to="/" 
            className="text-slate-600 font-medium hover:text-slate-400 transition-colors duration-300"
            style={({ isActive }) => isActive ? activeLinkStyle : undefined}
          >
            Home
          </NavLink>
          <NavLink 
            to="/projects" 
            className="text-slate-600 font-medium hover:text-slate-400 transition-colors duration-300"
            style={({ isActive }) => isActive ? activeLinkStyle : undefined}
          >
            Projects
          </NavLink>
          <NavLink 
            to="/experience" 
            className="text-slate-600 font-medium hover:text-slate-400 transition-colors duration-300"
            style={({ isActive }) => isActive ? activeLinkStyle : undefined}
          >
            Experience
          </NavLink>
        </div>

        {/* Right Side: Social Link */}
        <div className="flex items-center space-x-4">
          <a href="https://www.linkedin.com/in/aiden-ballard/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-800 hover:bg-slate-400 transition-colors duration-300">
            <img
              className="h-6 w-6" 
              src={linkedin}
              alt="LinkedIn Profile"
            />
          </a>
          <a href= "https://github.com/01aidenballard" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-800 hover:bg-slate-400 transition-colors duration-300">
            <img
              className="h-6 w-6"
              src={github}
              alt="GitHub Profile"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;