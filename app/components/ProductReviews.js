"use client";

import { useState } from 'react';

const ProductReviews = ({ reviews }) => {
  const [sortDate, setSortDate] = useState('none'); 
  const [sortRating, setSortRating] = useState('none');
  
  const sortedReviews = [...reviews].sort((a, b) => {
    // If neither date nor rating sorting is selected, return original order
    if (sortDate === 'none' && sortRating === 'none') {
      return 0; 
    }

    // Apply sorting by Date if selected
    if (sortDate === 'newest') {
      return new Date(b.date) - new Date(a.date); 
    } else if (sortDate === 'oldest') {
      return new Date(a.date) - new Date(b.date); 
    }

    // Apply sorting by Rating if selected
    if (sortRating === 'highest') {
      return b.rating - a.rating; 
    } else if (sortRating === 'lowest') {
      return a.rating - b.rating; 
    }

    return 0; // Default case when no sorting is applied
  });

  const handleDateSortChange = (e) => {
    setSortDate(e.target.value);
    setSortRating('none'); 
  };

  const handleRatingSortChange = (e) => {
    setSortRating(e.target.value);
    setSortDate('none'); 
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Reviews</h2>

      {/* Dropdown for sorting by Date */}
      <div className="mb-4">
        <label htmlFor="sortDate" className="mr-2 text-gray-600">Sort by Date:</label>
        <select 
          id="sortDate" 
          value={sortDate} 
          onChange={handleDateSortChange} 
          className="p-2 border rounded"
        >
          <option value="none">Default</option>
          <option value="newest">Newest to Oldest</option>
          <option value="oldest">Oldest to Newest</option>
        </select>
      </div>

      {/* Dropdown for sorting by Rating */}
      <div className="mb-4">
        <label htmlFor="sortRating" className="mr-2 text-gray-600">Sort by Rating:</label>
        <select 
          id="sortRating" 
          value={sortRating} 
          onChange={handleRatingSortChange} 
          className="p-2 border rounded"
        >
          <option value="none">Default</option>
          <option value="highest">Highest to Lowest</option>
          <option value="lowest">Lowest to Highest</option>
        </select>
      </div>

      {sortedReviews.length > 0 ? (
        sortedReviews.map((review) => (
          <div key={review.reviewerEmail} className="mt-4 p-4 border rounded-lg shadow">
            <p>
              <strong>{review.reviewerName}</strong> (
              {new Date(review.date).toLocaleDateString()} )
            </p>
            <p>Rating: {review.rating} / 5</p>
            <p>{review.comment}</p>
          </div>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
}

export default ProductReviews;
