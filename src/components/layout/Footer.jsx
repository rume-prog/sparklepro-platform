import { Link } from 'react-router-dom';
import '../../styles/global.css';
import { siteConfig } from '../../config/site';

function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--color-text)',
      color: 'white',
      padding: 'var(--spacing-2xl) 0',
      marginTop: 'var(--spacing-3xl)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--spacing-xl)',
          marginBottom: 'var(--spacing-xl)'
        }}>
          <div>
            <h3 style={{
              color: 'white',
              fontSize: 'var(--font-size-xl)',
              marginBottom: 'var(--spacing-md)'
            }}>
              {siteConfig.businessName}
            </h3>
            <p style={{
              color: 'var(--color-text-lighter)',
              fontSize: 'var(--font-size-sm)',
              marginBottom: 0
            }}>
              {siteConfig.description} in {siteConfig.areasServed.join(', ')}.
            </p>
          </div>

          <div>
            <h4 style={{
              color: 'white',
              fontSize: 'var(--font-size-lg)',
              marginBottom: 'var(--spacing-md)'
            }}>
              Quick Links
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{ marginBottom: 'var(--spacing-sm)' }}>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li style={{ marginBottom: 'var(--spacing-sm)' }}>
                <Link to="/services" className="footer-link">
                  Services
                </Link>
              </li>
              <li style={{ marginBottom: 'var(--spacing-sm)' }}>
                <Link to="/about" className="footer-link">
                  About
                </Link>
              </li>
              <li style={{ marginBottom: 'var(--spacing-sm)' }}>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{
              color: 'white',
              fontSize: 'var(--font-size-lg)',
              marginBottom: 'var(--spacing-md)'
            }}>
              Contact Info
            </h4>
            <p style={{
              color: 'var(--color-text-lighter)',
              fontSize: 'var(--font-size-sm)',
              marginBottom: 'var(--spacing-sm)'
            }}>
              {siteConfig.contact.address}
            </p>
            <p style={{
              color: 'var(--color-text-lighter)',
              fontSize: 'var(--font-size-sm)',
              marginBottom: 'var(--spacing-sm)'
            }}>
              Phone: {siteConfig.contact.phone}
            </p>
            <p style={{
              color: 'var(--color-text-lighter)',
              fontSize: 'var(--font-size-sm)',
              marginBottom: 0
            }}>
              Email: {siteConfig.contact.email}
            </p>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--color-border-dark)',
          paddingTop: 'var(--spacing-lg)',
          textAlign: 'center',
          color: 'var(--color-text-lighter)',
          fontSize: 'var(--font-size-sm)'
        }}>
          <p style={{ marginBottom: 0 }}>
            © {new Date().getFullYear()} {siteConfig.businessName} Cleaning Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
