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
          <div className="grid-auto-fit-lg">
            {siteConfig.services.map((service) => (
              <div key={service.name} className="card">
                <h2 className="card-title">{service.name}</h2>
                <p>{service.description}</p>
                <p><strong>{service.priceText}</strong></p>
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
