
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SortDropdown = ({ currentSortBy, currentOrder }) => {
  const router = useRouter();
  const [sortBy, setSortBy] = useState(currentSortBy);
  const [order, setOrder] = useState(currentOrder);

  const handleSortChange = () => {
    // Update the URL with the new sort parameters
    const newSort = sortBy ? `sortBy=${sortBy}` : '';
    const newOrder = order ? `&order=${order}` : '';
    router.push(`/products?${newSort}${newOrder}`);
  };

  return (
    <div className="mb-4">
      <label htmlFor="sortBy" className="mr-2 text-gray-600">Sort by:</label>
      <select id="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)} onBlur={handleSortChange} className="border p-2">
        <option value="">Select...</option>
        <option value="price">Price</option>
      </select>

      <label htmlFor="order" className="ml-4 mr-2 text-gray-600">Order:</label>
      <select id="order" value={order} onChange={(e) => setOrder(e.target.value)} onBlur={handleSortChange} className="border p-2">
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default SortDropdown;

