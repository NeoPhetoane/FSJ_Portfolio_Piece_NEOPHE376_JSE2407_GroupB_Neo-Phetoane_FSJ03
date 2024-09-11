import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
      <Link href={`/product/${product.id}`}>
        <img src={product.images[0]} alt={product.title} className="w-full h-40 object-cover rounded-md" />
        <h3 className="text-lg font-bold mt-2">{product.title}</h3>
        <p className="text-gray-500">${product.price}</p>
        <p className="text-sm text-gray-400">{product.category}</p>
      </Link>
    </div>
  );
}
