import { useReducer, useState } from "react";

import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Footer from "./components/Footer"

import cartReducer from "./reducer/cartReducer";

function App() {
  const [cart, dispatch] = useReducer(
    cartReducer,
    []
  );

  const [search, setSearch] = useState("");

  function addCart(product) {
    dispatch({
      type: "ADD",
      payload: product
    });
  }

  return (
    <>
      <Navbar count={cart.length} />
      
        <input
        className="search"
        type="text"
        placeholder="Search Product"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      
      />

      <Products
        addCart={addCart}
        search={search}
      />

      <Cart
        cart={cart}
        dispatch={dispatch}
      />
      <Footer></Footer>
    </>
  );
}

export default App;