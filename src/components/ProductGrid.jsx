import PropTypes from "prop-types";

function ProductGrid({ title, description, items }) {
  return (
    <div className="bg-gray-50">
      <main className="p-8">
        <div className=" mx-auto">
          <h1 className="text-3xl font-bold mb-6">{title}</h1>
          <p className="text-gray-700">{description}</p>

          {items.length === 0 ? (
            <p className="text-gray-500 mt-6">No items available.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {items.map((item) => {
                const isOnSale = item.salePrice < item.price;
                const discountPercentage = isOnSale
                  ? Math.round(
                      ((item.price - item.salePrice) / item.price) * 100
                    )
                  : 0;

                return (
                  <div
                    key={item.id}
                    className="border p-4 rounded-lg bg-white shadow hover:shadow-lg transition-shadow"
                  >
                    <div className="w-full h-40 flex items-center justify-center bg-gray-100 rounded-md overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <h2 className="text-xl font-semibold mt-4">{item.title}</h2>
                    <p className="text-gray-600">{item.description}</p>
                    {isOnSale ? (
                      <>
                        <p className="text-gray-600 line-through">
                          ${item.price.toFixed(2)}
                        </p>
                        <p className="text-yellow-500 font-bold mt-1">
                          ${item.salePrice.toFixed(2)}{" "}
                          <span className="text-green-600 font-medium">
                            ({discountPercentage}% off)
                          </span>
                        </p>
                      </>
                    ) : (
                      <p className="text-yellow-500 font-bold mt-2">
                        ${item.price.toFixed(2)}
                      </p>
                    )}
                    <button
                      className="mt-4 px-4 py-2 bg-yellow-400 rounded-md hover:bg-yellow-500 transition-colors"
                      aria-label={`Add ${item.title} to Cart`}
                    >
                      Add to Cart
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

ProductGrid.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      salePrice: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ProductGrid;
