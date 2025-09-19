import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import AOS from "aos";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "Listings", "Agents", "Contact"];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  })

  return (
    <nav data-aos="fade-down" className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-2xl border-b border-white/10 shadow-lg">
      <div className="container mx-auto px-6 md:px-16 flex justify-between items-center h-16">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
        >
          RealEstateCo
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-200">
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item}>
                <NavLink
                  to={
                    item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`
                  }
                  className={({ isActive }) =>
                    `hover:text-cyan-300 transition-all duration-300 font-semibold ${isActive ? "text-cyan-300" : ""
                    } `
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-200"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-black/70 backdrop-blur-2xl border-t border-white/10 overflow-hidden transition-all duration-500 ease-in-out
        ${isOpen ? "max-h-96 opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"}`}
      >
        <ul className="flex flex-col gap-6 p-6 text-gray-200 text-lg">
          {navItems.map((item) => (
            <li key={item}>
              <NavLink
                to={
                  item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`
                }
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `hover:text-cyan-300 transition-all duration-300 font-semibold ${isActive ? "text-cyan-300" : ""
                  } `
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
