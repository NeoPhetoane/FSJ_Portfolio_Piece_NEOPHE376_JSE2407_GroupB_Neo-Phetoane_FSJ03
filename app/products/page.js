
import ProductCard from "../components/ProductCard";
import Pagination from '../components/Pagination';
import BackButton from "../components/BackButton";

async function fetchProducts(page = 1, limit = 20) {
    try {
    const res = await fetch(`https://next-ecommerce-api.vercel.app/products?skip=${(page - 1) * limit}&limit=${limit}`);

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
  const products = await fetchProducts(page);

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination currentPage={page} />
    </div>
  );
}
