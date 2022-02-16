import React, { createContext, useState } from "react";

export const DataContext = createContext();
export default function DataProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [disCountPriceTotal, setDisCountPriceTotal] = useState(0);

  return (
    <DataContext.Provider
      value={[
        cart,
        setCart,
        totalPrice,
        setTotalPrice,
        disCountPriceTotal,
        setDisCountPriceTotal,
      ]}
    >
      {children}
    </DataContext.Provider>
  );
}
