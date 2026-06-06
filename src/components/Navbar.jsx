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

      {menuOpen && (
        <div className="mobile-menu">

          <a href="#about">About</a>

          <a href="#services">Services</a>

          <a href="#projects">Projects</a>

          <a href="#pricing">Pricing</a>

          <a href="#contact">Contact</a>

        </div>
      )}
    </header>
  );
}

export default Navbar;