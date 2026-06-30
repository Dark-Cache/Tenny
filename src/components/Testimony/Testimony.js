import { useState, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";
import "./Testimony.css";

const testimonials = [
  {
    id: 1,
    name: "Esther Johnson",
    service: "Beauty by Tenny",
    text: "Beauty by Tenny exceeded every expectation. The professionalism, attention to detail and the experience made me feel absolutely beautiful.",
  },

  {
    id: 2,
    name: "Daniel Moses",
    service: "Tenny Shot It",
    text: "Our brand shoot came out beyond amazing. The creativity and quality delivered by Tenny Shot It gave our business a fresh new image.",
  },

  {
    id: 3,
    name: "Sophia Williams",
    service: "Beauty by Tenny",
    text: "I've visited many salons but none compares to the atmosphere and service here. Definitely my new favourite beauty destination.",
  },

  {
    id: 4,
    name: "Michael Adams",
    service: "Tenny Shot It",
    text: "Every single photo looked premium. They captured moments beautifully and delivered everything on time. Highly recommended.",
  },
];

function Testimonial() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="testimonial">
      <div className="container">
        <div className="testimonial-title">
          <span>CLIENT REVIEWS</span>

          <h2>
            What Our Clients
            <span> Say</span>
          </h2>
        </div>

        <div className="testimonial-card">
          <FaQuoteLeft className="quote" />

          <div className="stars">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>

          <p className="comment">"{testimonials[current].text}"</p>

          <div className="client">
            <div>
              <h3>{testimonials[current].name}</h3>

              <span>{testimonials[current].service}</span>
            </div>
          </div>

          <div className="controls">
            <button onClick={prevSlide}>
              <FaChevronLeft />
            </button>

            <div className="dots">
              {testimonials.map((item, index) => (
                <span
                  key={item.id}
                  className={current === index ? "dot active" : "dot"}
                  onClick={() => setCurrent(index)}
                ></span>
              ))}
            </div>

            <button onClick={nextSlide} >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
      <div id="contact"></div>
    </section>
  );
}

export default Testimonial;
