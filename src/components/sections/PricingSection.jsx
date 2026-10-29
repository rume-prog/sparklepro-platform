import { siteConfig } from '../../config/site';

function PricingSection() {
  if (!siteConfig.features.pricingSection) {
    return null;
  }

  return (
    <section className="section-alt">
      <div className="container">
        <h2 className="section-title">
          Pricing Packages
        </h2>
        <div className="grid-auto-fit">
          {siteConfig.pricing.map((pkg) => (
            <div key={pkg.name} className="card pricing-card">
              <h3 className="card-title">{pkg.name}</h3>
              <p className="pricing-price">{pkg.priceText}</p>
              <ul className="pricing-list">
                {pkg.included.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
