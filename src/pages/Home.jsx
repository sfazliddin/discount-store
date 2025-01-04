import Map from "../components/Map";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-400 to-yellow-200">
      <main className="p-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Hero Section */}
          <div className="flex flex-col gap-5 max-w-2xl text-center md:text-left">
            <h1 className="text-5xl font-extrabold text-black drop-shadow-lg">
              Unbeatable Deals on Top-Quality Products
            </h1>
            <p className="text-lg text-gray-800">
              Shop by category, brand, or sale items and save big every day!
            </p>
            <SearchBar />
          </div>

          {/* Map Section */}
          <div className="w-full max-w-md">
            <Map />
          </div>
        </div>

        {/* Featured Deals */}
        <div className="mt-12 bg-white p-6 rounded-md shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6">
            Featured Deals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="border p-4 rounded-lg bg-gray-50 shadow hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold">Deal {index + 1}</h3>
                  <p className="text-gray-600">Limited-time offer!</p>
                  <button
                    className="mt-4 px-4 py-2 bg-yellow-400 rounded-md hover:bg-yellow-500 transition-colors w-full"
                    aria-label="View Deal"
                  >
                    View Deal
                  </button>
                </div>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}
