const API_URL = 'https://next-ecommerce-api.vercel.app/products';

async function fetchProduct(id) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  return res.json();
}

export default async function ProductDetail({ params }) {
  const product = await fetchProduct(params.id);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <img src={product.images[0]} alt={product.title} className="w-full h-auto" />
        <div className="flex space-x-4 overflow-x-auto">
          {product.images.map((image, index) => (
            <img key={index} src={image} alt={`Preview ${index}`} className="w-20 h-20" />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p className="text-gray-700">{product.description}</p>
        <p className="text-lg font-semibold mt-2">Price: ${product.price}</p>
        <p className="text-sm text-gray-600">Category: {product.category}</p>
        <p className="text-sm text-gray-600">Tags: {product.tags.join(', ')}</p>
      </div>
    </div>
  );
}
