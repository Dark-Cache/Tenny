import "./Navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container nav-container">
        <a href="#home" className="logo" onClick={closeMenu}>
          <span>TENNY'S</span>
          <h2>EMPIRE</h2>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav
          id="primary-navigation"
          className={isMenuOpen ? "nav-menu active" : "nav-menu"}
        >
          <ul className="nav-links">
            <li>
              <a href="#home" onClick={closeMenu}>Home</a>
            </li>

            <li>
              <a href="#about" onClick={closeMenu}>About</a>
            </li>

            <li>
              <a href="#beauty" onClick={closeMenu}>Beauty</a>
            </li>

            <li>
              <a href="#shotit" onClick={closeMenu}>Shot It</a>
            </li>

            <li>
              <a href="#testimonials" onClick={closeMenu}>Reviews</a>
            </li>

            <li>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </li>
          </ul>
        </nav>

        <a href="#contact" className="nav-btn" onClick={closeMenu}>
          Book Now
        </a>
      </div>
    </header>
  );
}

export default Navbar;
