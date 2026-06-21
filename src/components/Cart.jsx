function Cart({ cart, dispatch }) {
  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>My Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        cart.map((item) => (
          <div
            className="cartItem"
            key={item.id}
          >
            <h3>{item.name}</h3>

            <p>₹{item.price}</p>

            <p>
              Quantity: {item.quantity}
            </p>

            <button
              onClick={() =>
                dispatch({
                  type: "PLUS",
                  payload: item.id
                })
              }
            >
              +
            </button>

            <button
              onClick={() =>
                dispatch({
                  type: "MINUS",
                  payload: item.id
                })
              }
            >
              -
            </button>

            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE",
                  payload: item.id
                })
              }
            >
              Remove
            </button>
          </div>
        ))
      )}

      <h2>Total: ₹{total}</h2>
    </div>
  );
}

export default Cart;
