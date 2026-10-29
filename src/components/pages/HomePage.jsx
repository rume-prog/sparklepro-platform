import { Link } from 'react-router-dom';
import '../../styles/global.css';
import { siteConfig } from '../../config/site';
import PricingSection from '../sections/PricingSection';
import FAQSection from '../sections/FAQSection';
import HowItWorksSection from '../sections/HowItWorksSection';
import AreasServedSection from '../sections/AreasServedSection';
import LogoStrip from '../sections/LogoStrip';
import ReviewsSection from '../sections/ReviewsSection';
import ServicesCards from '../sections/ServicesCards';

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        {siteConfig.heroImage && (
          <img
            src={siteConfig.heroImage.src}
            alt={siteConfig.heroImage.alt}
            className="hero-background-image"
            width="1920"
            height="1080"
          />
        )}
        <div className="hero-overlay"></div>
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
      </section>

      {/* Logo Strip */}
      <LogoStrip />

      {/* How It Works */}
      <HowItWorksSection />

      {/* Services */}
      <ServicesCards />

      {/* Reviews */}
      <ReviewsSection />

      {/* Pricing */}
      <PricingSection />

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

      {/* Areas Served */}
      <AreasServedSection />

      {/* FAQ */}
      <FAQSection />

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
