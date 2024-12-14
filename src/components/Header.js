import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function Header() {
    const { isDarkMode, toggleMode } = useTheme();

  return (
    <header className={`sticky-top top-0 z-50 shadow-md ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className={`text-2xl font-bold ${isDarkMode ? "text-gold" : "text-black"}`}>My Portfolio</h1>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-gold transition">Home</a></li>
          <li><a href="#about" className="hover:text-gold transition">About</a></li>
          <li><a href="#projects" className="hover:text-gold transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-gold transition">Contact</a></li>
        </ul>
        <button
          onClick={toggleMode}
          className={`ml-6 px-4 py-2 rounded-md transition ${isDarkMode? "text-white" : "text-black"}`}
        >
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="text-xl" />
        </button>
      </nav>
    </header>
  );
}

export default Header;
