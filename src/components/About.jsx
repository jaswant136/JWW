import profileImg from "../assets/jaswant.png";

function About() {
  return (
    <section
      id="about"
      className="about-section"
      data-aos="fade-up"
    >
      <div className="container">

        <div className="section-title">
          <span>ABOUT ME</span>
          <h2>
            Helping Brands Build
            Digital Experiences
            That Convert
          </h2>
        </div>

        <div className="about-grid">

          <div
            className="about-image"
            data-aos="fade-right"
          >
            <img src={profileImg} alt="Jaswant" />
          </div>

          <div
            className="about-content"
            data-aos="fade-left"
          >

            <h3>
              Freelance Web Designer &
              Developer Based In India
            </h3>

            <p>
              I'm Jaswant, a passionate web designer and
              developer focused on creating premium digital
              experiences for businesses and entrepreneurs.
            </p>

            <p>
              My mission is simple: design websites that
              look modern, load fast, and help businesses
              attract more customers online.
            </p>

            <div className="about-stats">

              <div className="stat-box">
                <h2>5+</h2>
                <span>Projects</span>
              </div>

              <div className="stat-box">
                <h2>100%</h2>
                <span>Responsive</span>
              </div>

              <div className="stat-box">
                <h2>24/7</h2>
                <span>Support</span>
              </div>

            </div>

            <div className="about-cards">

              <div className="about-card">
                <h4>Website Design</h4>
                <p>
                  Modern UI/UX experiences that
                  build trust and conversions.
                </p>
              </div>

              <div className="about-card">
                <h4>Brand Identity</h4>
                <p>
                  Logos, posters and creative
                  branding solutions.
                </p>
              </div>

              <div className="about-card">
                <h4>Marketing</h4>
                <p>
                  Social media campaigns that
                  increase reach and engagement.
                </p>
              </div>

              <div className="about-card">
                <h4>Development</h4>
                <p>
                  Fast, secure and responsive
                  websites built for growth.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;