function FAQ() {
  const faqs = [
    {
      q: "How long does a website take?",
      a: "Most websites are completed within 5-14 days depending on complexity.",
    },

    {
      q: "Will my website be mobile responsive?",
      a: "Yes, every website is optimized for mobile, tablet and desktop devices.",
    },

    {
      q: "Do you provide SEO?",
      a: "Yes, all websites include basic SEO setup and optimization.",
    },

    {
      q: "Can you redesign an existing website?",
      a: "Absolutely. I can redesign and modernize existing websites.",
    },
  ];

  return (
    <section id="faq" className="faq-section">

      <div className="container">

        <div className="section-title">
          <span>FAQ</span>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-grid">

          {faqs.map((faq, index) => (
            <div className="faq-card" key={index}>

              <h3>{faq.q}</h3>

              <p>{faq.a}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default FAQ;