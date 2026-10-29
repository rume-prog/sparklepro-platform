import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { siteConfig } from '../../config/site';

function ServiceDetailPage() {
  const { slug } = useParams();
  const service = siteConfig.services.find(s => s.slug === slug);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    propertyAddress: '',
    propertySize: '',
    notes: '',
    honeypot: ''
  });
  const [formErrors, setFormErrors] = useState({});

  if (!service) {
    return (
      <div className="container" style={{ padding: 'var(--spacing-4xl) 0' }}>
        <h1>Service Not Found</h1>
        <p>The service you are looking for does not exist.</p>
        <Link to="/services" className="btn-primary">View All Services</Link>
      </div>
    );
  }

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    
    // Honeypot check
    if (formData.honeypot) {
      return;
    }

    // Validation
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!formData.preferredDate) errors.preferredDate = 'Preferred date is required';
    if (formData.preferredDate && new Date(formData.preferredDate) < new Date().setHours(0,0,0,0)) {
      errors.preferredDate = 'Date cannot be in the past';
    }
    if (!formData.preferredTime) errors.preferredTime = 'Please select a time slot';
    if (!formData.propertyAddress.trim()) errors.propertyAddress = 'Property address is required';
    if (!formData.propertySize.trim()) errors.propertySize = 'Property size/type is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Save to localStorage
    const booking = {
      ...formData,
      service: service.name,
      status: 'pending_confirmation',
      submittedAt: new Date().toISOString()
    };
    
    const existingBookings = JSON.parse(localStorage.getItem('sparklepro_bookings') || '[]');
    existingBookings.push(booking);
    localStorage.setItem('sparklepro_bookings', JSON.stringify(existingBookings));

    // TODO: Send to backend API
    // await fetch('/api/bookings', { method: 'POST', body: JSON.stringify(booking) });

    setBookingSubmitted(true);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      propertyAddress: '',
      propertySize: '',
      notes: '',
      honeypot: ''
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (formErrors[e.target.name]) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: null
      });
    }
  };

  const otherServices = siteConfig.services.filter(s => s.slug !== slug);

  return (
    <div style={{ backgroundColor: 'var(--color-service-bg)' }}>
      <section className="section">
        <div className="container">
          <Link to="/services" className="link-arrow">← Back to Services</Link>
          
          <h1 style={{ 
            marginTop: 'var(--spacing-lg)', 
            color: 'var(--color-primary-dark)',
            fontSize: 'var(--font-size-4xl)',
            fontWeight: '700'
          }}>
            {service.name}
          </h1>

          {/* Service Image */}
          {service.image ? (
            <img
              src={service.image.src}
              alt={service.image.alt}
              loading="lazy"
              width="1200"
              height="600"
              style={{
                marginTop: 'var(--spacing-lg)',
                borderRadius: 'var(--radius-lg)',
                width: '100%',
                maxWidth: '1200px',
                height: 'auto',
                objectFit: 'cover'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'block';
              }}
            />
          ) : null}
          <div 
            style={{
              display: service.image ? 'none' : 'block',
              marginTop: 'var(--spacing-lg)',
              borderRadius: 'var(--radius-lg)',
              width: '100%',
              maxWidth: '1200px',
              height: '400px',
              background: 'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 100%)'
            }}
            aria-hidden="true"
          />

          {/* Tagline */}
          {service.tagline && (
            <h2 style={{
              marginTop: 'var(--spacing-xl)',
              fontSize: 'var(--font-size-2xl)',
              fontWeight: '600',
              color: 'var(--color-primary)'
            }}>
              {service.tagline}
            </h2>
          )}

          {/* Intro */}
          {service.intro && (
            <p style={{
              marginTop: 'var(--spacing-md)',
              fontSize: 'var(--font-size-lg)',
              lineHeight: '1.8',
              maxWidth: '70ch',
              color: 'var(--color-text)'
            }}>
              {service.intro}
            </p>
          )}

          {/* Subheading */}
          {service.subheading && (
            <h3 style={{
              marginTop: 'var(--spacing-2xl)',
              fontSize: 'var(--font-size-xl)',
              fontWeight: '600',
              color: 'var(--color-primary-dark)'
            }}>
              {service.subheading}
            </h3>
          )}

          {/* Features */}
          {service.features && service.features.length > 0 && (
            <div style={{ marginTop: 'var(--spacing-lg)' }}>
              {service.features.map((feature, index) => (
                <p 
                  key={index}
                  style={{
                    marginTop: 'var(--spacing-md)',
                    fontSize: 'var(--font-size-lg)',
                    lineHeight: '1.7',
                    color: 'var(--color-text)'
                  }}
                >
                  <strong style={{ color: 'var(--color-primary-dark)' }}>
                    {feature.title}:
                  </strong>{' '}
                  {feature.description}
                </p>
              ))}
            </div>
          )}

          {/* Closing */}
          {service.closing && (
            <p style={{
              marginTop: 'var(--spacing-2xl)',
              fontSize: 'var(--font-size-lg)',
              lineHeight: '1.8',
              fontStyle: 'italic',
              paddingLeft: 'var(--spacing-lg)',
              borderLeft: '4px solid var(--color-primary)',
              color: 'var(--color-text)'
            }}>
              {service.closing}
            </p>
          )}

          {/* Quick Details */}
          <div style={{
            marginTop: 'var(--spacing-2xl)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--spacing-xl)',
            padding: 'var(--spacing-lg)',
            backgroundColor: 'var(--color-background)',
            borderRadius: 'var(--radius-md)'
          }}>
            {service.bestFor && (
              <div>
                <strong style={{ color: 'var(--color-primary-dark)' }}>Best for:</strong>
                <span style={{ marginLeft: 'var(--spacing-sm)', color: 'var(--color-text)' }}>
                  {service.bestFor}
                </span>
              </div>
            )}
            {service.duration && (
              <div>
                <strong style={{ color: 'var(--color-primary-dark)' }}>Duration:</strong>
                <span style={{ marginLeft: 'var(--spacing-sm)', color: 'var(--color-text)' }}>
                  {service.duration}
                </span>
              </div>
            )}
            {service.frequency && (
              <div>
                <strong style={{ color: 'var(--color-primary-dark)' }}>Frequency:</strong>
                <span style={{ marginLeft: 'var(--spacing-sm)', color: 'var(--color-text)' }}>
                  {service.frequency}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="container">
          <h2 className="section-title">Book This Service</h2>
          
          {!showBookingForm && !bookingSubmitted && (
            <div style={{ textAlign: 'center' }}>
              <button 
                onClick={() => setShowBookingForm(true)}
                className="btn-primary"
                style={{ fontSize: 'var(--font-size-lg)', padding: 'var(--spacing-md) var(--spacing-xl)' }}
              >
                Book {service.name}
              </button>
            </div>
          )}

          {showBookingForm && !bookingSubmitted && (
            <form 
              onSubmit={handleBookingSubmit}
              style={{ 
                maxWidth: '600px', 
                margin: '0 auto',
                padding: 'var(--spacing-xl)',
                backgroundColor: 'var(--color-background-alt)',
                borderRadius: 'var(--radius-lg)'
              }}
            >
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleInputChange}
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
              />

              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <label htmlFor="fullName" style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: '600' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-sm)',
                    border: `1px solid ${formErrors.fullName ? 'var(--color-error)' : 'var(--color-border)'}`,
                    borderRadius: 'var(--radius-sm)',
                    fontSize: 'var(--font-size-base)'
                  }}
                  aria-invalid={formErrors.fullName ? 'true' : 'false'}
                  aria-describedby={formErrors.fullName ? 'fullName-error' : undefined}
                />
                {formErrors.fullName && (
                  <span id="fullName-error" style={{ color: 'var(--color-error)', fontSize: 'var(--font-size-sm)' }}>
                    {formErrors.fullName}
                  </span>
                )}
              </div>

              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: '600' }}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-sm)',
                    border: `1px solid ${formErrors.email ? 'var(--color-error)' : 'var(--color-border)'}`,
                    borderRadius: 'var(--radius-sm)',
                    fontSize: 'var(--font-size-base)'
                  }}
                  aria-invalid={formErrors.email ? 'true' : 'false'}
                  aria-describedby={formErrors.email ? 'email-error' : undefined}
                />
                {formErrors.email && (
                  <span id="email-error" style={{ color: 'var(--color-error)', fontSize: 'var(--font-size-sm)' }}>
                    {formErrors.email}
                  </span>
                )}
              </div>

              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <label htmlFor="phone" style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: '600' }}>
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-sm)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: 'var(--font-size-base)'
                  }}
                />
              </div>

              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <label htmlFor="preferredDate" style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: '600' }}>
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-sm)',
                    border: `1px solid ${formErrors.preferredDate ? 'var(--color-error)' : 'var(--color-border)'}`,
                    borderRadius: 'var(--radius-sm)',
                    fontSize: 'var(--font-size-base)'
                  }}
                  aria-invalid={formErrors.preferredDate ? 'true' : 'false'}
                  aria-describedby={formErrors.preferredDate ? 'preferredDate-error' : undefined}
                />
                {formErrors.preferredDate && (
                  <span id="preferredDate-error" style={{ color: 'var(--color-error)', fontSize: 'var(--font-size-sm)' }}>
                    {formErrors.preferredDate}
                  </span>
                )}
              </div>

              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <label htmlFor="preferredTime" style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: '600' }}>
                  Preferred Time Slot *
                </label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-sm)',
                    border: `1px solid ${formErrors.preferredTime ? 'var(--color-error)' : 'var(--color-border)'}`,
                    borderRadius: 'var(--radius-sm)',
                    fontSize: 'var(--font-size-base)'
                  }}
                  aria-invalid={formErrors.preferredTime ? 'true' : 'false'}
                  aria-describedby={formErrors.preferredTime ? 'preferredTime-error' : undefined}
                >
                  <option value="">Select a time slot</option>
                  <option value="morning">Morning (8am - 12pm)</option>
                  <option value="afternoon">Afternoon (12pm - 5pm)</option>
                  <option value="evening">Evening (5pm - 8pm)</option>
                </select>
                {formErrors.preferredTime && (
                  <span id="preferredTime-error" style={{ color: 'var(--color-error)', fontSize: 'var(--font-size-sm)' }}>
                    {formErrors.preferredTime}
                  </span>
                )}
              </div>

              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <label htmlFor="propertyAddress" style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: '600' }}>
                  Property Address / Area *
                </label>
                <input
                  type="text"
                  id="propertyAddress"
                  name="propertyAddress"
                  value={formData.propertyAddress}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-sm)',
                    border: `1px solid ${formErrors.propertyAddress ? 'var(--color-error)' : 'var(--color-border)'}`,
                    borderRadius: 'var(--radius-sm)',
                    fontSize: 'var(--font-size-base)'
                  }}
                  aria-invalid={formErrors.propertyAddress ? 'true' : 'false'}
                  aria-describedby={formErrors.propertyAddress ? 'propertyAddress-error' : undefined}
                />
                {formErrors.propertyAddress && (
                  <span id="propertyAddress-error" style={{ color: 'var(--color-error)', fontSize: 'var(--font-size-sm)' }}>
                    {formErrors.propertyAddress}
                  </span>
                )}
              </div>

              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <label htmlFor="propertySize" style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: '600' }}>
                  Property Size / Type *
                </label>
                <input
                  type="text"
                  id="propertySize"
                  name="propertySize"
                  value={formData.propertySize}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., 3-bedroom apartment, 2000 sq ft house"
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-sm)',
                    border: `1px solid ${formErrors.propertySize ? 'var(--color-error)' : 'var(--color-border)'}`,
                    borderRadius: 'var(--radius-sm)',
                    fontSize: 'var(--font-size-base)'
                  }}
                  aria-invalid={formErrors.propertySize ? 'true' : 'false'}
                  aria-describedby={formErrors.propertySize ? 'propertySize-error' : undefined}
                />
                {formErrors.propertySize && (
                  <span id="propertySize-error" style={{ color: 'var(--color-error)', fontSize: 'var(--font-size-sm)' }}>
                    {formErrors.propertySize}
                  </span>
                )}
              </div>

              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <label htmlFor="notes" style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: '600' }}>
                  Notes (optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows="3"
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-sm)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: 'var(--font-size-base)',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div style={{ 
                marginTop: 'var(--spacing-lg)', 
                display: 'flex', 
                gap: 'var(--spacing-md)',
                flexWrap: 'wrap'
              }}>
                <button type="submit" className="btn-primary">
                  Submit Booking Request
                </button>
                <button 
                  type="button" 
                  onClick={() => setShowBookingForm(false)}
                  className="btn-secondary"
                >
                  Cancel
                </button>
              </div>

              <p style={{ 
                marginTop: 'var(--spacing-md)', 
                fontSize: 'var(--font-size-sm)', 
                color: 'var(--color-text-lighter)',
                textAlign: 'center'
              }}>
                Demo booking form, no real appointment is made.
              </p>
            </form>
          )}

          {bookingSubmitted && (
            <div style={{
              maxWidth: '600px',
              margin: '0 auto',
              padding: 'var(--spacing-xl)',
              backgroundColor: 'var(--color-success)',
              color: 'white',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center'
            }}>
              <h3 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--spacing-md)' }}>
                Booking Request Received!
              </h3>
              <p style={{ fontSize: 'var(--font-size-lg)' }}>
                Our team will confirm your appointment shortly.
              </p>
              <button 
                onClick={() => {
                  setBookingSubmitted(false);
                  setShowBookingForm(false);
                }}
                className="btn-secondary"
                style={{ 
                  marginTop: 'var(--spacing-lg)',
                  backgroundColor: 'white',
                  color: 'var(--color-success)'
                }}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Other Services */}
      {otherServices.length > 0 && (
        <section className="section">
          <div className="container">
            <h3 style={{ 
              fontSize: 'var(--font-size-xl)', 
              fontWeight: '600',
              marginBottom: 'var(--spacing-lg)',
              color: 'var(--color-primary-dark)'
            }}>
              Other Services
            </h3>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 'var(--spacing-md)' 
            }}>
              {otherServices.map(otherService => (
                <Link
                  key={otherService.slug}
                  to={`/services/${otherService.slug}`}
                  className="btn-secondary"
                  style={{ textDecoration: 'none' }}
                >
                  {otherService.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default ServiceDetailPage;
