import { CDN_URL } from "../utils/constant";
import { SparklesIcon, StarIcon } from "@heroicons/react/24/solid";
import NonVeg from "../utils/images/Non-Veg.png";
import Veg from "../utils/images/Veg.png";
import { useState, useEffect } from "react";
const RestMenuItem = (items) => {
  // const category = items?.data;
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Assuming you fetch data asynchronously and set it to items.data
    setMenuItems(items?.data);
  }, [items]);
  if (menuItems.length === 0) {
    return <p className="text-center text-gray-500">No items available</p>;
  }

  return (
    <div>
      {menuItems.map((item, i) => (
        <ul className="p-4">
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
                    <SparklesIcon className="w-4 h-4" />
                    Bestseller
                  </h3>
                ) : null}
              </h2>
              <h2 className="text-base font-semibold">
                {item?.card?.info?.name}
              </h2>
              {item?.card?.info?.ratings?.aggregatedRating?.rating && (
                <div className="flex items-center ">
                  <div className="gap-1 flex items-center">
                    <StarIcon className="w-4 h-4  text-green-500" />{" "}
                    <p className="font-bold text-green-500 text-base">
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
                src={CDN_URL + item?.card?.info?.imageId}
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
