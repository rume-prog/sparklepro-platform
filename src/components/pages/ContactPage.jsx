import { useState } from 'react';
import '../../styles/global.css';
import { siteConfig } from '../../config/site';
import { buildWhatsAppMessage } from '../../utils/whatsapp';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    area: '',
    date: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const isWhatsAppSetup = siteConfig.contact.whatsappNumber &&
    !siteConfig.contact.whatsappNumber.startsWith('[');

  const isPhoneSetup = siteConfig.contact.phone &&
    !siteConfig.contact.phone.startsWith('[');

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    const message = buildWhatsAppMessage(formData);
    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div>
      <section className="section-alt">
        <div className="container">
          <h1 style={{
            textAlign: 'center',
            marginBottom: 'var(--spacing-lg)'
          }}>
            Contact Us
          </h1>
          <p style={{
            textAlign: 'center',
            fontSize: 'var(--font-size-lg)',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Get in touch with {siteConfig.businessName} for a free quote or to schedule your cleaning service.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-auto-fit-2xl">
            <div>
              <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-xl)' }}>
                Get in Touch
              </h2>
              <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--spacing-sm)' }}>
                  Phone
                </h3>
                <p style={{ fontSize: 'var(--font-size-lg)' }}>
                  {isPhoneSetup ? (
                    <a href={`tel:${siteConfig.contact.phone}`} style={{ color: 'var(--color-primary)' }}>
                      {siteConfig.contact.phone}
                    </a>
                  ) : (
                    <span style={{ color: 'var(--color-text-light)' }}>
                      {siteConfig.contact.phone}
                    </span>
                  )}
                </p>
              </div>
              <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--spacing-sm)' }}>
                  Email
                </h3>
                <p style={{ fontSize: 'var(--font-size-lg)' }}>
                  <a href={`mailto:${siteConfig.contact.email}`} style={{ color: 'var(--color-primary)' }}>
                    {siteConfig.contact.email}
                  </a>
                </p>
              </div>
              <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--spacing-sm)' }}>
                  Address
                </h3>
                <p style={{ fontSize: 'var(--font-size-lg)' }}>
                  {siteConfig.contact.address}
                </p>
                <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-light)' }}>
                  {siteConfig.contact.city}
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--spacing-sm)' }}>
                  Business Hours
                </h3>
                <p style={{ fontSize: 'var(--font-size-base)' }}>
                  Monday - Friday: {siteConfig.contact.hours.weekday}
                </p>
                <p style={{ fontSize: 'var(--font-size-base)' }}>
                  Saturday: {siteConfig.contact.hours.saturday}
                </p>
                <p style={{ fontSize: 'var(--font-size-base)' }}>
                  Sunday: {siteConfig.contact.hours.sunday}
                </p>
              </div>
            </div>

            <div className="quick-contact-box">
              <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-xl)' }}>
                Quick Contact
              </h2>
              <p style={{ marginBottom: 'var(--spacing-lg)' }}>
                For fastest response, call us directly or send us a message via WhatsApp.
              </p>
              {isWhatsAppSetup ? (
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{ marginBottom: 'var(--spacing-md)' }}
                >
                  Contact via WhatsApp
                </a>
              ) : (
                <button
                  disabled
                  className="btn-whatsapp"
                  style={{
                    marginBottom: 'var(--spacing-md)',
                    backgroundColor: 'var(--color-text-light)',
                    cursor: 'not-allowed'
                  }}
                >
                  Contact via WhatsApp
                </button>
              )}
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-light)' }}>
                We typically respond within {siteConfig.contact.responseTime} during business hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {siteConfig.features.bookingForm && (
        <section className="section-alt">
          <div className="container">
            <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-xl)', textAlign: 'center' }}>
              Request a Booking
            </h2>
            {!isWhatsAppSetup && (
              <div style={{
                backgroundColor: 'var(--color-warning)',
                color: 'var(--color-text)',
                padding: 'var(--spacing-md)',
                borderRadius: 'var(--radius-md)',
                marginBottom: 'var(--spacing-xl)',
                textAlign: 'center'
              }}>
                WhatsApp number not set up yet
              </div>
            )}
            <form
              onSubmit={handleSubmit}
              style={{
                maxWidth: '600px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spacing-lg)'
              }}
            >
              <div>
                <label htmlFor="name" style={{ display: 'block', marginBottom: 'var(--spacing-sm)', fontWeight: 500 }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-md)',
                    border: `1px solid ${errors.name ? 'var(--color-error)' : 'var(--color-border)'}`,
                    borderRadius: 'var(--radius-md)',
                    fontSize: 'var(--font-size-base)'
                  }}
                />
                {errors.name && (
                  <span id="name-error" style={{ color: 'var(--color-error)', fontSize: 'var(--font-size-sm)' }}>
                    {errors.name}
                  </span>
                )}
              </div>

              <div>
                <label htmlFor="phone" style={{ display: 'block', marginBottom: 'var(--spacing-sm)', fontWeight: 500 }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={errors.phone ? 'true' : 'false'}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-md)',
                    border: `1px solid ${errors.phone ? 'var(--color-error)' : 'var(--color-border)'}`,
                    borderRadius: 'var(--radius-md)',
                    fontSize: 'var(--font-size-base)'
                  }}
                />
                {errors.phone && (
                  <span id="phone-error" style={{ color: 'var(--color-error)', fontSize: 'var(--font-size-sm)' }}>
                    {errors.phone}
                  </span>
                )}
              </div>

              <div>
                <label htmlFor="service" style={{ display: 'block', marginBottom: 'var(--spacing-sm)', fontWeight: 500 }}>
                  Service *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={errors.service ? 'true' : 'false'}
                  aria-describedby={errors.service ? 'service-error' : undefined}
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-md)',
                    border: `1px solid ${errors.service ? 'var(--color-error)' : 'var(--color-border)'}`,
                    borderRadius: 'var(--radius-md)',
                    fontSize: 'var(--font-size-base)'
                  }}
                >
                  <option value="">Select a service</option>
                  {siteConfig.services.map((service) => (
                    <option key={service.name} value={service.name}>
                      {service.name}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <span id="service-error" style={{ color: 'var(--color-error)', fontSize: 'var(--font-size-sm)' }}>
                    {errors.service}
                  </span>
                )}
              </div>

              <div>
                <label htmlFor="area" style={{ display: 'block', marginBottom: 'var(--spacing-sm)', fontWeight: 500 }}>
                  Area in Nairobi
                </label>
                <input
                  type="text"
                  id="area"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-md)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: 'var(--font-size-base)'
                  }}
                />
              </div>

              <div>
                <label htmlFor="date" style={{ display: 'block', marginBottom: 'var(--spacing-sm)', fontWeight: 500 }}>
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-md)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: 'var(--font-size-base)'
                  }}
                />
              </div>

              <div>
                <label htmlFor="message" style={{ display: 'block', marginBottom: 'var(--spacing-sm)', fontWeight: 500 }}>
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-md)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: 'var(--font-size-base)',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={!isWhatsAppSetup}
                style={{
                  backgroundColor: isWhatsAppSetup ? '#25D366' : 'var(--color-text-light)',
                  color: 'white',
                  padding: 'var(--spacing-md) var(--spacing-xl)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 700,
                  cursor: isWhatsAppSetup ? 'pointer' : 'not-allowed',
                  border: 'none',
                  transition: 'background-color var(--transition-fast)'
                }}
              >
                Send via WhatsApp
              </button>

              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-light)', textAlign: 'center' }}>
                Your details are only used to prepare a WhatsApp message to us. They are not stored on this website.
              </p>
            </form>
          </div>
        </section>
      )}

      <section className="section-primary">
        <div className="container">
          <h2 className="section-title-white">
            Ready to Get Started?
          </h2>
          <p style={{
            fontSize: 'var(--font-size-lg)',
            marginBottom: 'var(--spacing-xl)'
          }}>
            Contact us today for a free, no-obligation quote for your cleaning needs.
          </p>
          {isPhoneSetup ? (
            <a href={`tel:${siteConfig.contact.phone}`} className="btn-primary">
              Call {siteConfig.contact.phone}
            </a>
          ) : (
            <button
              disabled
              className="btn-primary"
              style={{
                backgroundColor: 'var(--color-text-light)',
                cursor: 'not-allowed'
              }}
            >
              Call {siteConfig.contact.phone}
            </button>
          )}
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
