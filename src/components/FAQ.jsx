import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How long does a website take?",
      a: "Most websites are completed within 5-14 days depending on the project requirements and complexity.",
    },
    {
      q: "Will my website be mobile responsive?",
      a: "Yes. Every website is fully optimized for mobile, tablet and desktop devices.",
    },
    {
      q: "Do you provide SEO?",
      a: "Yes. All websites include basic SEO setup to help improve search engine visibility.",
    },
    {
      q: "Can you redesign an existing website?",
      a: "Absolutely. I can redesign, modernize and optimize existing websites.",
    },
    {
      q: "Do you provide support after launch?",
      a: "Yes. I provide support and assistance after your website goes live.",
    },
  ];

  return (
    <section
      id="faq"
      className="faq-section"
      data-aos="fade-up"
    >
      <div className="container">

        <div className="section-title">
          <span>FAQ</span>

          <h2>
            Frequently Asked
            Questions
          </h2>

          <p className="faq-subtitle">
            Everything you need to know before
            starting your project.
          </p>
        </div>

        <div className="faq-container">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${
                openIndex === index ? "active" : ""
              }`}
            >
              <button
                className="faq-question"
                onClick={() =>
                  setOpenIndex(
                    openIndex === index ? -1 : index
                  )
                }
              >
                <span>{faq.q}</span>

                {openIndex === index ? (
                  <FaMinus />
                ) : (
                  <FaPlus />
                )}
              </button>

              <div
                className={`faq-answer ${
                  openIndex === index ? "show" : ""
                }`}
              >
                <p>{faq.a}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;