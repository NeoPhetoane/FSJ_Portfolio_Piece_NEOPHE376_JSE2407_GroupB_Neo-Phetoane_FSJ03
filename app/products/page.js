
import ProductCard from "../components/ProductCard";
import Pagination from '../components/Pagination';

async function fetchProducts(page = 1, limit = 20) {
    const res = await fetch(`https://next-ecommerce-api.vercel.app/products?skip=${(page - 1) * limit}&limit=${limit}`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export default async function ProductsPage({searchParams}) {
  const page = Number(searchParams.page) || 1;
  const products = await fetchProducts(page);

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
