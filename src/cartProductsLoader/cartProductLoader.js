import { getShoppingCart } from "../../public/utilities/fakedb";

const cartProductLoader = async () => {
  const loadedProducts = await fetch("products.json");
  const products = await loadedProducts.json();

  const storedCart = getShoppingCart();

  const savedCart = [];

  for (const id in storedCart) {
    const storedProduct = products.find((product) => product.id === id);
    if (storedCart) {
      const quantity = storedCart[id];
      storedProduct.quantity = quantity;
      savedCart.push(storedProduct);
    }
  }

  return savedCart;
};

export default cartProductLoader;
