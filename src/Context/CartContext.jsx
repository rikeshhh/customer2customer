import React, { createContext, useContext, useState } from "react";

// Create a context for managing state related to the cart
const ContextCreate = createContext();

// Create a provider component to wrap around the parts of your app that need access to the cart state and functions
export const ContextCreateProvider = ({ children }) => {
  // Define state to hold the items in the cart
  const [states, setState] = useState([]);

  // Function to add an item to the cart
  const addItemToCart = (item) => {
    setState((prevStates) => [...prevStates, item]);
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (index) => {
    setState((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates.splice(index, 1);
      return updatedStates;
    });
  };

  // Provide the cart state and functions through the context
  return (
    <ContextCreate.Provider
      value={{ states, addItemToCart, removeItemFromCart }}
    >
      {children}
    </ContextCreate.Provider>
  );
};

// Custom hook to easily access the cart context
export const useContextCreate = () => {
  return useContext(ContextCreate);
};
