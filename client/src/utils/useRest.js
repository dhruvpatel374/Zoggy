import { SWIGGY_API } from "./constant";
import { useState, useEffect } from "react";

const useRest = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    setLoading(true); // Set loading to true before fetching
    try {
      const response = await fetch(SWIGGY_API);
      const json = await response.json();
      setRestaurant(
        json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
      );
      setCity(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  return { restaurant, loading, city }; // Return loading state along with restaurant data
};

export default useRest;
