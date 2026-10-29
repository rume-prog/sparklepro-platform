import { useState } from 'react';
import { siteConfig } from '../../config/site';
import StarRating from '../ui/StarRating';

function ReviewsSection() {
  if (!siteConfig.features.reviewsSection) {
    return null;
  }

  const [formData, setFormData] = useState({
    name: '',
    rating: 0,
    comment: '',
    honeypot: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submittedReviews, setSubmittedReviews] = useState(() => {
    const saved = localStorage.getItem('sparklepro_pending_reviews');
    return saved ? JSON.parse(saved) : [];
  });

  const sampleReviews = [
    {
      name: 'James M.',
      rating: 5,
      comment: 'Excellent service! My home has never been cleaner. Very professional team.'
    },
    {
      name: 'Sarah K.',
      rating: 4.5,
      comment: 'Great attention to detail. They arrived on time and finished within the estimated time.'
    },
    {
      name: 'David O.',
      rating: 5,
      comment: 'Reliable and thorough. I have been using their services for months and always satisfied.'
    }
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (formData.rating === 0) {
      newErrors.rating = 'Please select a rating';
    }
    if (!formData.comment.trim()) {
      newErrors.comment = 'Comment is required';
    }
    if (formData.comment.trim().length < 10) {
      newErrors.comment = 'Comment must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Honeypot check - if filled, it's a bot
    if (formData.honeypot) {
      return;
    }

    if (!validateForm()) {
      return;
    }

    const newReview = {
      id: Date.now(),
      name: formData.name,
      rating: formData.rating,
      comment: formData.comment,
      date: new Date().toISOString(),
      status: 'pending_approval'
    };

    // Save to localStorage
    const updatedReviews = [...submittedReviews, newReview];
    setSubmittedReviews(updatedReviews);
    localStorage.setItem('sparklepro_pending_reviews', JSON.stringify(updatedReviews));

    // TODO: Send to backend API for moderation
    // POST /api/reviews
    // {
    //   name: formData.name,
    //   rating: formData.rating,
    //   comment: formData.comment
    // }

    setSubmitted(true);
    setFormData({ name: '', rating: 0, comment: '', honeypot: '' });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const isGoogleReviewSetup = siteConfig.googleReviewUrl &&
    !siteConfig.googleReviewUrl.startsWith('[');

  return (
    <section className="section-alt">
      <div className="container">
        <h2 className="section-title">
          Sample reviews (fictional demo)
        </h2>

        <div className="reviews-grid">
          {sampleReviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <span className="review-name">{review.name}</span>
                <StarRating rating={review.rating} mode="display" size="sm" />
              </div>
              <p className="review-comment">{review.comment}</p>
            </div>
          ))}
        </div>

        <div className="review-form-container">
          <h3 className="review-form-title">Leave a Review</h3>
          {submitted ? (
            <div className="review-success">
              <p>Thank you for your review! It has been submitted and is pending approval.</p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="btn-secondary"
                style={{ marginTop: 'var(--spacing-md)' }}
              >
                Submit another review
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="review-form">
              <div className="form-field">
                <label htmlFor="review-name">Name *</label>
                <input
                  type="text"
                  id="review-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'review-name-error' : undefined}
                />
                {errors.name && (
                  <span id="review-name-error" className="form-error">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="form-field">
                <StarRating
                  rating={formData.rating}
                  onRatingChange={(value) => setFormData(prev => ({ ...prev, rating: value }))}
                  mode="input"
                  size="lg"
                />
                {errors.rating && (
                  <span className="form-error">{errors.rating}</span>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="review-comment">Comment *</label>
                <textarea
                  id="review-comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  rows={4}
                  aria-required="true"
                  aria-invalid={errors.comment ? 'true' : 'false'}
                  aria-describedby={errors.comment ? 'review-comment-error' : undefined}
                />
                {errors.comment && (
                  <span id="review-comment-error" className="form-error">
                    {errors.comment}
                  </span>
                )}
              </div>

              {/* Honeypot field - hidden from users, bots will fill it */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                style={{ display: 'none' }}
                tabIndex="-1"
                aria-hidden="true"
              />

              <button type="submit" className="btn-primary">
                Submit Review
              </button>

              <p className="review-disclaimer">
                Your review will be submitted for approval before being displayed publicly.
              </p>
            </form>
          )}
        </div>

        {isGoogleReviewSetup && (
          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)' }}>
            <a
              href={siteConfig.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Leave a Google Review
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default ReviewsSection;
