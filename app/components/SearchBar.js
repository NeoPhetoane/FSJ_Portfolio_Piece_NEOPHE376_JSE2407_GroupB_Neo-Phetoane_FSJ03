"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center mt-8">
      <input
        type="text"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full max-w-lg px-4 py-2 border-2 border-gray-400 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-600 text-black"
      />
      <button
        type="submit"
        className="px-6 py-2 text-white bg-black hover:bg-gray-800 rounded-r-md shadow-md transition-all duration-300"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
