import React, { createContext, useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState();

  return (
    <CartContext.Provider
      value={[count, setCount,]}>
      {children}
    </CartContext.Provider>
  );
};