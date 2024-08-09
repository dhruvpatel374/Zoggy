import React, { createContext, useContext, useState } from "react";

// Create a Context
const FilterContext = createContext();

// Create a Provider Component
export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState("ALL");

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

// Custom hook to use the FilterContext
export const useFilter = () => {
  return useContext(FilterContext);
};
