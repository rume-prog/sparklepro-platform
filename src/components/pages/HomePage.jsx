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
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{
            color: 'white',
            fontSize: 'var(--font-size-5xl)',
            marginBottom: 'var(--spacing-lg)'
          }}>
            Professional Cleaning Services in Nairobi
          </h1>
          <p style={{
            fontSize: 'var(--font-size-xl)',
            marginBottom: 'var(--spacing-xl)',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Transform your home or business with our expert cleaning services. Reliable, affordable, and always on time.
          </p>
          <Link
            to="/contact"
            style={{
              display: 'inline-block',
              backgroundColor: 'var(--color-secondary)',
              color: 'white',
              padding: 'var(--spacing-md) var(--spacing-xl)',
              borderRadius: 'var(--radius-md)',
              fontSize: 'var(--font-size-lg)',
              fontWeight: 'bold',
              textDecoration: 'none',
              transition: 'background-color var(--transition-fast)'
            }}
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section style={{
        padding: 'var(--spacing-3xl) 0',
        backgroundColor: 'var(--color-background-alt)'
      }}>
        <div className="container">
          <h2 style={{
            textAlign: 'center',
            marginBottom: 'var(--spacing-2xl)'
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
              boxShadow: 'var(--shadow-md)'
            }}>
              <h3 style={{ color: 'var(--color-primary)' }}>Residential Cleaning</h3>
              <p>Complete home cleaning services tailored to your needs.</p>
            </div>
            <div style={{
              backgroundColor: 'white',
              padding: 'var(--spacing-xl)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <h3 style={{ color: 'var(--color-primary)' }}>Commercial Cleaning</h3>
              <p>Professional cleaning for offices and business spaces.</p>
            </div>
            <div style={{
              backgroundColor: 'white',
              padding: 'var(--spacing-xl)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-md)'
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
                fontWeight: 'bold',
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
            marginBottom: 'var(--spacing-2xl)'
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
              <p>We arrive on time and deliver consistent quality every visit.</p>
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
            Contact us today for a free quote and experience the SparklePro difference.
          </p>
          <Link
            to="/contact"
            style={{
              display: 'inline-block',
              backgroundColor: 'white',
              color: 'var(--color-primary)',
              padding: 'var(--spacing-md) var(--spacing-xl)',
              borderRadius: 'var(--radius-md)',
              fontSize: 'var(--font-size-lg)',
              fontWeight: 'bold',
              textDecoration: 'none',
              transition: 'background-color var(--transition-fast)'
            }}
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
