import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <div className="container">

        <div className="hero-content">

          <span className="hero-badge">
            DIGITAL GROWTH AGENCY
          </span>

          <h1>
            Build Your Brand.
            <br />

            <span className="animated-text">
              <TypeAnimation
                sequence={[
                  "Grow Your Business.",
                  2000,
                  "Rank On Google.",
                  2000,
                  "Generate More Leads.",
                  2000,
                  "Dominate Online.",
                  2000,
                ]}
                wrapper="span"
                repeat={Infinity}
              />
            </span>
          </h1>

          <p>
            Helping startups, businesses and personal brands
            grow through premium websites, branding,
            SEO optimization and digital marketing.
          </p>

          <div className="hero-buttons">

            <a
              href="#contact"
              className="btn-primary"
            >
              Start Project
            </a>

            <a
              href="#projects"
              className="btn-secondary"
            >
              View Portfolio
              <FaArrowRight />
            </a>

          </div>

          <div className="trust-badge">
            ★★★★★ Trusted by Growing Brands
          </div>

        </div>

        <div className="hero-stats-bar">

          <div className="stat-item">
            <h3>98%</h3>
            <p>Growth Performance</p>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-item">
            <h3>SEO</h3>
            <p>Excellence</p>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-item">
            <h3>Premium</h3>
            <p>Websites</p>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-item">
            <h3>Brand</h3>
            <p>Identity</p>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-item">
            <h3>Growth</h3>
            <p>Strategy</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;