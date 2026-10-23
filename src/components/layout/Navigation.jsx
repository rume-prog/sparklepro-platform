import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/global.css';
import { siteConfig } from '../../config/site';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          {siteConfig.businessName}
        </Link>

        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          className="navbar-toggle"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'navbar-menu-open' : ''}`}>
          <li>
            <Link to="/" onClick={closeMenu} className="navbar-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={closeMenu} className="navbar-link">
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu} className="navbar-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu} className="navbar-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
