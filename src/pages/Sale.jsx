import items from "../assets/itemsData";
import ProductGrid from "../components/ProductGrid";

export default function Sale() {
  const saleItems = items.filter((item) => item.salePrice < item.price);

  return (
    <ProductGrid
      title="Sale"
      description="Grab the best deals on our discounted products! Limited stock available."
      items={saleItems}
    />
  );
}
