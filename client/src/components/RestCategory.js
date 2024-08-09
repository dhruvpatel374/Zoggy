import { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import RestMenuItem from "./RestMenuItem";
import { useFilter } from "../utils/FilterContext";

const RestCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const { filter } = useFilter();

  const handleClick = () => {
    setShowItems(!showItems);
  };

  const filteredItemCards = data?.itemCards?.filter((item) => {
    const isVeg = item?.card?.info?.itemAttribute?.vegClassifier === "VEG";
    const isBestseller = item?.card?.info?.isBestseller;
    return (
      filter === "ALL" ||
      (filter === "VEG" && isVeg) ||
      (filter === "NON_VEG" && !isVeg) ||
      (filter === "BESTSELLER" && isBestseller)
    );
  });

  return (
    <>
      <div>
        <div
          onClick={handleClick}
          className="flex cursor-pointer justify-between items-center p-4 my-2 rounded-md bg-gray-50 select-none"
        >
          <h3 className="text-lg font-semibold">
            {data?.title} ({filteredItemCards.length})
          </h3>
          <button
            className={`transition-transform duration-300 ${
              showItems ? "rotate-180" : ""
            }`}
          >
            <ChevronUpIcon className="w-6 h-6" />
          </button>
        </div>
        <div></div>
      </div>
      <div className="my-4">
        {showItems && <RestMenuItem data={filteredItemCards} />}
      </div>
    </>
  );
};

export default RestCategory;
