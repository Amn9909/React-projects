import React, { Context, createContext, useState } from "react";
import { PRODUCTS } from "../Products";

export const ShopContext : any = createContext(null);

const defaultCart = () => {
  let cart: any = {};
  for (let i = 1; i < PRODUCTS.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props: any) => {
  const [cartItem, setcartItem] = useState(defaultCart());

  const addToCart = (itemId: any) => {
    setcartItem((prev: any) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeItem = (itemId: any) => {
    setcartItem((prev: any) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contectValue = { cartItem, addToCart, removeItem };
  console.log(">>",cartItem)
  return (
    <ShopContext.Provider value={contectValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
