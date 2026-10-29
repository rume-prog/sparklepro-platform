import { siteConfig } from '../../config/site';

function HowItWorksSection() {
  if (!siteConfig.features.howItWorksSection) {
    return null;
  }

  return (
    <section className="section-alt">
      <div className="container">
        <h2 className="section-title">
          How It Works
        </h2>
        <div className="steps-container">
          {siteConfig.howItWorks.map((step) => (
            <div key={step.step} className="step-item">
              <div className="step-number">{step.step}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
