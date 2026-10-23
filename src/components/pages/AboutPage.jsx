import '../../styles/global.css';
import { siteConfig } from '../../config/site';

function AboutPage() {
  return (
    <div>
      <section className="section-alt">
        <div className="container">
          <h1 style={{
            textAlign: 'center',
            marginBottom: 'var(--spacing-lg)'
          }}>
            About {siteConfig.businessName}
          </h1>
          <p style={{
            textAlign: 'center',
            fontSize: 'var(--font-size-lg)',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Your trusted partner for professional cleaning services in {siteConfig.areasServed.join(', ')}.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-auto-fit-2xl" style={{ alignItems: 'center' }}>
            <div>
              <h2 style={{ color: 'var(--color-primary)' }}>Our Story</h2>
              <p>{siteConfig.about.story}</p>
            </div>
            <div className="mission-box">
              <h3>Our Mission</h3>
              <p style={{ fontSize: 'var(--font-size-lg)' }}>
                {siteConfig.about.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <h2 style={{
            textAlign: 'center',
            marginBottom: 'var(--spacing-2xl)'
          }}>
            Our Values
          </h2>
          <div className="grid-auto-fit">
            {siteConfig.aboutValues.map((value) => (
              <div key={value.title}>
                <h3 className="card-title">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{
            textAlign: 'center',
            marginBottom: 'var(--spacing-2xl)'
          }}>
            Why Choose Us
          </h2>
          <div className="grid-auto-fit-lg">
            {siteConfig.whyChooseUs.map((item) => (
              <div key={item.title} className="info-card">
                <h3 className="card-title">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
