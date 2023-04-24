import React, { useState } from "react";
import Product from "../Product/Product";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import CartItem from "../CartItem/CartItem";
import "./Order.css";
import {
  deleteShoppingCart,
  removeFromDb,
} from "../../../public/utilities/fakedb";

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const handleRemove = (id) => {
    const remainingProducts = cart.filter((item) => item.id !== id);

    setCart(remainingProducts);
    removeFromDb(id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="main-container">
      <div className="items-container">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            handleRemove={handleRemove}
          ></CartItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart handleClearCart={handleClearCart} cart={cart}>
          <Link to="/payment">
            <button className="clear-cart">Proceed to Payment</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
