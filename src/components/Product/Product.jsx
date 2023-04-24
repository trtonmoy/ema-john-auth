import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  const { img, name, seller, price, ratings } = props.product;
  const handleAddCart = props.handleAddCart;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h5 className="product-name">{name}</h5>
        <p>Price : ${price}</p>
        <p>Brand : {seller}</p>
        <p>Rating : {ratings}</p>
      </div>
      <button onClick={() => handleAddCart(props.product)} className="cart-btn">
        Add to Cart
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
