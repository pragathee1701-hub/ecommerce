import products from "../data/products";
import ProductCard from "./ProductCard";

function Products({ addCart, search }) {
  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="products">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addCart={addCart}
          />
        ))
      ) : (
        <h2>No Product Found</h2>
      )}
    </div>
  );
}

export default Products;