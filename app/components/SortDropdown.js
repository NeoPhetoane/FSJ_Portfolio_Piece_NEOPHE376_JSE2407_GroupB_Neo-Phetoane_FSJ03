
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SortDropdown = ({ currentSortBy, currentOrder }) => {
  const router = useRouter();
  const [sortBy, setSortBy] = useState(currentSortBy);
  const [order, setOrder] = useState(currentOrder);

  const handleSortChange = (e) => {
    const value = e.target.value;

    // Split value into sortBy and order
    const [newSortBy, newOrder] = value.split('|');

    setSortBy(newSortBy);
    setOrder(newOrder);

    // Update the URL with new sort parameters
    router.push(`/products?sortBy=${encodeURIComponent(newSortBy)}&order=${encodeURIComponent(newOrder)}`);
  };


  return (
    <div className="mb-4">
      <label htmlFor="sort" className="mr-2 text-gray-600">Sort by:</label>
      <select id="sort" value={`${sortBy}|${order}`} onChange={handleSortChange} className="border p-2">
        <option value="price|asc">Price: Low to High</option>
        <option value="price|desc">Price: High to Low</option>
        <option value="id|asc">Default</option>
      </select>
    </div>
  );
};

export default SortDropdown;

