import { Link } from 'react-router-dom';
import '../../styles/global.css';

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        backgroundColor: 'var(--color-primary)',
        color: 'white',
        padding: 'var(--spacing-4xl) 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{
            color: 'white',
            fontSize: 'var(--font-size-6xl)',
            marginBottom: 'var(--spacing-md)',
            fontWeight: 700,
            lineHeight: 1.1
          }}>
            Professional Cleaning in Nairobi
          </h1>
          <p style={{
            fontSize: 'var(--font-size-xl)',
            marginBottom: 'var(--spacing-xl)',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.5
          }}>
            Expert cleaning services for homes and businesses
          </p>
          <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
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
              Get a Free Quote
            </Link>
            <Link
              to="/services"
              style={{
                display: 'inline-block',
                backgroundColor: 'transparent',
                color: 'white',
                padding: 'var(--spacing-md) var(--spacing-xl)',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-lg)',
                fontWeight: 500,
                textDecoration: 'none',
                border: '2px solid white',
                transition: 'background-color var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              View Services
            </Link>
          </div>
        </div>

        {/* Decorative SVG Pattern */}
        <svg
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '300px',
            height: '300px',
            opacity: 0.1,
            pointerEvents: 'none'
          }}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="80" cy="20" r="15" fill="white" />
          <circle cx="90" cy="50" r="10" fill="white" />
          <circle cx="70" cy="70" r="20" fill="white" />
        </svg>
      </section>

      {/* Services Preview */}
      <section style={{
        padding: 'var(--spacing-3xl) 0',
        backgroundColor: 'var(--color-background-alt)'
      }}>
        <div className="container">
          <h2 style={{
            textAlign: 'center',
            marginBottom: 'var(--spacing-2xl)',
            color: 'var(--color-primary)'
          }}>
            Our Services
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--spacing-xl)'
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: 'var(--spacing-xl)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--color-border)'
            }}>
              <h3 style={{ color: 'var(--color-primary)' }}>Residential Cleaning</h3>
              <p>Complete home cleaning services tailored to your needs.</p>
            </div>
            <div style={{
              backgroundColor: 'white',
              padding: 'var(--spacing-xl)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--color-border)'
            }}>
              <h3 style={{ color: 'var(--color-primary)' }}>Commercial Cleaning</h3>
              <p>Professional cleaning for offices and business spaces.</p>
            </div>
            <div style={{
              backgroundColor: 'white',
              padding: 'var(--spacing-xl)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--color-border)'
            }}>
              <h3 style={{ color: 'var(--color-primary)' }}>Deep Cleaning</h3>
              <p>Thorough cleaning for a fresh start.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)' }}>
            <Link
              to="/services"
              style={{
                color: 'var(--color-primary)',
                fontSize: 'var(--font-size-lg)',
                fontWeight: 700,
                textDecoration: 'none'
              }}
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{
        padding: 'var(--spacing-3xl) 0'
      }}>
        <div className="container">
          <h2 style={{
            textAlign: 'center',
            marginBottom: 'var(--spacing-2xl)',
            color: 'var(--color-primary)'
          }}>
            Why Choose SparklePro?
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--spacing-xl)'
          }}>
            <div>
              <h3 style={{ color: 'var(--color-primary)' }}>Reliable</h3>
              <p>Consistent quality for every cleaning visit.</p>
            </div>
            <div>
              <h3 style={{ color: 'var(--color-primary)' }}>Affordable</h3>
              <p>Competitive pricing with no hidden fees.</p>
            </div>
            <div>
              <h3 style={{ color: 'var(--color-primary)' }}>Professional</h3>
              <p>Trained cleaning professionals.</p>
            </div>
            <div>
              <h3 style={{ color: 'var(--color-primary)' }}>Flexible</h3>
              <p>Scheduling that works around your busy life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        backgroundColor: 'var(--color-primary)',
        color: 'white',
        padding: 'var(--spacing-3xl) 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: 'var(--spacing-md)' }}>
            Ready for a Cleaner Space?
          </h2>
          <p style={{
            fontSize: 'var(--font-size-lg)',
            marginBottom: 'var(--spacing-xl)'
          }}>
            Contact us today for a free quote.
          </p>
          <Link
            to="/contact"
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
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
