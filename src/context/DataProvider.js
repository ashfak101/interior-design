import React, { createContext, useState } from "react";

export const DataContext = createContext();
export default function DataProvider({ children }) {
  const [courses, setCourses] = useState([]);
  return (
    <DataContext.Provider value={[courses, setCourses]}>
      {children}
    </DataContext.Provider>
  );
}
