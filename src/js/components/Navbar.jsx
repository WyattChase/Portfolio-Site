import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import placeholderLogo from "../../../public/assets/jaysax.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-sm shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo + Name */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="flip-card">
            <div className="flip-inner">
              <img
                src={placeholderLogo}
                alt="Logo Front"
                className="flip-front"
              />
              <img
                src="/assets/alternate-logo.jpg" // update path if needed
                alt="Logo Back"
                className="flip-back"
              />
            </div>
          </div>
          <span className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Jean St. Cloud
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-white text-lg font-medium">
          <ul className="flex space-x-8">
            {navLinks.map(({ name, path }) => (
              <li key={name}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `relative hover:text-teal-300 transition duration-200 ${
                      isActive ? "text-teal-400" : "text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {name}
                      {isActive && (
                        <motion.span
                          layoutId="underline"
                          className="absolute left-0 -bottom-1 w-full h-0.5 bg-teal-400"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Hire Me Button */}
          <a
            href="#contact"
            className="ml-6 px-5 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-black/80 text-white flex flex-col items-center space-y-4 py-6 px-4"
          >
            {navLinks.map(({ name, path }) => (
              <li key={name}>
                <NavLink
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-medium hover:text-teal-300 transition"
                >
                  {name}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-block px-5 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold transition"
              >
                Hire Me
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
