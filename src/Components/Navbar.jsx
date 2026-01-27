import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuArrowDownRight } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../state/menuSlice";
import { Link } from "react-scroll";

const Navbar = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  const links = [
    { link: "About Me", section: "about" },
    { link: "Skills", section: "skills" },
    { link: "Projects", section: "projects" },
    { link: "Contact", section: "contact" },
  ];

  return (
    <nav className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1300px] px-4">
      <div className="flex justify-between items-center w-full p-4 md:p-6 bg-black border border-orange rounded-full shadow-md">

        {/* Logo / Name */}
        <div>
  <h1 className="text-cyan-400 mb-4 font-semibold text-2xl hidden sm:block">
    Punam Manna
  </h1>
  <h1 className="text-white font-extrabold text-3xl sm:hidden">
    PM
  </h1>
</div>


        {/* Desktop Links */}
        <div className="hidden lg:block">
          <ul className="flex gap-6 text-white font-body text-md">
            {links.map((link, i) => (
              <li key={i} className="group relative">
                <Link
                  to={link.section}
                  smooth={true}
                  duration={500}
                  offset={-130}
                  className="cursor-pointer transition-all duration-300 hover:text-cyan-400 hover:scale-105"
                >
                  {link.link}
                </Link>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hire Me Button */}
        <button
          className="px-4 py-2 rounded-full text-white text-lg font-bold font-body flex items-center gap-1 
            border border-cyan-400 
            bg-gradient-to-r from-[#00bcd4] to-[#ff5722] 
            transition-all duration-300 
            hover:scale-105 hover:shadow-lg"
        >
          <Link to="contact" smooth={true} duration={500} offset={-120}>
            Hire Me
          </Link>
          <span className="hidden sm:inline">
            <LuArrowDownRight />
          </span>
        </button>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => dispatch(toggleMenu())}
            className="text-2xl p-2 border border-orange rounded-full text-white"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-2 bg-cyan/20 backdrop-blur-md rounded-xl py-4 shadow-md">
          <ul className="flex flex-col gap-4 text-center text-white font-body text-xl">
            {links.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.section}
                  smooth={true}
                  duration={500}
                  offset={-130}
                  onClick={() => dispatch(toggleMenu())}
                  className="block py-1 transition-all hover:text-cyan-400"
                >
                  {link.link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
