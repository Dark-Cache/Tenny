import "./Process.css";

function Process() {
  return (
    <section className="process" id="process">
      <div className="container">

        <div className="process-header">

          <div className="header-left">

            <span className="section-label">
              THE TENNY EXPERIENCE
            </span>

            <h2>
              Every Visit is
              <span> Crafted </span>
              <br />
              With Passion &
              <span> Precision.</span>
            </h2>

          </div>

          <div className="header-right">

            <p>
              At Tenny's Empire, every appointment is carefully planned
              to deliver confidence, elegance and unforgettable results.
              Whether you're visiting Beauty by Tenny or booking
              Tenny Shot It, excellence remains our standard.
            </p>

          </div>

        </div>

        <div className="process-grid">

          <div className="process-card">

            <div className="number">01</div>

            <h3>Consultation</h3>

            <p>
              We begin by understanding your vision,
              preferences and expectations before any service begins.
            </p>

          </div>

          <div className="process-card">

            <div className="number">02</div>

            <h3>Create</h3>

            <p>
              Our professionals combine creativity,
              technique and premium products to deliver
              exceptional beauty and visual experiences.
            </p>

          </div>

          <div className="process-card">

            <div className="number">03</div>

            <h3>Deliver</h3>

            <p>
              We ensure every client leaves feeling confident,
              beautiful and proud of the final outcome.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Process;