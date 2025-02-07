import { Link } from "react-scroll";


const Navbar = () => {
  return (
    <div className="navbar bg-black relative">
      <div className="navbar-start relative">

      <a className="btn btn-ghost text-2xl">RIFAT</a>
        {/* <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div> */}
        {/* Fixing Dropdown */}
        {/* <ul
          tabIndex={0}
          className="menu menu-sm absolute left-0 top-full bg-transparent rounded-box z-50 mt-2 w-52 p-2 shadow"
        >
          <li>
            <Link to="about" smooth={true} duration={500}>
              
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} duration={500}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul> */}
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} duration={500}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a href="/public/RifatResume.pdf" download={"My_resume.pdf"} className="btn bg-red-700">Resume</a>
      </div>
    </div>
  );
};

export default Navbar;
