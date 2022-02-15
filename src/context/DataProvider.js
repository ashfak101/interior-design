import React, { createContext, useState } from "react";

export const DataContext = createContext();
export default function DataProvider({ children }) {
  const [cart, setCart] = useState([]);
  return (
    <DataContext.Provider value={[cart, setCart]}>
      {children}
    </DataContext.Provider>
  );
}
