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
      desc: "Modern, responsive and conversion-focused websites.",
    },
    {
      icon: <FaRocket />,
      title: "Website Development",
      desc: "Fast, SEO-friendly and optimized web development.",
    },
    {
      icon: <FaBullhorn />,
      title: "Social Media Ads",
      desc: "Creative advertisements that attract customers.",
    },
    {
      icon: <FaPalette />,
      title: "Brand Design",
      desc: "Posters, banners and branding materials.",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">

        <div className="section-title">
          <span>SERVICES</span>
          <h2>What I Can Do For You</h2>
        </div>

        <div className="services-grid">

          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.desc}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;