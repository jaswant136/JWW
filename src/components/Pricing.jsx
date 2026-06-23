function Pricing() {
  const services = [
    {
      title: "Website Development",
      icon: "💻",
      desc:
        "Modern, responsive and SEO optimized websites for businesses, startups and personal brands.",
      features: [
        "Custom Website",
        "Mobile Responsive",
        "SEO Optimized",
        "Speed Optimized",
        "WhatsApp Integration",
        "Technical Support",
      ],
    },

    {
      title: "Brand Design",
      icon: "🎨",
      featured: true,
      desc:
        "Complete brand identity solutions to make your business stand out online and offline.",
      features: [
        "Logo Design",
        "Brand Identity",
        "Business Posters",
        "Social Media Creatives",
        "Marketing Materials",
        "Brand Guidelines",
      ],
    },

    {
      title: "Digital Growth",
      icon: "🚀",
      desc:
        "Everything needed to grow your brand through social media and digital marketing.",
      features: [
        "Social Media Management",
        "Instagram Growth",
        "Facebook Marketing",
        "Content Creation",
        "SEO Optimization",
        "Monthly Support",
      ],
    },
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">

        <div className="section-title">
          <span>SOLUTIONS</span>
          <h2>Services For Growing Brands</h2>

          <p className="pricing-subtitle">
            Everything your brand needs under one roof.
          </p>
        </div>

        <div className="pricing-grid">

          {services.map((service, index) => (
            <div
              key={index}
              className={`pricing-card ${
                service.featured ? "featured-plan" : ""
              }`}
            >
              <div
                style={{
                  fontSize: "3rem",
                  marginBottom: "20px",
                }}
              >
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p
                style={{
                  marginTop: "15px",
                  marginBottom: "25px",
                  color: "#666",
                  lineHeight: "1.8",
                }}
              >
                {service.desc}
              </p>

              <ul>
                {service.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>

              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({
                      behavior: "smooth",
                    })
                }
              >
                Get Free Consultation
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;