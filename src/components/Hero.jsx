import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">

        <span className="hero-tag">
          FREELANCE WEB DESIGNER • DEVELOPER
        </span>

        <h1>
          I Create
          <br />

          <span className="animated-text">
            <TypeAnimation
              sequence={[
                "Modern Websites",
                2000,
                "Brand Identities",
                2000,
                "Social Media Ads",
                2000,
                "Business Growth",
                2000,
              ]}
              wrapper="span"
              repeat={Infinity}
            />
          </span>
        </h1>

        <p>
          Helping businesses build a strong online presence
          through websites, branding and digital marketing.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View My Work <FaArrowRight />
          </a>

          <a href="#contact" className="btn-secondary">
            Hire Me
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;