import items from "../assets/itemsData";

export default function HomeAppliances() {
  const homeApplianceItems = items.filter(
    (item) => item.category === "Home Appliances"
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Electronics</h1>
          <p className="text-gray-700">
            Discover the latest electronics, gadgets, and accessories.
          </p>

          {homeApplianceItems.length === 0 ? (
            <p className="text-gray-500 mt-6">
              No electronics items available.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {homeApplianceItems.map((item) => (
                <div
                  key={item.id}
                  className="border p-4 rounded-lg bg-white shadow hover:shadow-lg transition-shadow"
                >
                  <div className="w-full h-40 flex items-center justify-center bg-gray-100 rounded-md overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h2 className="text-xl font-semibold mt-4">{item.title}</h2>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-yellow-500 font-bold mt-2">
                    ${item.price.toFixed(2)}
                  </p>
                  <button
                    className="mt-4 px-4 py-2 bg-yellow-400 rounded-md hover:bg-yellow-500 transition-colors"
                    aria-label={`Add ${item.title} to Cart`}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
