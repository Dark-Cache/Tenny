import "./About.css";

import AboutImage from "../../assets/About.jpg";

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <img src={AboutImage} alt="Beauty by Tenny" />

            <div className="experience-card">
              <h2>Since 2024</h2>

              <span>Beauty &bull; Creativity &bull; Excellence</span>
            </div>
          </div>

          <div className="about-content">
            <span className="section-tag">Our Story</span>

            <h2>
              Creating Beauty,
              <span> Inspiring Confidence </span>
              Through Every Experience.
            </h2>

            <p>
              Tenny's Empire is the home of two exceptional brands:
              <strong> Beauty by Tenny</strong>, delivering premium salon
              experiences, and
              <strong> Tenny Shot It</strong>, creating powerful visual stories
              through photography, videography and content creation.
            </p>

            <p>
              Every appointment, every photograph and every project is designed
              with one goal in mind: helping our clients look their best, feel
              confident and tell unforgettable stories.
            </p>

            <div className="about-stats">
              <div className="stat-card">
                <h3>30+</h3>

                <p>Happy Clients</p>
              </div>

              <div className="stat-card">
                <h3>2+</h3>

                <p>Years Experience</p>
              </div>

              <div className="stat-card">
                <h3>20+</h3>

                <p>Creative Projects</p>
              </div>

              <div className="stat-card">
                <h3>4.2/5</h3>

                <p>Customer Rating</p>
              </div>
            </div>

            <a href="#contact" className="about-btn">
              Book a session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
