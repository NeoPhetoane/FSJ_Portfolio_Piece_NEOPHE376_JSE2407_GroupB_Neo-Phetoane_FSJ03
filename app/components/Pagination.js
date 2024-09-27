import Link from "next/link";

export default function Pagination({
  currentPage,
  searchQuery,
  category,
  sortBy,
  order,
}) {
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage + 1;
  const query = searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : "";
  const categoryQuery = category
    ? `&category=${encodeURIComponent(category)}`
    : "";
  const sortByQuery = sortBy ? `&sortBy=${encodeURIComponent(sortBy)}` : "";
  const orderQuery = order ? `&order=${encodeURIComponent(order)}` : "";

  return (
    <div className="flex justify-between items-center mt-8">
      {prevPage && (
        <Link
          href={`/products?page=${prevPage}${query}${categoryQuery}${sortByQuery}${orderQuery}`}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          Previous
        </Link>
      )}
      <Link
        href={`/products?page=${nextPage}${query}${categoryQuery}${sortByQuery}${orderQuery}`}
        className="bg-gray-300 px-4 py-2 rounded"
      >
        Next
      </Link>
    </div>
  );
}
