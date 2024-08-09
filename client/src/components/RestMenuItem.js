import { CDN_URL } from "../utils/constant";
import { StarIcon } from "@heroicons/react/24/solid";
import NonVeg from "../utils/images/Non-Veg.svg";
import Veg from "../utils/images/Veg.svg";
import BestSeller from "../utils/images/BestSeller.svg";
import { useState, useEffect } from "react";
import { useImage } from "../utils/ImageContext.js";
import { useFilter } from "../utils/FilterContext.js";
const RestMenuItem = (data) => {
  // const category = items?.data;
  const { filter } = useFilter();
  const [menuItems, setMenuItems] = useState([]);
  const { image } = useImage();
  useEffect(() => {
    // Assuming you fetch data asynchronously and set it to items.data
    setMenuItems(data?.data);
  }, [data]);
  if (menuItems.length === 0) {
    return <p className="text-center text-gray-500">No items available</p>;
  }
  const filteredItems = menuItems?.filter((item) => {
    const isVeg = item?.card?.info?.itemAttribute?.vegClassifier === "VEG";
    const isBestseller = item?.card?.info?.isBestseller;

    return (
      filter === "ALL" ||
      (filter === "VEG" && isVeg) ||
      (filter === "NON_VEG" && !isVeg) ||
      (filter === "BESTSELLER" && isBestseller)
    );
  });

  if (filteredItems.length === 0) {
    return <p className="text-center text-gray-500">No items available</p>;
  }
  return (
    <div>
      {filteredItems.map((item, i) => (
        <ul className="p-4" key={i}>
          {/* {item?.card?.card?.itemCards?.map((item, i) => {
            const itemPrice =
            item?.card?.info?.price || item?.card?.info?.defaultPrice; */}
          <li
            className="p-2 py-8 flex gap-4 md:gap-8 justify-between items-center border-b"
            key={i}
          >
            <div className="basis-8/12 space-y-2">
              <h2 className="flex gap-1">
                {item?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? (
                  <img className="w-4 h-4" src={Veg}></img>
                ) : (
                  <img className="w-4 h-4" src={NonVeg}></img>
                )}
                {item?.card?.info?.isBestseller ? (
                  <h3 className="text-sm font-bold text-orange-500 flex ">
                    <img src={BestSeller} className="w-18 h-4" />
                  </h3>
                ) : null}
              </h2>
              <h2 className="text-base font-semibold">
                {item?.card?.info?.name}
              </h2>
              {item?.card?.info?.ratings?.aggregatedRating?.rating && (
                <div className="flex items-center ">
                  <div className="gap-1 flex items-center">
                    <StarIcon className="w-4 h-4  text-[#1BA672]" />{" "}
                    <p className="font-bold text-[#1BA672] text-base">
                      {item.card.info.ratings.aggregatedRating.rating}
                    </p>
                  </div>
                  <span className="text-gray-500 ">
                    ({item.card.info.ratings.aggregatedRating.ratingCountV2})
                  </span>
                </div>
              )}
              <p className="text-xs font-semibold">
                ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </p>
              <p className="text-xs hidden md:block">
                {item?.card?.info?.description}
              </p>
            </div>

            <div className="w-full basis-4/12 relative">
              <img
                className="w-full h-32 aspect-video object-cover rounded-md"
                src={
                  item?.card?.info?.imageId
                    ? CDN_URL + item.card.info.imageId
                    : CDN_URL + image
                }
                alt="No Image Available"
              />
              <button className="bg-white text-orange-500 hover:bg-orange-500 hover:text-white font-bold p-2 px-6 rounded-md absolute shadow-md left-[50%] -bottom-5 -translate-x-[50%]">
                ADD
              </button>
            </div>
          </li>
        </ul>
      ))}
      <p className="text-center text-gray-500">No items available</p>
    </div>
  );
};
export default RestMenuItem;
