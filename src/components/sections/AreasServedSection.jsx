import { siteConfig } from '../../config/site';

function AreasServedSection() {
  if (!siteConfig.features.areasServedSection) {
    return null;
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">
          Areas We Serve
        </h2>
        <div className="areas-grid">
          {siteConfig.areasServed.map((area) => (
            <div key={area} className="area-item">
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AreasServedSection;
