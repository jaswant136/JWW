import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">

        {/* Logo */}

        <a href="#" className="logo">
          JW<span>.</span>
        </a>

        {/* Desktop Menu */}

        <nav className="nav-links">

          <a href="#about">About</a>

          <a href="#services">Services</a>

          <a href="#projects">Projects</a>

          <a href="#pricing">Pricing</a>

          <a href="#contact">Contact</a>

        </nav>

        {/* CTA */}

        <a href="#contact" className="nav-btn">
          Hire Me
        </a>

        {/* Mobile Icon */}

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
  <a href="#about" onClick={() => setMenuOpen(false)}>
    About
  </a>

  <a href="#services" onClick={() => setMenuOpen(false)}>
    Services
  </a>

  <a href="#projects" onClick={() => setMenuOpen(false)}>
    Projects
  </a>

  <a href="#pricing" onClick={() => setMenuOpen(false)}>
    Pricing
  </a>

  <a href="#contact" onClick={() => setMenuOpen(false)}>
    Contact
  </a>

  <a href="#contact" className="mobile-contact-btn">
    Start Project
  </a>
</div>
    </header>
  );
}

export default Navbar;