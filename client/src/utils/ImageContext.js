import React, { createContext, useState, useContext } from "react";

// Create the context with default values
const ImageContext = createContext();

// Create a provider component
export const ImageProvider = ({ children }) => {
  const [image, setImage] = useState(null);

  return (
    <ImageContext.Provider value={{ image, setImage }}>
      {children}
    </ImageContext.Provider>
  );
};

// Custom hook to use the ImageContext
export const useImage = () => useContext(ImageContext);
