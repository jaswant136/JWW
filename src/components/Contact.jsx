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
    <section id="contact" className="contact-section">
      <div className="container">

        <div className="section-title">
          <span>CONTACT</span>
          <h2>Let's Work Together</h2>
        </div>

        <div className="contact-grid">

          <div className="contact-info">

            <h3>Ready To Start Your Project?</h3>

            <p>
              Whether you need a website, social media creatives,
              branding or digital marketing support, let's discuss
              your project and bring your ideas to life.
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
                href="https://www.linkedin.com/in/jaswant-web-workshop-39a95a414?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

          <div className="contact-form">

            <h3>Start Your Project</h3>

            <p>
              Choose the method that works best for you.
            </p>

            <a
              href="https://wa.me/919363979419?text=Hi%20JW%20Studio,%20I%20am%20interested%20in%20your%20services."
              target="_blank"
              rel="noreferrer"
              className="contact-action-btn whatsapp-btn"
            >
              <FaWhatsapp />
              Chat on WhatsApp
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

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;