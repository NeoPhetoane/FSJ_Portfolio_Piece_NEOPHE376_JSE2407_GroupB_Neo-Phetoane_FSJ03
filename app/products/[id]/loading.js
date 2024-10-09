export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <p className="text-lg font-semibold text-gray-600 mb-4">
          Loading your product description...
        </p>
        <div className="w-10 h-10 border-4 border-gray-600 border-dashed rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
