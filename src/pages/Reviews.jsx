export default function Reviews() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Customer Reviews</h1>
          <p className="text-gray-700">
            Hear what our customers have to say about their shopping experience.
          </p>
          <div className="flex flex-col gap-6 mt-8">
            {/* Example reviews */}
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="border p-4 rounded-lg bg-white shadow hover:shadow-lg transition-shadow"
                >
                  <h2 className="text-xl font-semibold">
                    Customer {index + 1}
                  </h2>
                  <p className="text-gray-600">
                    &quot;This store has the best deals! Highly recommend
                    shopping here.&quot;
                  </p>
                  <div className="text-yellow-400">
                    {/* Example star rating */}
                    {"★".repeat(5)} <span className="text-gray-500">5/5</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}
