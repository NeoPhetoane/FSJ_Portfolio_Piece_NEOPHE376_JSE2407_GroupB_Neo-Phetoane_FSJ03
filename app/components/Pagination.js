import Link from 'next/link';

export default function Pagination({ currentPage }) {
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage + 1;

  return (
    <div className="flex justify-between items-center mt-8">
      {prevPage && (
        <Link href={`/products?page=${prevPage}`}>
          <a className="bg-gray-300 px-4 py-2 rounded">Previous</a>
        </Link>
      )}
      <Link href={`/products?page=${nextPage}`}>
        <a className="bg-gray-300 px-4 py-2 rounded">Next</a>
      </Link>
    </div>
  );
}
