import { useSearchParams } from "react-router-dom";
import items from "../assets/itemsData";
import ProductGrid from "../components/ProductGrid";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const filteredItems = items.filter((item) =>
    [item.name, item.description].some((field) =>
      field?.toLowerCase().includes(query.toLowerCase())
    )
  );

  return (
    <ProductGrid
      title={`Search Results for "${query}"`}
      description={`Showing results for "${query}".`}
      items={filteredItems}
    />
  );
}
