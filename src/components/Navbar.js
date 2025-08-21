import React from "react";

export default function Navbar({ dark, setDark }) {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="#home" className="brand">Portfolio</a>
      </div>
      <ul className="nav-links">
        <li><a href="#home" aria-label="Home">Home</a></li>
        <li><a href="#about" aria-label="About">About</a></li>
        <li><a href="#resume" aria-label="Resume">Resume</a></li>
        <li><a href="#skills" aria-label="Skills">Skills</a></li>
        <li><a href="#projects" aria-label="Projects">Projects</a></li>
        <li><a href="#contact" aria-label="Contact">Contact</a></li>
        <li><a href="#comedy" aria-label="Comedy">Comedy</a></li>
      </ul>
      <button
        className="theme-toggle"
        onClick={() => setDark((d) => !d)}
        aria-label="Toggle theme"
        title="Toggle light/dark"
      >
        {dark ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}
