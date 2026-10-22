import '../../styles/global.css';

function ServicesPage() {
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
            Our Cleaning Services
          </h1>
          <p style={{
            textAlign: 'center',
            fontSize: 'var(--font-size-lg)',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            We offer a comprehensive range of cleaning services for homes and businesses in Nairobi.
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
            gap: 'var(--spacing-xl)'
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: 'var(--spacing-xl)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--color-border)'
            }}>
              <h2 style={{ color: 'var(--color-primary)' }}>Residential Cleaning</h2>
              <p>Complete home cleaning services including:</p>
              <ul style={{
                marginTop: 'var(--spacing-md)',
                marginBottom: 'var(--spacing-md)',
                paddingLeft: 'var(--spacing-lg)'
              }}>
                <li>Regular cleaning</li>
                <li>Deep cleaning</li>
                <li>Move-in/move-out cleaning</li>
                <li>Post-construction cleaning</li>
              </ul>
              <p><strong>Starting from [PRICE]</strong></p>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: 'var(--spacing-xl)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--color-border)'
            }}>
              <h2 style={{ color: 'var(--color-primary)' }}>Commercial Cleaning</h2>
              <p>Professional cleaning for businesses including:</p>
              <ul style={{
                marginTop: 'var(--spacing-md)',
                marginBottom: 'var(--spacing-md)',
                paddingLeft: 'var(--spacing-lg)'
              }}>
                <li>Office cleaning</li>
                <li>Retail space cleaning</li>
                <li>Restaurant cleaning</li>
                <li>Warehouse cleaning</li>
              </ul>
              <p><strong>Starting from [PRICE]</strong></p>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: 'var(--spacing-xl)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--color-border)'
            }}>
              <h2 style={{ color: 'var(--color-primary)' }}>Deep Cleaning</h2>
              <p>Thorough cleaning for:</p>
              <ul style={{
                marginTop: 'var(--spacing-md)',
                marginBottom: 'var(--spacing-md)',
                paddingLeft: 'var(--spacing-lg)'
              }}>
                <li>Kitchens and bathrooms</li>
                <li>Carpets and upholstery</li>
                <li>Windows and blinds</li>
                <li>Hard-to-reach areas</li>
              </ul>
              <p><strong>Starting from [PRICE]</strong></p>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: 'var(--spacing-xl)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--color-border)'
            }}>
              <h2 style={{ color: 'var(--color-primary)' }}>Specialized Services</h2>
              <p>Additional services available:</p>
              <ul style={{
                marginTop: 'var(--spacing-md)',
                marginBottom: 'var(--spacing-md)',
                paddingLeft: 'var(--spacing-lg)'
              }}>
                <li>Carpet cleaning</li>
                <li>Upholstery cleaning</li>
                <li>Window cleaning</li>
                <li>Pressure washing</li>
              </ul>
              <p><strong>Starting from [PRICE]</strong></p>
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
            Need a Custom Cleaning Plan?
          </h2>
          <p style={{
            fontSize: 'var(--font-size-lg)',
            marginBottom: 'var(--spacing-xl)'
          }}>
            Contact us to discuss your specific cleaning needs and get a personalized quote.
          </p>
          <a
            href="tel:[PHONE NUMBER]"
            style={{
              display: 'inline-block',
              backgroundColor: 'var(--color-secondary)',
              color: 'var(--color-primary)',
              padding: 'var(--spacing-md) var(--spacing-xl)',
              borderRadius: 'var(--radius-md)',
              fontSize: 'var(--font-size-lg)',
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'background-color var(--transition-fast)'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--color-secondary-dark)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--color-secondary)'}
          >
            Call [PHONE NUMBER]
          </a>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
