import {
  FaLaptopCode,
  FaBullhorn,
  FaPalette,
  FaRocket,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Website Design",
      desc: "Beautiful and modern website designs focused on user experience and conversions.",
    },
    {
      icon: <FaRocket />,
      title: "Web Development",
      desc: "Fast, responsive and SEO-friendly websites built with modern technologies.",
    },
    {
      icon: <FaBullhorn />,
      title: "Digital Marketing",
      desc: "Creative social media campaigns and advertisements that attract customers.",
    },
    {
      icon: <FaPalette />,
      title: "Brand Identity",
      desc: "Logos, posters, banners and complete branding solutions for businesses.",
    },
  ];

  return (
    <section
      id="services"
      className="services-section"
      data-aos="fade-up"
    >
      <div className="container">

        <div className="section-title">
          <span>SERVICES</span>

          <h2>
            Everything You Need
            To Grow Online
          </h2>

          <p className="services-subtitle">
            From stunning websites to digital marketing,
            I help businesses create a powerful online presence.
          </p>
        </div>

        <div className="services-grid">

          {services.map((service, index) => (
            <div
              className="service-card"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.desc}</p>

              <span className="service-arrow">
                →
              </span>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;