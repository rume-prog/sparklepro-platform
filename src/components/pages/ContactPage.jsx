import '../../styles/global.css';

function ContactPage() {
  return (
    <div>
      <section style={{
        padding: 'var(--spacing-3xl) 0',
        backgroundColor: 'var(--color-background-alt)'
      }}>
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
            Get in touch with SparklePro for a free quote or to schedule your cleaning service.
          </p>
        </div>
      </section>

      <section style={{
        padding: 'var(--spacing-3xl) 0'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-2xl)'
          }}>
            <div>
              <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-xl)' }}>
                Get in Touch
              </h2>
              <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--spacing-sm)' }}>
                  Phone
                </h3>
                <p style={{ fontSize: 'var(--font-size-lg)' }}>
                  <a href="tel:[PHONE NUMBER]" style={{ color: 'var(--color-primary)' }}>
                    [PHONE NUMBER]
                  </a>
                </p>
              </div>
              <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--spacing-sm)' }}>
                  Email
                </h3>
                <p style={{ fontSize: 'var(--font-size-lg)' }}>
                  <a href="mailto:[EMAIL ADDRESS]" style={{ color: 'var(--color-primary)' }}>
                    [EMAIL ADDRESS]
                  </a>
                </p>
              </div>
              <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--spacing-sm)' }}>
                  Address
                </h3>
                <p style={{ fontSize: 'var(--font-size-lg)' }}>
                  [ADDRESS]
                </p>
                <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-light)' }}>
                  Nairobi, Kenya
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--spacing-sm)' }}>
                  Business Hours
                </h3>
                <p style={{ fontSize: 'var(--font-size-base)' }}>
                  Monday - Friday: [BUSINESS HOURS]
                </p>
                <p style={{ fontSize: 'var(--font-size-base)' }}>
                  Saturday: [BUSINESS HOURS]
                </p>
                <p style={{ fontSize: 'var(--font-size-base)' }}>
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div style={{
              backgroundColor: 'var(--color-background-alt)',
              padding: 'var(--spacing-2xl)',
              borderRadius: 'var(--radius-lg)'
            }}>
              <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-xl)' }}>
                Quick Contact
              </h2>
              <p style={{ marginBottom: 'var(--spacing-lg)' }}>
                For fastest response, call us directly or send us a message via WhatsApp.
              </p>
              <a
                href="https://wa.me/[PHONE NUMBER]"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  backgroundColor: '#25D366',
                  color: 'white',
                  padding: 'var(--spacing-md) var(--spacing-xl)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  marginBottom: 'var(--spacing-md)',
                  transition: 'background-color var(--transition-fast)'
                }}
              >
                Contact via WhatsApp
              </a>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-light)' }}>
                We typically respond within [RESPONSE TIME] during business hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{
        backgroundColor: 'var(--color-primary)',
        color: 'white',
        padding: 'var(--spacing-3xl) 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: 'var(--spacing-md)' }}>
            Ready to Get Started?
          </h2>
          <p style={{
            fontSize: 'var(--font-size-lg)',
            marginBottom: 'var(--spacing-xl)'
          }}>
            Contact us today for a free, no-obligation quote for your cleaning needs.
          </p>
          <a
            href="tel:[PHONE NUMBER]"
            style={{
              display: 'inline-block',
              backgroundColor: 'white',
              color: 'var(--color-primary)',
              padding: 'var(--spacing-md) var(--spacing-xl)',
              borderRadius: 'var(--radius-md)',
              fontSize: 'var(--font-size-lg)',
              fontWeight: 'bold',
              textDecoration: 'none'
            }}
          >
            Call [PHONE NUMBER]
          </a>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
