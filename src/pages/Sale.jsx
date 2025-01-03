export default function Sale() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Sale</h1>
          <p className="text-gray-700">
            Grab the best deals on our discounted products! Limited stock
            available.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {/* Example sale items */}
            {Array(6)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="border p-4 rounded-lg bg-white shadow hover:shadow-lg transition-shadow"
                >
                  <h2 className="text-xl font-semibold">
                    Sale Item {index + 1}
                  </h2>
                  <p className="text-gray-600 line-through">$50.00</p>
                  <p className="text-yellow-500">$25.00</p>
                  <button
                    className="mt-4 px-4 py-2 bg-yellow-400 rounded-md hover:bg-yellow-500 transition-colors"
                    aria-label="Add to Cart"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}
