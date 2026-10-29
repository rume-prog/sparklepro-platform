import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site';

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: 'var(--font-size-6xl)', marginBottom: 'var(--spacing-md)' }}>
            404
          </h1>
          <h2 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--spacing-lg)' }}>
            Page Not Found
          </h2>
          <p style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--spacing-xl)', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            Sorry, we could not find the page you are looking for. The page may have been moved or deleted.
          </p>
          <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn-primary">
              Go to Homepage
            </Link>
            <Link to="/services" className="btn-secondary">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFoundPage;
