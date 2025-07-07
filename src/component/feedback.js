import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [rating, setRating] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dummy data for demonstration
  const [dummyReviews] = useState([
    {
      id: 1,
      customerName: 'Rajesh Kumar',
      review: 'Excellent service! Gas delivery is always on time and the staff is very professional.',
      rating: 5,
      sentiment: 1,
      date: '2024-01-15'
    },
    {
      id: 2,
      customerName: 'Priya Sharma',
      review: 'Very satisfied with the quality of service. Quick delivery and good customer support.',
      rating: 4,
      sentiment: 1,
      date: '2024-01-14'
    },
    {
      id: 3,
      customerName: 'Amit Singh',
      review: 'Delivery was delayed twice this month. Not happy with the service.',
      rating: 2,
      sentiment: 0,
      date: '2024-01-13'
    },
    {
      id: 4,
      customerName: 'Sunita Devi',
      review: 'Poor customer service. Had to wait for 3 hours for delivery.',
      rating: 1,
      sentiment: 0,
      date: '2024-01-12'
    },
    {
      id: 5,
      customerName: 'Vikash Gupta',
      review: 'Great experience! The delivery boy was very helpful and courteous.',
      rating: 5,
      sentiment: 1,
      date: '2024-01-11'
    },
    {
      id: 6,
      customerName: 'Neha Agarwal',
      review: 'Gas cylinder was not properly checked. Safety concerns.',
      rating: 2,
      sentiment: 0,
      date: '2024-01-10'
    }
  ]);

  const handleSubmit = async () => {
    if (!newReview.trim() || !customerName.trim()) return;

    setIsSubmitting(true);

    const reviewData = {
      customerName: customerName.trim(),
      review: newReview.trim(),
      rating: rating,
      date: new Date().toISOString().split('T')[0]
    };

    try {
      // Here you would send the data to your backend
      // const response = await fetch('/api/reviews', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(reviewData)
      // });
      // const result = await response.json();
      
      // For demo purposes, we'll add it to local state
      const newReviewObj = {
        id: Date.now(),
        ...reviewData,
        sentiment: Math.random() > 0.5 ? 1 : 0 // Random sentiment for demo
      };
      
      setReviews([newReviewObj, ...reviews]);
      setNewReview('');
      setCustomerName('');
      setRating(5);
      
      alert('Thank you for your feedback!');
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Error submitting review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const positiveReviews = [...dummyReviews, ...reviews].filter(review => review.sentiment === 1);
  const negativeReviews = [...dummyReviews, ...reviews].filter(review => review.sentiment === 0);

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="feedback-container">
      <div className="feedback-header">
        <h1>Customer Reviews</h1>
        <p>Indane Gas Distributor - Your Trusted Partner</p>
      </div>

      {/* Review Submission Form */}
      <div className="review-form-container">
        <h2>Share Your Experience</h2>
        <div className="review-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Your Name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="rating-select"
            >
              <option value={5}>5 Stars - Excellent</option>
              <option value={4}>4 Stars - Good</option>
              <option value={3}>3 Stars - Average</option>
              <option value={2}>2 Stars - Poor</option>
              <option value={1}>1 Star - Very Poor</option>
            </select>
          </div>

          <div className="form-group">
            <textarea
              placeholder="Write your review here..."
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              rows="4"
            />
          </div>

          <button onClick={handleSubmit} disabled={isSubmitting} className="submit-btn">
            {isSubmitting ? 'Submitting...' : 'Submit Review'}
          </button>
        </div>
      </div>

      {/* Reviews Display */}
      <div className="reviews-display">
        <div className="reviews-columns">
          {/* Positive Reviews Column */}
          <div className="review-column positive-column">
            <h3>
              <span className="column-icon">👍</span>
              Positive Reviews ({positiveReviews.length})
            </h3>
            <div className="reviews-list">
              {positiveReviews.map((review) => (
                <div key={review.id} className="review-card positive">
                  <div className="review-header">
                    <h4>{review.customerName}</h4>
                    <div className="review-meta">
                      <span className="rating">{renderStars(review.rating)}</span>
                      <span className="date">{review.date}</span>
                    </div>
                  </div>
                  <p className="review-text">{review.review}</p>
                  <div className="sentiment-badge positive-badge">
                    Model Output: 1 (Positive)
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Negative Reviews Column */}
          <div className="review-column negative-column">
            <h3>
              <span className="column-icon">👎</span>
              Negative Reviews ({negativeReviews.length})
            </h3>
            <div className="reviews-list">
              {negativeReviews.map((review) => (
                <div key={review.id} className="review-card negative">
                  <div className="review-header">
                    <h4>{review.customerName}</h4>
                    <div className="review-meta">
                      <span className="rating">{renderStars(review.rating)}</span>
                      <span className="date">{review.date}</span>
                    </div>
                  </div>
                  <p className="review-text">{review.review}</p>
                  <div className="sentiment-badge negative-badge">
                    Model Output: 0 (Negative)
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;