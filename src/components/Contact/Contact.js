import "./Contact.css";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTiktok,
  FaPaperPlane,
} from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";

function Contact() {
  const [state, handleSubmit] = useForm("mzdlvejk");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formResetKey, setFormResetKey] = useState(0);

  const onSubmit = async (event) => {
    await handleSubmit(event);
    setShowSuccessModal(true);
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    setFormResetKey((prev) => prev + 1);
  };

  useEffect(() => {
    document.body.style.overflow = showSuccessModal ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showSuccessModal]);

  return (
    <section className="contact">
      <div className="container">
        <div className="contact-heading">
          <span>LET'S CONNECT</span>

          <h2>Let's Create Something</h2>
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

          <form className="contact-form" onSubmit={onSubmit} key={formResetKey}>
            <div className="row">
              <input type="text" name="name" placeholder="Full Name" required />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
            </div>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="form-error"
            />

            <div className="row">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
              />

              <select name="service" required>
                <option>Select Service</option>

                <option>Beauty by Tenny</option>

                <option>Tenny Shot It</option>
              </select>
            </div>

            <textarea
              name="message"
              rows="8"
              placeholder="Tell us about your appointment or project..."
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="form-error"
            />

            <button type="submit" disabled={state.submitting}>
              <FaPaperPlane />
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          {showSuccessModal && state.succeeded && (
            <div
              className="success-modal-overlay"
              role="dialog"
              aria-modal="true"
            >
              <div className="success-modal">
                <button
                  type="button"
                  className="success-modal-close"
                  onClick={handleCloseSuccessModal}
                  aria-label="Close success message"
                >
                  ×
                </button>
                <h3>Message Sent ✅</h3>
                <p>Thanks! Your message has been sent successfully.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
