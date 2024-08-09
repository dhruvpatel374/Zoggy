import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestCategoryMobile from "./RestCategoryMobile";
import { MENU_API } from "../utils/constant";
import axios from "axios";
import { useFilter } from "../utils/FilterContext";

const RestMenuMobile = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { filter, setFilter } = useFilter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${MENU_API}?restaurantId=${resId}`);
        // console.log(data);
        setRestaurant(data);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [resId]);
  useEffect(() => {
    setFilter("ALL");
  }, [resId, setFilter]);
  return (
    <div className="container-md ">
      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={() => setFilter("ALL")}
          className="bg-gray-200 p-2 rounded"
        >
          All
        </button>
        <button
          onClick={() => setFilter("VEG")}
          className="bg-green-200 p-2 rounded"
        >
          Veg
        </button>
        <button
          onClick={() => setFilter("NON_VEG")}
          className="bg-red-200 p-2 rounded"
        >
          Non-Veg
        </button>
        <button
          onClick={() => setFilter("BESTSELLER")}
          className="bg-yellow-200 p-2 rounded"
        >
          Bestseller
        </button>
      </div>
      <RestCategoryMobile
        restaurant={restaurant}
        // restaurant?.data?.cards[2]?.card?.card?.info
      />
    </div>
  );
};

export default RestMenuMobile;
