import React, { useEffect, useState } from "react";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../../public/utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Products.css";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const savedCart = [];

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const addedCart = getShoppingCart();
    // get id from the added Cart
    for (const id in addedCart) {
      // get the product using product id
      const addedProduct = products.find((product) => product.id === id);
      // add quantity of the product
      if (addedProduct) {
        const quantity = addedCart[id];
        addedProduct.quantity = quantity;
        // save the added product
        savedCart.push(addedProduct);
      }
    }
    // set the savedCart
    setCart(savedCart);
  }, [products]);

  const handleAddCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <section className="main-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddCart={handleAddCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
      

        <Cart handleClearCart={handleClearCart} cart={cart}>
          <Link to="/orders">
          <button className="clear-cart">
            Review Orders
          </button>
          </Link>
        </Cart>
      </div>
    </section>
  );
};

export default Products;

// import React, { useEffect, useState } from "react";
// import "./Products.css";

// const Products = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("products.json")
//       .then((res) => res.json())
//       .then((data) => setProducts(data));
//   }, []);

//   return (
// <section className="main-container">
//   <div className="products-container">
//     <h3>Products Container</h3>

//   {
//     products.map
//   }

//   </div>
//   <div className="cart-container">
//     <h3>Cart</h3>
//   </div>
// </section>
//   );
// };

// export default Product;
