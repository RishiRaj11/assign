// src/pages/CartPage.js
import React from "react";
import { useCart } from "../CartContext";
import "./CartPage.css";
const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-page">
      <div className="cart-summary">
        <div className="summary-item">
          <span className="label">Total:</span>
          <span className="value">${total.toFixed(2)}</span>
        </div>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>

      <div className="cart-items">
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="item-details">
                <h3>{item.title}</h3> - ${item.price}
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CartPage;
