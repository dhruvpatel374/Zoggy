import { useParams } from "react-router-dom";
import useRestMenu from "../utils/useRestMenu";
import RestCategory from "./RestCategory";
import ShimmerRestMenu from "../utils/shimmer/ShimmerRestMenu";
import { useImage } from "../utils/ImageContext.js";
import { useEffect, useState } from "react";
import { useFilter } from "../utils/FilterContext.js";
import NonVeg from "../utils/images/Non-Veg.svg";
import Veg from "../utils/images/Veg.svg";
import BestSeller from "../utils/images/BestSeller.svg";
import { XMarkIcon } from "@heroicons/react/24/solid";

const RestMenuCard = () => {
  const { resId } = useParams();
  const resInfo = useRestMenu(resId); // Custom Hooks
  const { image, setImage } = useImage(); // Use the context
  const { filter, setFilter } = useFilter();

  // State to track the active filter
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
    setFilter("ALL");
    setActiveFilter("ALL");
  }, [resId, setFilter]);

  if (!resInfo) return <ShimmerRestMenu />;

  const category = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const categories = category?.filter(
    (c) =>
      c?.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

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
    <div className="mt-4">
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
      <div>
        {categories?.map((category) => (
          <RestCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
          />
        ))}
      </div>
    </div>
  );
};

export default RestMenuCard;
