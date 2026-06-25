import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="container navbar-container">

        {/* Logo */}

        <a href="#" className="logo">
          JD & Co<span>.</span>
        </a>

        {/* Desktop Menu */}

        <nav className="nav-links">

          <a href="#about">About</a>

          <a href="#services">Services</a>

          <a href="#projects">Projects</a>

          <a href="#pricing">Solutions</a>

          <a href="#contact">Contact</a>

        </nav>

        {/* Desktop CTA */}

        <a href="#contact" className="nav-btn">
          Let's Talk
        </a>

        {/* Mobile Actions */}

        <div className="mobile-actions">

          <a
            href="#contact"
            className="mobile-talk-btn"
          >
            Let's Talk
          </a>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

      {/* Overlay */}

      {menuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>

        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>

        <a
          href="#services"
          onClick={() => setMenuOpen(false)}
        >
          Services
        </a>

        <a
          href="#projects"
          onClick={() => setMenuOpen(false)}
        >
          Portfolio
        </a>

        <a
          href="#pricing"
          onClick={() => setMenuOpen(false)}
        >
          Solutions
        </a>

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>

        <a
          href="#contact"
          className="mobile-contact-btn"
        >
          Start Project
        </a>

      </div>

    </header>
  );
}

export default Navbar;