import items from "../assets/itemsData";
import Map from "../components/Map";
import ProductGrid from "../components/ProductGrid";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const featuredDeals = items
    .filter((item) => item.salePrice < item.price) // Only include items on sale
    .map((item) => ({
      ...item,
      discountPercentage: Math.round(
        ((item.price - item.salePrice) / item.price) * 100
      ),
    }))
    .sort((a, b) => b.discountPercentage - a.discountPercentage) // Sort by highest discount
    .slice(0, 4);
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
          <ProductGrid
            title="Featured Deals"
            description="Explore the best discounts available now!"
            items={featuredDeals}
          />
        </div>
      </main>
    </div>
  );
}
