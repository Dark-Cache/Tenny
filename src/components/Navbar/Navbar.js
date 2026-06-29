import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-container">
        {/* Logo */}

        <a href="#home" className="logo">
          <span>TENNY'S</span>
          <h2>EMPIRE</h2>
        </a>

        {/* Navigation */}

        <nav>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#beauty">Beauty</a>
            </li>

            <li>
              <a href="#shotit">Shot It</a>
            </li>

            <li>
              <a href="#testimonials">Reviews</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        {/* CTA */}

        <a href="#contact" className="nav-btn">
          Book Now
        </a>
      </div>
    </header>
  );
}

export default Navbar;
