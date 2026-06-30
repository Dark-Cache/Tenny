import "./Shot.css";

import { FaPlay, FaFilm, FaCut, FaVideo } from "react-icons/fa";

import Camera from "../../assets/Camera.png"; 
// import Camera from "../../assets/Try.jpg"; 

const VideoEditor = () => {
  return (
    <>
    <section className="video-editor" id="shotit">
      <div className="video-container">
        {/* LEFT */}

        <div className="video-left">
          <div className="director">
            <div className="play-icon">
              <FaPlay />
            </div>

            <div>
              <span>Creative Director</span>
              <h5> SHOT BY TENNY</h5>
            </div>
          </div>

          <h1>
            VIDEO
            <br />
            EDITOR
          </h1>

          <p className="video-description">
            Sculpting cinematic narratives through
            <strong> rhythmic editing </strong>
            and advanced post-production choreography for the digital age.
          </p>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="dot"></div>

              <div>
                <h4>NARRATIVE FLOW</h4>

                <p>
                  Mastering the pace and rhythm to captivate audiences across
                  every frame.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <div className="dot"></div>

              <div>
                <h4>VISUAL FIDELITY</h4>

                <p>
                  High-end color grading and VFX integration for a polished
                  cinematic look.
                </p>
              </div>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">
                  Initiate Project
                </a>
          </div>
        </div>

        {/* RIGHT */}

        <div className="video-right">
          <div className="brush-bg"></div>

          <img
            src={Camera}
            alt="Video Editor"
            className="hero-image"
          />

          {/* Floating Icons */}

          <div className="floating icon1">
            <FaFilm />
          </div>

          <div className="floating icon2">
            <FaVideo />
          </div>

          <div className="floating icon3">
            <FaCut />
          </div>

          <div className="floating icon4">
            <FaCut />
          </div>

          <div className="floating icon5">
            <FaVideo />
          </div>

          <div className="floating badge">
            <FaPlay />
            <span>
              Creative
              <br />
              Studio
            </span>
          </div>
        </div>
      </div>
    </section>
    <div id="testimonials"></div>
    </>
  );
};

export default VideoEditor;
