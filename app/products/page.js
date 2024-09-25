
import ProductCard from "../components/ProductCard";
import Pagination from '../components/Pagination';
import BackButton from "../components/BackButton";
import FilterDropdown from "../components/FilterDropdown";

async function fetchProducts(page = 1, limit = 20, searchQuery = '', category = '') {
    try {
    // Build the URL dynamically based on page, limit, and search query
    const query = searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : '';
    const categoryQuery = category ? `&category=${encodeURIComponent(category)}` : '';
    const res = await fetch(
      `https://next-ecommerce-api.vercel.app/products?skip=${(page - 1) * limit}&limit=${limit}${query}${categoryQuery}`
    );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
} catch (error) {
    return { error: "Unable to load products at this time. Please try again later." };
  }
}
export default async function ProductsPage({searchParams}) {
  const page = Number(searchParams.page) || 1;
  const searchQuery = searchParams.search || ''; // Get the search query from searchParams
  const category = searchParams.category || ''; // Get the category from searchParams
  const products = await fetchProducts(page, 20, searchQuery, category); // Pass the search query to the fetch function

  if (products.error) {
    return (
      <div className="text-center p-8">
        <h1 className="text-2xl font-bold text-red-600">Error</h1>
        <p className="text-lg">{products.error}</p>
        <BackButton/>
      </div>
    );
  }

  return (
    <div>

<FilterDropdown currentCategory={category} />

      {/* Display the search term if available */}
      {searchQuery && (
        <p className="text-gray-600 mb-4">
          Showing results for: <span className="font-semibold">{searchQuery}</span>
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination currentPage={page} />
    </div>
  );
}
