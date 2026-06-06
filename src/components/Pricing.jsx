function Pricing() {
  const plans = [
    {
      title: "Starter",
      price: "₹999",
      features: [
        "1 Page Website",
        "Mobile Responsive",
        "Basic SEO",
        "Contact Form",
      ],
    },

    {
      title: "Business",
      price: "₹1,999",
      featured: true,
      features: [
        "5 Pages Website",
        "Premium Design",
        "SEO Optimization",
        "WhatsApp Integration",
        "Speed Optimization",
      ],
    },

    {
      title: "Premium",
      price: "₹2,999",
      features: [
        "Custom Website",
        "Advanced UI/UX",
        "Full SEO Setup",
        "Blog Integration",
        "Priority Support",
      ],
    },
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">

        <div className="section-title">
          <span>PRICING</span>
          <h2>Website Packages</h2>
        </div>

        <div className="pricing-grid">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${
                plan.featured ? "featured-plan" : ""
              }`}
            >
              <h3>{plan.title}</h3>

              <h1>{plan.price}</h1>

              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>

              <button>
                Get Started
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Pricing;