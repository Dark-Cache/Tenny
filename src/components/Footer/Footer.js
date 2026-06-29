import "./Footer.css";

import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Left */}

          <div className="footer-links">
            <h3>Explore</h3>

            <ul>
              <li>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="services">Services</a>
              </li>

              <li>
                <a href="gallery">Gallery</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>

              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
            </ul>
          </div>

          {/* Center */}

          <div className="footer-brand">
            <h2>TENNY'S EMPIRE</h2>

            <p>
              Home to
              <strong> Beauty by Tenny </strong>&<strong> Tenny Shot It</strong>
            </p>

            <div className="social-icons">
              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaFacebookF />
              </a>

              <a href="https://www.tiktok.com/@beauty_by_tenny?_r=1&_t=ZN-97aVBQzZwEI">
                <FaTiktok />
              </a>

              <a href="#">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Right */}

          <div className="footer-contact">
            <h3>Contact</h3>

            <div className="contact-item">
              <FaMapMarkerAlt />

              <span>Lagos, Nigeria</span>
            </div>

            <div className="contact-item">
              <FaPhoneAlt />

              <span>07881163072</span>
            </div>

            <div className="contact-item">
              <FaEnvelope />

              <span>tennyadesola@gmail.com</span>
            </div>

            <div className="hours">
              <h4>Opening Hours</h4>

              <p>Mon - Sat : 9:00AM - 7:00PM</p>

              <p>Sunday : Closed</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Tenny's Empire. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
