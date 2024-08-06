// RestaurantContext.js
import React, { createContext, useContext } from "react";
import useRest from "./useRest"; // Import your custom hook

// Create a Context with default value as undefined
const RestaurantContext = createContext(undefined);

// Create a Provider component
export const RestaurantProvider = ({ children }) => {
  const restaurant = useRest(); // Use your custom hook to get the data

  return (
    <RestaurantContext.Provider value={restaurant}>
      {children}
    </RestaurantContext.Provider>
  );
};

// Create a custom hook to use the RestaurantContext
export const useRestaurant = () => {
  const context = useContext(RestaurantContext);
  if (context === undefined) {
    throw new Error("useRestaurant must be used within a RestaurantProvider");
  }
  return context;
};
