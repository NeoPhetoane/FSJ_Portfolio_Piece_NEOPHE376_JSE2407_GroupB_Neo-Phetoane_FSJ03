'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const FilterDropdown = ({ currentCategory }) => {
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch categories from the API
    const fetchCategories = async () => {
      try {
        const res = await fetch('https://next-ecommerce-api.vercel.app/categories');
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Failed to load categories", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    const url = selectedCategory ? `/products?category=${encodeURIComponent(selectedCategory)}` : '/products';
    
    // Push the new category filter to the URL
    router.push(url);
  };

  return (
    <div className="mb-4">
      <label htmlFor="category" className="mr-2 font-medium text-gray-700">
        Filter by Category:
      </label>
      <select
        id="category"
        value={currentCategory} // Keeps the current category selected
        onChange={handleCategoryChange}
        className="border border-gray-300 rounded p-2"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
