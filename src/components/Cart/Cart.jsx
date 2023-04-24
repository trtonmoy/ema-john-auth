import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart, handleClearCart, children }) => {
  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    product.quantity = product.quantity || 1;
    total = total + product.price * quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = (total * 20) / 100;
  const grandTotal = tax + total + totalShipping;
  return (
    <div className="cart-info">
      <h2>Order Summery</h2>
      <p>Selected Items : {quantity} </p>
      <p> Total Price : ${total} </p>
      <p> Total Shipping Charges : ${totalShipping} </p>
      <p> Tax : ${tax.toFixed(2)} </p>
      <h5>Grand Total : ${grandTotal.toFixed(2)} </h5>

      <button onClick={handleClearCart} className="clear-cart">
        Clear Cart
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
      {children}
    </div>
  );
};

export default Cart;
