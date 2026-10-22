import '../../styles/global.css';

function AboutPage() {
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
            About SparklePro
          </h1>
          <p style={{
            textAlign: 'center',
            fontSize: 'var(--font-size-lg)',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Your trusted partner for professional cleaning services in Nairobi.
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
            gap: 'var(--spacing-2xl)',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{ color: 'var(--color-primary)' }}>Our Story</h2>
              <p>
                SparklePro was founded with a simple mission: to provide reliable, high-quality cleaning services
                that make life easier for Nairobi residents and businesses.
              </p>
              <p>
                We understand that your time is valuable. That's why we've built a service that you can trust
                to deliver consistent results, every single time.
              </p>
              <p>
                From humble beginnings, we've grown to serve [CUSTOMER COUNT] customers across Nairobi,
                maintaining our commitment to excellence and customer satisfaction.
              </p>
            </div>
            <div style={{
              backgroundColor: 'var(--color-primary)',
              padding: 'var(--spacing-2xl)',
              borderRadius: 'var(--radius-lg)',
              color: 'white',
              textAlign: 'center'
            }}>
              <h3 style={{ color: 'white', marginBottom: 'var(--spacing-md)' }}>
                Our Mission
              </h3>
              <p style={{ fontSize: 'var(--font-size-lg)' }}>
                To provide exceptional cleaning services that exceed expectations, creating cleaner,
                healthier spaces for our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{
        padding: 'var(--spacing-3xl) 0',
        backgroundColor: 'var(--color-background-alt)'
      }}>
        <div className="container">
          <h2 style={{
            textAlign: 'center',
            marginBottom: 'var(--spacing-2xl)'
          }}>
            Our Values
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--spacing-xl)'
          }}>
            <div>
              <h3 style={{ color: 'var(--color-primary)' }}>Integrity</h3>
              <p>We believe in honest communication and transparent pricing.</p>
            </div>
            <div>
              <h3 style={{ color: 'var(--color-primary)' }}>Quality</h3>
              <p>Every cleaning job is done to high standards.</p>
            </div>
            <div>
              <h3 style={{ color: 'var(--color-primary)' }}>Reliability</h3>
              <p>We aim to deliver consistent service.</p>
            </div>
            <div>
              <h3 style={{ color: 'var(--color-primary)' }}>Respect</h3>
              <p>We treat your property and belongings with care.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{
        padding: 'var(--spacing-3xl) 0'
      }}>
        <div className="container">
          <h2 style={{
            textAlign: 'center',
            marginBottom: 'var(--spacing-2xl)'
          }}>
            Why Choose Us
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-xl)'
          }}>
            <div style={{
              padding: 'var(--spacing-xl)',
              borderLeft: '4px solid var(--color-primary)',
              backgroundColor: 'var(--color-background-alt)'
            }}>
              <h3 style={{ color: 'var(--color-primary)' }}>Experienced Team</h3>
              <p>Our cleaning professionals are trained and experienced in all types of cleaning services.</p>
            </div>
            <div style={{
              padding: 'var(--spacing-xl)',
              borderLeft: '4px solid var(--color-primary)',
              backgroundColor: 'var(--color-background-alt)'
            }}>
              <h3 style={{ color: 'var(--color-primary)' }}>Quality Products</h3>
              <p>We use [PRODUCT TYPE] cleaning products that are tough on dirt but gentle on your space.</p>
            </div>
            <div style={{
              padding: 'var(--spacing-xl)',
              borderLeft: '4px solid var(--color-primary)',
              backgroundColor: 'var(--color-background-alt)'
            }}>
              <h3 style={{ color: 'var(--color-primary)' }}>Customer Focus</h3>
              <p>[SATISFACTION POLICY]</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
