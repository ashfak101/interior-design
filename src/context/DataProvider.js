import React, { createContext, useState, useReducer } from "react";
import { reducer } from "./Reducer";

export const DataContext = createContext();
const initialState = {
  loading: true,
  cart: [],
  subTotal: 0,
  total: 0,
  vat: 0,
  disCountPrice: 0,
  results: [],
};
export default function DataProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={[state, dispatch]}>
      {children}
    </DataContext.Provider>
  );
}
