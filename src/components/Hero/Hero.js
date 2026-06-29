import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-subtitle">
            BEAUTY <span className="hero-dot">&bull;</span> CONTENT CREATION{" "}
            <span className="hero-dot">&bull;</span> LIFESTYLE
          </span>

          <h1>
            Where
            <span> Beauty </span>
            Meets
            <br />
            Creative
            <span> Storytelling.</span>
          </h1>

          <p>
            Welcome to Tenny's Empire, home of
            <strong> Beauty by Tenny </strong>
            and
            <strong> Tenny Shot It.</strong> We create unforgettable beauty
            experiences and captivating visual stories that leave lasting
            impressions.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">
              Book Appointment
            </a>

            <a href="services" className="secondary-btn">
              Explore Services
            </a>
          </div>
        </div>

        <div className="hero-card">
          <span className="brand">FEATURED BRANDS</span>
          <h3>Beauty by Tenny</h3>
          <p>Luxury salon services tailored to bring out your confidence.</p>

          <hr />

          <h3>Tenny Shot It</h3>
          <p>
            Photography, videography and content creation for individuals and
            brands.
          </p>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div id="about"></div>
        <span></span>
      </div>
    </section >
  );
}

export default Hero;
