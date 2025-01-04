import items from "../assets/itemsData";
import ProductGrid from "../components/ProductGrid";

export default function HomeAppliances() {
  const homeApplianceItems = items.filter(
    (item) => item.category === "Home Appliances"
  );

  return (
    <ProductGrid
      title="Home Appliances"
      description="Discover the latest home appliances."
      items={homeApplianceItems}
    />
  );
}
