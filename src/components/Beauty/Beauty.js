import "./Beauty.css";
import { FaArrowRight } from "react-icons/fa";

import beautylogo from "../../assets/Beauty.png";
import beauty1 from "../../assets/B1.jpg";
import beauty2 from "../../assets/B2.jpg";
import beauty3 from "../../assets/B3.jpg";

const gallery = [beauty1, beauty2, beauty3];
const logoItems = Array.from({ length: 8 }, (_, index) => index);

export default function BeautyByTenny() {
  const goToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="beauty-section">
      <div className="beauty-logo-carousel" aria-label="Beauty by Tenny logo carousel">
        <div className="beauty-logo-track">
          {[0, 1].map((set) => (
            <div className="beauty-logo-set" aria-hidden={set === 1} key={set}>
              {logoItems.map((item) => (
                <div className="beauty-logo-card" key={`${set}-${item}`}>
                  <img src={beautylogo} alt={set === 0 && item === 0 ? "Beauty by Tenny" : ""} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="beauty-top">
        <div className="beauty-title">
          <h2>Beauty by Tenny</h2>
        </div>

        <div className="beauty-line">
          <span></span>
          <div className="beauty-dot"></div>
        </div>
      </div>

      <div className="beauty-content">
        <div className="beauty-description">
          <p>
            Experience beauty beyond expectations. Every transformation is
            carefully crafted to enhance confidence, elegance and individuality
            using premium beauty techniques and exceptional customer care.
          </p>
        </div>

        <button className="discover-btn" onClick={goToContact}>
          <span>Discover</span>

          <div className="discover-icon">
            <FaArrowRight />
          </div>
        </button>
      </div>

      <div className="gallery">
        {gallery.map((image, index) => (
          <div className="gallery-card" key={index}>
            <img src={image} alt="" draggable="false" />
          </div>
        ))}
      </div>
    </section>
  );
}
