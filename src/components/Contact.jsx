import {
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaWpforms,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
      data-aos="fade-up"
    >
      <div className="container">

        <div className="section-title">
          <span>CONTACT</span>

          <h2>
            Let's Build Something
            Amazing Together
          </h2>

          <p className="contact-subtitle">
            Have a project in mind? Let's discuss how we can
            create a powerful online presence for your business.
          </p>
        </div>

        <div className="contact-grid">

          <div
            className="contact-info"
            data-aos="fade-right"
          >

            <h3>Ready To Start Your Project?</h3>

            <p>
              Whether you need a website, branding,
              social media creatives or digital marketing,
              I'm here to help bring your vision to life.
            </p>

            <div className="contact-item">
              <FaEnvelope />
              <span>jaswantwebworkshop@gmail.com</span>
            </div>

            <div className="contact-item">
              <FaPhone />
              <span>+91 9363979419</span>
            </div>

            <div className="social-links">

              <a
                href="https://www.instagram.com/jwwstudio?igsh=MTJibHdycnY1czUwbg=="
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/in/jaswant-web-workshop-39a95a414"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

          <div
            className="contact-form-box"
            data-aos="fade-left"
          >

            <h3>Start Your Project</h3>

            <p>
              Choose your preferred method and let's get started.
            </p>

            <a
              href="https://wa.me/919363979419?text=Hi%20JW%20Studio,%20I%20am%20interested%20in%20your%20services."
              target="_blank"
              rel="noreferrer"
              className="contact-action-btn whatsapp-btn"
            >
              <FaWhatsapp />
              Chat On WhatsApp
            </a>

            <a
              href="https://forms.gle/B3St3qQfQZbzvXdEA"
              target="_blank"
              rel="noreferrer"
              className="contact-action-btn form-btn"
            >
              <FaWpforms />
              Fill Project Form
            </a>

            <div className="contact-note">
              Response within 24 hours ⚡
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;