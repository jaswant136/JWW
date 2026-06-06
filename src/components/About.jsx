function About() {
  return (
    <section id="about" className="about-section">

      <div className="container">

        <div className="section-title">
          <span>ABOUT ME</span>
          <h2>Creative Designer & Developer</h2>
        </div>

        <div className="about-grid">

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43"
              alt="Profile"
            />
          </div>

          <div className="about-content">

            <h3>
              Helping Businesses Stand Out Online
            </h3>

            <p>
              I'm Jaswant, a freelance web designer and developer.
              I create modern websites, social media creatives,
              advertising campaigns and branding materials that
              help businesses attract customers and grow online.
            </p>

            <p>
              My goal is to deliver premium digital experiences
              that look professional, perform fast and generate
              real business results.
            </p>

            <div className="about-cards">

              <div className="about-card">
                <h4>Website Design</h4>
                <p>Modern UI/UX focused websites.</p>
              </div>

              <div className="about-card">
                <h4>Branding</h4>
                <p>Creative brand identity solutions.</p>
              </div>

              <div className="about-card">
                <h4>Social Media Ads</h4>
                <p>Campaign creatives and promotions.</p>
              </div>

              <div className="about-card">
                <h4>Development</h4>
                <p>Responsive and fast websites.</p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;