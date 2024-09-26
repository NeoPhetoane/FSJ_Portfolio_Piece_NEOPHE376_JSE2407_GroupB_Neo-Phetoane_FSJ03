import ProductCard from "../components/ProductCard";
import Pagination from '../components/Pagination';
import BackButton from "../components/BackButton";
import FilterDropdown from "../components/FilterDropdown";
import SortDropdown from "../components/SortDropdown";
import ResetButton from "../components/Resetbutton";

async function fetchProducts(page = 1, limit = 20, searchQuery = '', category = '', sortBy = '', order = '') {
  try {
    // Build the URL dynamically based on page, limit, search query, category, sortBy, and order
    const query = searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : '';
    const categoryQuery = category ? `&category=${encodeURIComponent(category)}` : '';
    const sortByQuery = sortBy ? `&sortBy=${encodeURIComponent(sortBy)}` : '';
    const orderQuery = order ? `&order=${encodeURIComponent(order)}` : '';

    const res = await fetch(
      `https://next-ecommerce-api.vercel.app/products?skip=${(page - 1) * limit}&limit=${limit}${query}${categoryQuery}${sortByQuery}${orderQuery}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    return res.json();
  } catch (error) {
    return { error: "Unable to load products at this time. Please try again later." };
  }
}

export default async function ProductsPage({ searchParams }) {
  const page = Number(searchParams.page) || 1;
  const searchQuery = searchParams.search || ''; // Get the search query from searchParams
  const category = searchParams.category || ''; // Get the category from searchParams
  const sortBy = searchParams.sortBy || ''; // Get the sortBy parameter from searchParams
  const order = searchParams.order || 'asc'; // Get the order parameter from searchParams

  const products = await fetchProducts(page, 20, searchQuery, category, sortBy, order); // Pass all query parameters to the fetch function

  if (products.error) {
    return (
      <div className="text-center p-8">
        <h1 className="text-2xl font-bold text-red-600">Error</h1>
        <p className="text-lg">{products.error}</p>
        <BackButton />
      </div>
    );
  }

  return (
    <div>
      <FilterDropdown currentCategory={category} />
      <SortDropdown currentSortBy={sortBy} currentOrder={order} />
<ResetButton/>
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
      <Pagination currentPage={page} totalItems={products.length} />
    </div>
  );
}
