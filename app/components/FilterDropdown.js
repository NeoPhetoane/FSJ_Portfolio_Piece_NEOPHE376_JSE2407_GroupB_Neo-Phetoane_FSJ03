"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const FilterDropdown = ({ currentCategory }) => {
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams(); // Access current query parameters

  useEffect(() => {
    // Fetch categories from the API
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          "https://next-ecommerce-api.vercel.app/categories"
        );
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

    // Clone the existing searchParams and update the category
    const params = new URLSearchParams(searchParams.toString());
    if (selectedCategory) {
      params.set("category", encodeURIComponent(selectedCategory));
    } else {
      params.delete("category");
    }

    // Push the updated URL with all query parameters
    router.push(`/products?${params.toString()}`);
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
          <option key={category} value={category}>
            {category}
          </option>
       
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
