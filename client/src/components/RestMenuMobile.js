import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestCategoryMobile from "./RestCategoryMobile";
import { MENU_API } from "../utils/constant";
import axios from "axios";
import { useFilter } from "../utils/FilterContext";
import NonVeg from "../utils/images/Non-Veg.svg";
import Veg from "../utils/images/Veg.svg";
import BestSeller from "../utils/images/BestSeller.svg";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useImage } from "../utils/ImageContext";
import useRestMenu from "../utils/useRestMenu";
const RestMenuMobile = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const resInfo = useRestMenu(resId);
  const { image, setImage } = useImage();
  const { filter, setFilter } = useFilter();
  const [activeFilter, setActiveFilter] = useState("ALL");
  useEffect(() => {
    if (resInfo) {
      const findCloudinaryImageId = () => {
        // Loop through the cards array
        for (let i = 0; i < resInfo.cards.length; i++) {
          const cloudinaryImageId =
            resInfo.cards[i]?.card?.card?.info?.cloudinaryImageId;
          if (cloudinaryImageId) {
            return cloudinaryImageId; // Return the first found image ID
          }
        }
        return null; // Return null if no image ID is found
      };

      const newImage = findCloudinaryImageId();
      setImage(newImage); // Save the image in context
    }
  }, [resInfo, setImage]);

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
    setActiveFilter("ALL");
  }, [resId, setFilter]);

  const handleFilterClick = (filterType) => {
    if (activeFilter === filterType) {
      // If the same filter is clicked again, reset to "ALL"
      setFilter("ALL");
      setActiveFilter("ALL");
    } else {
      // Set the new filter
      setFilter(filterType);
      setActiveFilter(filterType);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center space-x-4 mb-4 mt-4">
        <button
          onClick={() => handleFilterClick("ALL")}
          className={`border-2 rounded-2xl p-2 mr-4 mb-4 sm:mb-0 transition-colors duration-300 flex justify-center items-center gap-4 ${
            activeFilter === "ALL"
              ? "bg-gray-300 border-gray-500 text-gray-700"
              : "border-gray-500 text-gray-700 hover:bg-gray-200"
          }`}
        >
          All {activeFilter === "ALL" && <XMarkIcon className="w-4 h-4" />}
        </button>
        <button
          onClick={() => handleFilterClick("VEG")}
          className={`border-2 rounded-2xl p-2 mr-4 mb-4 sm:mb-0 transition-colors duration-300 flex justify-center items-center gap-2 ${
            activeFilter === "VEG"
              ? "bg-gray-300 border-gray-500 text-gray-700"
              : "border-gray-500 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <div className="flex justify-center items-center gap-2">
            <img src={Veg} alt="Veg" className="w-4 h-4" />
            Veg
          </div>
          {activeFilter === "VEG" && <XMarkIcon className="w-4 h-4" />}
        </button>
        <button
          onClick={() => handleFilterClick("NON_VEG")}
          className={`border-2 rounded-2xl p-2 mr-4 mb-4 sm:mb-0 transition-colors duration-300 flex justify-center items-center gap-2 ${
            activeFilter === "NON_VEG"
              ? "bg-gray-300 border-gray-500 text-gray-700"
              : "border-gray-500 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <div className="flex justify-center items-center gap-2">
            <img src={NonVeg} alt="Non-Veg" className="w-4 h-4" />
            Non-Veg
          </div>
          {activeFilter === "NON_VEG" && <XMarkIcon className="w-4 h-4" />}
        </button>
        <button
          onClick={() => handleFilterClick("BESTSELLER")}
          className={`border-2 rounded-2xl p-2 mr-4 mb-4 sm:mb-0 transition-colors duration-300 flex justify-center items-center gap-2 ${
            activeFilter === "BESTSELLER"
              ? "bg-gray-300 border-gray-500 text-gray-700"
              : "border-gray-500 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <div className="flex justify-center items-center gap-2">
            <img src={BestSeller} alt="Bestseller" />
          </div>
          {activeFilter === "BESTSELLER" && <XMarkIcon className="w-4 h-4" />}
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
