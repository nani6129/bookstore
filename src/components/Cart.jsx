import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";

function Cart({ cart, setCart,showToast }) {

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // const removeItem = (id) => {
  //   const updated = cart.filter((item) => item.id !== id);
  //   setCart(updated);
  // };
  const removeItem = (id) => {
  const updated = cart.filter((item) => item.id !== id);
  setCart(updated);
  showToast("Item removed ❌", "error");
};

  const increaseQty = (id) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setCart(updated);
  };

  const decreaseQty = (id) => {
    const updated = cart
      .map((item) =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item
      )
      .filter((item) => item.qty > 0);

    setCart(updated);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // const clearCart = () => {
  //   setCart([]);
  // };
   const clearCart = () => {
  setCart([]);
  showToast("Cart cleared 🗑️", "error");
};
  return (
  <div className="cart-container">

    {/* LEFT SIDE */}
    <div className="cart-items">
      <h2>
        <FontAwesomeIcon icon={faCartShopping} /> Your Cart
      </h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div className="cart-card" key={item.id}>
            
            <img src={`/${item.image}`} alt={item.title} />

            <div className="cart-details">
              <h3>{item.title}</h3>
              <p>{item.author}</p>
              <p className="price">Rs.{item.price}</p>

              <div className="qty-controls">
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeItem(item.id)}
              >
                <FontAwesomeIcon icon={faTrash} /> Remove
              </button>
            </div>

          </div>
        ))
      )}
    </div>

    {/* RIGHT SIDE SUMMARY */}
    <div className="cart-summary">
      <h2>Order Summary</h2>

      <div className="summary-row">
        <span>Items</span>
        <span>{cart.length}</span>
      </div>

      <div className="summary-row total">
        <span>Total</span>
        <span>Rs.{total}</span>
      </div>

      <button className="clear-btn" onClick={clearCart}>
        Clear Cart
      </button>
    </div>

  </div>
);
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
  showToast: PropTypes.func.isRequired,
};

export default Cart;