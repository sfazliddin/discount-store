import items from "../assets/itemsData";
import ProductGrid from "../components/ProductGrid";

export default function Inventory() {
  return (
    <ProductGrid
      title="Inventory"
      description="Browse through our extensive inventory of top-quality products. Find the perfect item for your needs!"
      items={items}
    />
  );
}
