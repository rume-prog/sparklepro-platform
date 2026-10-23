import '../../styles/global.css';
import { siteConfig } from '../../config/site';

function ContactPage() {
  return (
    <div>
      <section className="section-alt">
        <div className="container">
          <h1 style={{
            textAlign: 'center',
            marginBottom: 'var(--spacing-lg)'
          }}>
            Contact Us
          </h1>
          <p style={{
            textAlign: 'center',
            fontSize: 'var(--font-size-lg)',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Get in touch with {siteConfig.businessName} for a free quote or to schedule your cleaning service.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-auto-fit-2xl">
            <div>
              <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-xl)' }}>
                Get in Touch
              </h2>
              <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--spacing-sm)' }}>
                  Phone
                </h3>
                <p style={{ fontSize: 'var(--font-size-lg)' }}>
                  <a href={`tel:${siteConfig.contact.phone}`} style={{ color: 'var(--color-primary)' }}>
                    {siteConfig.contact.phone}
                  </a>
                </p>
              </div>
              <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--spacing-sm)' }}>
                  Email
                </h3>
                <p style={{ fontSize: 'var(--font-size-lg)' }}>
                  <a href={`mailto:${siteConfig.contact.email}`} style={{ color: 'var(--color-primary)' }}>
                    {siteConfig.contact.email}
                  </a>
                </p>
              </div>
              <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--spacing-sm)' }}>
                  Address
                </h3>
                <p style={{ fontSize: 'var(--font-size-lg)' }}>
                  {siteConfig.contact.address}
                </p>
                <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-light)' }}>
                  {siteConfig.contact.city}
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--spacing-sm)' }}>
                  Business Hours
                </h3>
                <p style={{ fontSize: 'var(--font-size-base)' }}>
                  Monday - Friday: {siteConfig.contact.hours.weekday}
                </p>
                <p style={{ fontSize: 'var(--font-size-base)' }}>
                  Saturday: {siteConfig.contact.hours.saturday}
                </p>
                <p style={{ fontSize: 'var(--font-size-base)' }}>
                  Sunday: {siteConfig.contact.hours.sunday}
                </p>
              </div>
            </div>

            <div className="quick-contact-box">
              <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-xl)' }}>
                Quick Contact
              </h2>
              <p style={{ marginBottom: 'var(--spacing-lg)' }}>
                For fastest response, call us directly or send us a message via WhatsApp.
              </p>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ marginBottom: 'var(--spacing-md)' }}
              >
                Contact via WhatsApp
              </a>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-light)' }}>
                We typically respond within {siteConfig.contact.responseTime} during business hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-primary">
        <div className="container">
          <h2 className="section-title-white">
            Ready to Get Started?
          </h2>
          <p style={{
            fontSize: 'var(--font-size-lg)',
            marginBottom: 'var(--spacing-xl)'
          }}>
            Contact us today for a free, no-obligation quote for your cleaning needs.
          </p>
          <a href={`tel:${siteConfig.contact.phone}`} className="btn-primary">
            Call {siteConfig.contact.phone}
          </a>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
