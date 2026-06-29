import "./Contact.css";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTiktok,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact-heading">
          <span>LET'S CONNECT</span>

          <h2>
            Let's Create Something
            </h2>
            <span> Beautiful Together.</span>
          

          <p>
            Whether you're booking a salon appointment or planning your next
            content creation project, we'd love to hear from you.
          </p>
        </div>

        <div className="contact-wrapper">
          {/* LEFT */}

          <div className="contact-info">
            <div className="info-card">
              <div className="icon">
                <FaPhoneAlt />
              </div>

              <div>
                <h3>Call Us</h3>

                <p>07881163072</p>
              </div>
            </div>

            <div className="info-card">
              <div className="icon">
                <FaEnvelope />
              </div>

              <div>
                <h3>Email</h3>

                <p>tennyadesola@gmail.com</p>
              </div>
            </div>

            <div className="info-card">
              <div className="icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3>Visit Us</h3>

                <p>Lagos, Nigeria</p>
              </div>
            </div>

            <div className="info-card">
              <div className="icon">
                <FaTiktok />
              </div>

              <div>
                <h3>TikTok</h3>

                <p>Tenny Shot It</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <form className="contact-form">
            <div className="row">
              <input type="text" placeholder="Full Name" />

              <input type="email" placeholder="Email Address" />
            </div>

            <div className="row">
              <input type="text" placeholder="Phone Number" />

              <select>
                <option>Select Service</option>

                <option>Beauty by Tenny</option>

                <option>Tenny Shot It</option>
              </select>
            </div>

            <textarea
              rows="8"
              placeholder="Tell us about your appointment or project..."
            ></textarea>

            <button>
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
