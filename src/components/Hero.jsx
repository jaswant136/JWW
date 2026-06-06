import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">

        <span className="hero-tag">
          FREELANCE WEB DESIGNER • DIGITAL CREATOR
        </span>

        <h1>
          Building Websites
          <br />
          That Grow
          <span> Businesses</span>
        </h1>

        <p>
          I help businesses establish a strong online presence through
          modern websites, social media advertising, branding and
          creative design solutions.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View My Work <FaArrowRight />
          </a>

          <a href="#contact" className="btn-secondary">
            Start A Project
          </a>
        </div>

        <div className="hero-stats">

          <div>
            <h3>5+</h3>
            <span>Projects Built</span>
          </div>

          <div>
            <h3>100%</h3>
            <span>Responsive Design</span>
          </div>

          <div>
            <h3>24/7</h3>
            <span>Support</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;