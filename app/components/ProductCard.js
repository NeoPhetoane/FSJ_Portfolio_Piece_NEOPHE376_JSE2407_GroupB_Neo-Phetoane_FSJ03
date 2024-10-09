import Link from "next/link";
import Carousel from "./Carousel";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
      <Carousel
        images={product.images}
        alt={product.title}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-lg font-bold mt-2">{product.title}</h3>
      <p className="text-gray-500">${product.price}</p>
      <p className="text-sm text-gray-400">{product.category}</p>

      <Link href={`/products/${product.id}`}>
        <button className="bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-200">
          View Product
        </button>
      </Link>
    </div>
  );
}
