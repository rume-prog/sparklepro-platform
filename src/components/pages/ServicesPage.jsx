import { Link } from 'react-router-dom';
import '../../styles/global.css';
import { siteConfig } from '../../config/site';

function ServicesPage() {
  return (
    <div>
      <section className="section-alt">
        <div className="container">
          <h1 style={{
            textAlign: 'center',
            marginBottom: 'var(--spacing-lg)'
          }}>
            Our Cleaning Services
          </h1>
          <p style={{
            textAlign: 'center',
            fontSize: 'var(--font-size-lg)',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            We offer a comprehensive range of cleaning services for homes and businesses in {siteConfig.areasServed.join(', ')}.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-cards-grid">
            {siteConfig.services.map((service) => (
              <div key={service.slug} className="service-card">
                <h3 className="service-card-title">{service.name}</h3>
                
                {service.image ? (
                  <div className="service-card-image-wrapper">
                    <img
                      src={service.image.src}
                      alt={service.image.alt}
                      className="service-card-image"
                      loading="lazy"
                      width="400"
                      height="300"
                    />
                  </div>
                ) : (
                  <div className="service-card-image-placeholder" aria-hidden="true" />
                )}
                
                <p className="service-card-description">{service.description}</p>
                
                <div className="service-card-details">
                  <span className="service-card-detail">
                    <strong>Best for:</strong> {service.bestFor}
                  </span>
                  <span className="service-card-detail">
                    <strong>Duration:</strong> {service.duration}
                  </span>
                  <span className="service-card-detail">
                    <strong>Frequency:</strong> {service.frequency}
                  </span>
                </div>
                
                <Link 
                  to={`/services/${service.slug}`} 
                  className="btn-primary service-card-button"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-primary">
        <div className="container">
          <h2 className="section-title-white">
            Need a Custom Cleaning Plan?
          </h2>
          <p style={{
            fontSize: 'var(--font-size-lg)',
            marginBottom: 'var(--spacing-xl)'
          }}>
            Contact us to discuss your specific cleaning needs and get a personalized quote.
          </p>
          <a href={`tel:${siteConfig.contact.phone}`} className="btn-primary">
            Call {siteConfig.contact.phone}
          </a>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
