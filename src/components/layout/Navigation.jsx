import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/global.css';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
          fontWeight: 700,
          textDecoration: 'none',
          transition: 'color var(--transition-fast)'
        }}
        onMouseEnter={(e) => e.target.style.color = 'var(--color-secondary)'}
        onMouseLeave={(e) => e.target.style.color = 'white'}
        >
          SparklePro
        </Link>

        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          style={{
            display: 'none',
            backgroundColor: 'transparent',
            border: '2px solid white',
            color: 'white',
            padding: 'var(--spacing-sm)',
            borderRadius: 'var(--radius-sm)',
            cursor: 'pointer',
            fontSize: 'var(--font-size-lg)',
            transition: 'background-color var(--transition-fast)'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

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
              onClick={closeMenu}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: 'var(--font-size-base)',
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-secondary)'}
              onMouseLeave={(e) => e.target.style.color = 'white'}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              onClick={closeMenu}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: 'var(--font-size-base)',
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-secondary)'}
              onMouseLeave={(e) => e.target.style.color = 'white'}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={closeMenu}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: 'var(--font-size-base)',
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-secondary)'}
              onMouseLeave={(e) => e.target.style.color = 'white'}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={closeMenu}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: 'var(--font-size-base)',
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-secondary)'}
              onMouseLeave={(e) => e.target.style.color = 'white'}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <style>{`
        @media (max-width: 767px) {
          nav button {
            display: block !important;
          }
          nav ul {
            display: ${isMenuOpen ? 'flex' : 'none'} !important;
            flex-direction: column !important;
            width: 100% !important;
            gap: var(--spacing-md) !important;
            padding-top: var(--spacing-md) !important;
            border-top: 1px solid rgba(255, 255, 255, 0.2) !important;
          }
          nav li {
            width: 100%;
          }
          nav a {
            display: block;
            padding: var(--spacing-sm) 0;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navigation;
