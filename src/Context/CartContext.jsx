import React, { createContext, useContext, useState } from "react";
const ContextCreate = createContext();
export const ContextCreateProvider = ({ children }) => {
  const [states, setState] = useState([]);
  const addItemToCart = (item) => {
    setState((prevStates) => [...prevStates, item]);
  };
  const removeItemFromCart = (index) => {
    setState((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates.splice(index, 1);
      return updatedStates;
    });
  };
  return (
    <ContextCreate.Provider
      value={{ states, addItemToCart, removeItemFromCart }}
    >
      {children}
    </ContextCreate.Provider>
  );
};

export const useContextCreate = () => {
  return useContext(ContextCreate);
};
