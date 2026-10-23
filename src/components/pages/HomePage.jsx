import { Link } from 'react-router-dom';
import '../../styles/global.css';
import { siteConfig } from '../../config/site';

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="hero-title">
            {siteConfig.tagline}
          </h1>
          <p className="hero-subtitle">
            {siteConfig.description}
          </p>
          <div className="hero-button-group">
            <Link to="/contact" className="btn-primary">
              Get a Free Quote
            </Link>
            <Link to="/services" className="btn-secondary">
              View Services
            </Link>
          </div>
        </div>

        {/* Decorative SVG Pattern */}
        <svg
          className="hero-pattern"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="80" cy="20" r="15" fill="white" />
          <circle cx="90" cy="50" r="10" fill="white" />
          <circle cx="70" cy="70" r="20" fill="white" />
        </svg>
      </section>

      {/* Services Preview */}
      <section className="section-alt">
        <div className="container">
          <h2 className="section-title">
            Our Services
          </h2>
          <div className="grid-auto-fit">
            {siteConfig.services.slice(0, 3).map((service) => (
              <div key={service.name} className="card">
                <h3 className="card-title">{service.name}</h3>
                <p>{service.description.split('.')[0]}.</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)' }}>
            <Link to="/services" className="link-arrow">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">
            Why Choose {siteConfig.businessName}?
          </h2>
          <div className="grid-auto-fit">
            {siteConfig.values.map((value) => (
              <div key={value.title}>
                <h3 className="card-title">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-primary">
        <div className="container">
          <h2 className="section-title-white">
            Ready for a Cleaner Space?
          </h2>
          <p style={{
            fontSize: 'var(--font-size-lg)',
            marginBottom: 'var(--spacing-xl)'
          }}>
            Contact us today for a free quote.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
