import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cartItems from localStorage *only on the client*
  useEffect(() => {
    const cartItemsinSession = JSON.parse(localStorage.getItem("cartItems"));
    if (cartItemsinSession) {
      setCartItems(cartItemsinSession);
    }
  }, []);

  // Save cartItems to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (item) => {
    const exist = cartItems.find((cartItem) => cartItem._id === item._id);
    if (exist) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...exist, quantity: exist.quantity + 1 }
            : cartItem
        )
      );
      return;
    }
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
  };

  const removeItemFromCart = (item) => {
    const exist = cartItems.find((cartItem) => cartItem._id === item._id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem._id !== item._id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...exist, quantity: exist.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const isInCart = (item) => {
    return cartItems.find((cartItem) => cartItem._id === item._id);
  };

  const getCartTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const getCartItemsCount = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  };

  return (
    <ProductContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        isInCart,
        getCartTotal,
        getCartItemsCount,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => useContext(ProductContext);

export default useProductContext;
