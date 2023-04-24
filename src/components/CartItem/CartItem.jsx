import React from "react";
import "./CartItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ item, handleRemove }) => {
  console.log(item);
  return (
    <div className="items-info">
      <div className="img-cart">
        <img src={item.img} alt="cart-image" />
        <div className="item-details">
          <p>{item.name}</p>
          <p>
            Price : <span className="price">${item.price}</span>
          </p>
          <p>
            Quantity : <span className="price">{item.quantity}</span>
          </p>
        </div>
      </div>
      <button className="delete">
        <FontAwesomeIcon
          onClick={() => handleRemove(item.id)}
          className="dlt-icon"
          icon={faTrashAlt}
        />
      </button>
    </div>
  );
};

export default CartItem;
