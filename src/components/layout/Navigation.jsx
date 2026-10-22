import { Link } from 'react-router-dom';
import '../../styles/global.css';

function Navigation() {
  return (
    <nav style={{
      backgroundColor: 'var(--color-primary)',
      padding: 'var(--spacing-md) 0',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: 'var(--shadow-md)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 'var(--spacing-md)'
      }}>
        <Link to="/" style={{
          color: 'white',
          fontSize: 'var(--font-size-xl)',
          fontWeight: 'bold',
          textDecoration: 'none'
        }}>
          SparklePro
        </Link>

        <ul style={{
          display: 'flex',
          listStyle: 'none',
          gap: 'var(--spacing-lg)',
          margin: 0,
          padding: 0,
          flexWrap: 'wrap'
        }}>
          <li>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: 'var(--font-size-base)',
                transition: 'color var(--transition-fast)'
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: 'var(--font-size-base)',
                transition: 'color var(--transition-fast)'
              }}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: 'var(--font-size-base)',
                transition: 'color var(--transition-fast)'
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: 'var(--font-size-base)',
                transition: 'color var(--transition-fast)'
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
