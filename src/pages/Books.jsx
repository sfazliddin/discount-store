import items from "../assets/itemsData";
import ProductGrid from "../components/ProductGrid";

export default function Books() {
  const booksItems = items.filter((item) => item.category === "Books");

  return (
    <ProductGrid
      title="Books"
      description="Explore our collection of books across various genres."
      items={booksItems}
    />
  );
}
