// app/products/page.jsx

import ProductCard from "../components/ProductCard";

async function fetchProducts() {
  const res = await fetch("https://next-ecommerce-api.vercel.app/products", { cache: 'no-store' });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
