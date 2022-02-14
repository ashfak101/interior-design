import React, { createContext, useState } from "react";

export const DataContext = createContext();
export default function DataProvider({ children }) {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([]);
  return (
    <DataContext.Provider value={([courses, setCourses], [cart, setCart])}>
      {children}
    </DataContext.Provider>
  );
}
