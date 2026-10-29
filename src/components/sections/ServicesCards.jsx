import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site';
import '../../styles/global.css';

function ServicesCards() {
  return (
    <section className="section-alt">
      <div className="container">
        <h2 className="section-title">
          Our Services
        </h2>
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
  );
}

export default ServicesCards;
