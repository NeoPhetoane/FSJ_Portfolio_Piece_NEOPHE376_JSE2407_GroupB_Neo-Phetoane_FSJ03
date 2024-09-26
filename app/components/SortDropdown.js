'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const SortDropdown = ({ currentSortBy, currentOrder }) => {
  const router = useRouter();
  const searchParams = useSearchParams(); // Access current query parameters
  const [sortBy, setSortBy] = useState(currentSortBy);
  const [order, setOrder] = useState(currentOrder);

  const handleSortChange = (e) => {
    const value = e.target.value;

    // Split value into sortBy and order
    const [newSortBy, newOrder] = value.split('|');
    setSortBy(newSortBy);
    setOrder(newOrder);

    // Clone the existing searchParams and update sortBy and order
    const params = new URLSearchParams(searchParams.toString());
    params.set('sortBy', encodeURIComponent(newSortBy));
    params.set('order', encodeURIComponent(newOrder));

    // Push the updated URL with all query parameters
    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className="mb-4">
      <label htmlFor="sort" className="mr-2 text-gray-600">Sort by:</label>
      <select id="sort" value={`${sortBy}|${order}`} onChange={handleSortChange} className="border p-2">
        <option value="id|asc">Default</option>
        <option value="price|asc">Price: Low to High</option>
        <option value="price|desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortDropdown;
