import { useSearchParams } from "react-router-dom";
import items from "../assets/itemsData";
export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  console.log("Search query:", query);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );
  console.log("Filtered items:", filteredItems);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">
            Search Results for &quot;{query}&quot;
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="border p-4 rounded-lg bg-white shadow hover:shadow-lg transition-shadow"
                >
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">
                No items found for &quot;{query}&quot;.
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
