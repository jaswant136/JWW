import {
  Monitor,
  Palette,
  TrendingUp,
} from "lucide-react";

function Pricing() {
  const services = [
    {
      title: "Website Development",
      icon: <Monitor size={34} strokeWidth={1.7} />,
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
      icon: <Palette size={34} strokeWidth={1.7} />,
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
      icon: <TrendingUp size={34} strokeWidth={1.7} />,
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

          <h2>
            Services For Growing Brands
          </h2>

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
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p className="service-desc">
                {service.desc}
              </p>

              <ul>
                {service.features.map((feature, i) => (
                  <li key={i}>
                    ✓ {feature}
                  </li>
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