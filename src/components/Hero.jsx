import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">

        <span className="hero-tag">
          BRANDING • WEB DEVELOPMENT • SEO • SOCIAL MEDIA
        </span>

        <h1>
  I Create
  <br />
  <span className="animated-text">
    <TypeAnimation
      sequence={[
        "Websites That Convert",
        2000,
        "Brands That Inspire",
        2000,
        "SEO That Ranks",
        2000,
        "Marketing That Sells",
        2000,
        "Results That Matter",
        2000,
      ]}
      wrapper="span"
      repeat={Infinity}
    />
  </span>
</h1>

        <p>
          Founder of JWW Studio
Branding, Development & Growth Agency
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