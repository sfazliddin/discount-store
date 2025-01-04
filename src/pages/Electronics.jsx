import items from "../assets/itemsData";
import ProductGrid from "../components/ProductGrid";

export default function Electronics() {
  const electronicsItems = items.filter(
    (item) => item.category === "Electronics"
  );

  return (
    <ProductGrid
      title="Electronics"
      description="Discover the latest electronics, gadgets, and accessories."
      items={electronicsItems}
    />
  );
}
