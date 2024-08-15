import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestCategoryMobile from "./RestCategoryMobile";
import { MENU_API } from "../utils/constant";
import axios from "axios";
import { useFilter } from "../utils/FilterContext";
import NonVeg from "../utils/images/Non-Veg.svg";
import Veg from "../utils/images/Veg.svg";
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
    <div>
      <div className="flex flex-wrap justify-center items-center space-x-4 mb-4 mt-4">
        <button
          onClick={() => setFilter("ALL")}
          className="border-2 border-gray-500 rounded-2xl p-2 mr-4 mb-4 sm:mb-0 text-gray-700 hover:bg-gray-500 hover:text-white transition-colors duration-300"
        >
          All
        </button>
        <button
          onClick={() => setFilter("VEG")}
          className="border-2 border-gray-500 rounded-2xl p-2 mr-4 mb-4 sm:mb-0 text-gray-700 hover:bg-gray-500 hover:text-white transition-colors duration-300 flex items-center gap-1"
        >
          <img src={Veg} alt="Veg" className="w-4 h-4" />
          Veg
        </button>
        <button
          onClick={() => setFilter("NON_VEG")}
          className="border-2 border-gray-500 rounded-2xl p-2 mr-4 mb-4 sm:mb-0 text-gray-700 hover:bg-gray-500 hover:text-white transition-colors duration-300 flex items-center gap-1"
        >
          <img src={NonVeg} alt="Non-Veg" className="w-4 h-4" />
          Non-Veg
        </button>
        <button
          onClick={() => setFilter("BESTSELLER")}
          className="border-2 border-gray-500 rounded-2xl p-2 mr-4 mb-4 sm:mb-0 text-gray-700 hover:bg-gray-500 hover:text-white transition-colors duration-300"
        >
          Bestseller
        </button>
      </div>
      <div className="container-md ">
        <RestCategoryMobile
          restaurant={restaurant}
          // restaurant?.data?.cards[2]?.card?.card?.info
        />
      </div>
    </div>
  );
};

export default RestMenuMobile;
