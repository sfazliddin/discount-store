import items from "../assets/itemsData";

export default function Inventory() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Inventory</h1>
          <p className="text-gray-700">
            Browse through our extensive inventory of top-quality products. Find
            the perfect item for your needs!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="border p-4 rounded-lg bg-white shadow hover:shadow-lg transition-shadow"
              >
                <div className="w-full h-40 flex items-center justify-center bg-gray-100 rounded-md overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="text-xl font-semibold mt-4">{item.title}</h2>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-yellow-500 font-bold mt-2">${item.price}</p>
                <button
                  className="mt-4 px-4 py-2 bg-yellow-400 rounded-md hover:bg-yellow-500 transition-colors"
                  aria-label={`Add ${item.title} to Cart`}
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
