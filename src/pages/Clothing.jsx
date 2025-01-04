import items from "../assets/itemsData";
import ProductGrid from "../components/ProductGrid";

export default function Clothing() {
  const clothingItems = items.filter((item) => item.category === "Clothing");

  return (
    <ProductGrid
      title="Clothing"
      description="Discover the latest clothing trends and accessories."
      items={clothingItems}
    />
  );
}
