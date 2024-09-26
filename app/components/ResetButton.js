'use client';

import { useRouter } from 'next/navigation';

const ResetButton = () => {
  const router = useRouter();

  const handleReset = () => {
    // Clear all query parameters related to filtering and sorting
    const params = new URLSearchParams();

    // Redirect to the products page without any filters or sorting
    router.push(`/products?${params.toString()}`);
  };

  return (
    <button
      onClick={handleReset}
      className="bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-200"
    >
      Reset Filters
    </button>
  );
};

export default ResetButton;
