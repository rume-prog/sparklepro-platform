import '../../styles/global.css';

function LogoStrip() {
  const brands = [
    {
      name: 'Nexa Offices',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="3" y="3" width="7" height="18" rx="1" fill="currentColor"/>
          <rect x="14" y="3" width="7" height="18" rx="1" fill="currentColor"/>
        </svg>
      )
    },
    {
      name: 'Velora Suites',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 3L3 21H21L12 3Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      name: 'UrbanNest Living',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M3 9L12 2L21 9V21H3V9Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      name: 'CrestPoint Group',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="12" cy="12" r="10" fill="currentColor"/>
          <path d="M12 6L15 12H9L12 6Z" fill="white"/>
        </svg>
      )
    }
  ];

  // Repeat brands enough times to fill wide screens (4 repeats)
  const repeatedBrands = [...brands, ...brands, ...brands, ...brands];

  const getBrandClass = (name) => {
    const brandMap = {
      'Nexa Offices': 'logo-strip-nexa',
      'Velora Suites': 'logo-strip-velora',
      'UrbanNest Living': 'logo-strip-urbannest',
      'CrestPoint Group': 'logo-strip-crestpoint'
    };
    return brandMap[name] || '';
  };

  return (
    <section className="logo-strip-section" aria-label="Fictional demo partner brands">
      <div className="container">
        <h3 className="logo-strip-heading">
          Sample partner brands (fictional demo)
        </h3>
      </div>
      <div className="logo-strip-container">
        <div className="logo-strip-track" aria-hidden="true">
          {repeatedBrands.map((brand, index) => (
            <div key={index} className={`logo-strip-item ${getBrandClass(brand.name)}`}>
              <span className="logo-strip-icon" aria-hidden="true">
                {brand.icon}
              </span>
              <span className="logo-strip-name">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoStrip;
