import { useState } from 'react';
import '../../styles/global.css';

function StarRating({ rating, onRatingChange, mode = 'display', size = 'md' }) {
  const [hoverRating, setHoverRating] = useState(0);

  const stars = [1, 2, 3, 4, 5];

  const handleMouseEnter = (star) => {
    if (mode === 'input') {
      setHoverRating(star);
    }
  };

  const handleMouseLeave = () => {
    if (mode === 'input') {
      setHoverRating(0);
    }
  };

  const handleClick = (star) => {
    if (mode === 'input' && onRatingChange) {
      onRatingChange(star);
    }
  };

  const handleKeyDown = (e, star) => {
    if (mode === 'input' && onRatingChange) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onRatingChange(star);
      }
    }
  };

  const getStarDisplay = (star) => {
    const currentRating = hoverRating || rating;
    if (currentRating >= star) {
      return '★';
    } else if (currentRating >= star - 0.5) {
      return '½';
    } else {
      return '☆';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'star-rating-sm';
      case 'lg':
        return 'star-rating-lg';
      default:
        return 'star-rating-md';
    }
  };

  if (mode === 'display') {
    return (
      <div className={`star-rating ${getSizeClass()}`} aria-label={`${rating} out of 5 stars`}>
        <span className="star-rating-stars" aria-hidden="true">
          {stars.map((star) => (
            <span key={star} className="star-rating-star">
              {getStarDisplay(star)}
            </span>
          ))}
        </span>
        <span className="star-rating-text">{rating} out of 5</span>
      </div>
    );
  }

  if (mode === 'input') {
    return (
      <div className={`star-rating star-rating-input ${getSizeClass()}`}>
        <span className="star-rating-label" id="rating-label">Rating</span>
        <div
          className="star-rating-stars"
          role="radiogroup"
          aria-labelledby="rating-label"
          aria-label={`Current rating: ${rating} out of 5 stars`}
        >
          {stars.map((star) => (
            <button
              key={star}
              type="button"
              className={`star-rating-star-button ${rating >= star ? 'star-rating-star-button-active' : ''}`}
              aria-label={`${star} star${star === rating ? ', selected' : ''}`}
              aria-checked={rating === star}
              onMouseEnter={() => handleMouseEnter(star)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(star)}
              onKeyDown={(e) => handleKeyDown(e, star)}
            >
              <span aria-hidden="true">{getStarDisplay(star)}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return null;
}

export default StarRating;
