import { useState } from 'react';
import { siteConfig } from '../../config/site';

function FAQSection() {
  if (!siteConfig.features.faqSection) {
    return null;
  }

  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleItem(index);
    }
  };

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">
          Frequently Asked Questions
        </h2>
        <div className="faq-list">
          {siteConfig.faq.map((item, index) => (
            <div key={index} className="faq-item">
              <button
                type="button"
                className="faq-question"
                onClick={() => toggleItem(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{item.question}</span>
                <span className="faq-icon" aria-hidden="true">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`faq-answer ${openIndex === index ? 'faq-answer-open' : ''}`}
                role="region"
                aria-hidden={openIndex !== index}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
