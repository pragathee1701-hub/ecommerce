function ProductCard({ product, addCart }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p className="pricecolor">₹{product.price}</p>

      <button className="btn"
        onClick={() => addCart(product)}
      >
        Add Cart
      </button>
    </div>
  );
}

export default ProductCard;