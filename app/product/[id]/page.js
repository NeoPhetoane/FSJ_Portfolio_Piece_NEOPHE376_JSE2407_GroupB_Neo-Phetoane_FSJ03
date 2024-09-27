import Carousel from "@/app/components/Carousel";
import BackButton from "@/app/components/BackButton";
import ProductReviews from "@/app/components/ProductReviews";

const API_URL = "https://next-ecommerce-api.vercel.app/products";

async function fetchProduct(id) {
  try {

    const res = await fetch(`${API_URL}/${id}`, {
      next: { revalidate: 60 }, // Revalidate the cache every 60 seconds
      cache: 'force-cache', // Use cached data if available
    });
    
    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }
    return res.json();
  } catch (error) {
    return { error: "Unable to load product at this time." };
  }
}

//Meta data section
export async function generateMetadata({ params }) {
  const { id } = params;

  const product = await fetchProduct(id);

  return {
    title: `${product.title} - METO`,
    description:
      product.description ||
      "Find high-quality products at our e-commerce store.",
  };
}

//Product Detail

export default async function ProductDetail({ params }) {
  const product = await fetchProduct(params.id);

  if (product.error) {
    return (
      <div className="text-center p-8">
        <h1 className="text-2xl font-bold text-red-600">Error</h1>
        <p className="text-lg">{product.error}</p>
        <BackButton />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <Carousel images={product.images} />
        <div className="flex space-x-4 overflow-x-auto">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Preview ${index}`}
              className="w-20 h-20"
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p className="text-gray-700">{product.description}</p>
        <p className="text-lg font-semibold mt-2">Price: ${product.price}</p>
        <p className="text-sm text-gray-600">Category: {product.category}</p>
        <p className="text-sm text-gray-600">Tags: {product.tags.join(", ")}</p>
        <p className="text-lg mt-2">Rating: {product.rating} / 5</p>
        <p
          className={`mt-2 ${
            product.stock > 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {product.stock > 0
            ? `In Stock (${product.stock} available)`
            : "Out of Stock"}
        </p>
        <ProductReviews reviews={product.reviews} />
      </div>
      <BackButton />
    </div>
  );
}
