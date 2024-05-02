import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item1) => {
    const alreadyInCart = cartItems.find(item=> item.product.id === item1.id);

    if (alreadyInCart) {
      const latestCartUpdate = cartItems.map(item =>
          item.product.id === item1.id ? { 
          ...item, quantity: item.quantity + 1 } 
          : item
      );
      setCartItems(latestCartUpdate);
  } else {
      setCartItems([...cartItems, {product: item1, quantity: 1}]);
  }
   
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((del) => del !== item));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart,setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
