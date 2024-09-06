import { CDN_URL } from "../utils/constant";
import { StarIcon } from "@heroicons/react/24/solid";
import NonVeg from "../utils/images/Non-Veg.svg";
import Veg from "../utils/images/Veg.svg";
import BestSeller from "../utils/images/BestSeller.svg";
import { useState, useEffect } from "react";
import { useImage } from "../utils/ImageContext.js";
import { useFilter } from "../utils/FilterContext.js";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice.js";
import toast, { Toaster } from "react-hot-toast";

const RestMenuItem = (data) => {
  const { filter } = useFilter();
  const [menuItems, setMenuItems] = useState([]);
  const { image } = useImage();
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addToCart(item));
    toast.success("Added to cart!");
  };

  useEffect(() => {
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
      <Toaster />
      <ul className="p-4">
        {filteredItems.map((item, i) => (
          <li
            className="p-2 py-8 flex gap-4 md:gap-8 justify-between items-center border-b"
            key={item?.card?.info?.resId || i} // Use a unique identifier for key
          >
            <div className="basis-8/12 space-y-2">
              <h2 className="flex gap-1">
                {item?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? (
                  <img className="w-4 h-4" src={Veg} alt="Vegetarian" />
                ) : (
                  <img className="w-4 h-4" src={NonVeg} alt="Non-Vegetarian" />
                )}
                {item?.card?.info?.isBestseller ? (
                  <p className="text-sm font-bold text-orange-500 flex ">
                    <img
                      src={BestSeller}
                      className="w-18 h-4"
                      alt="Best Seller"
                    />
                  </p>
                ) : null}
              </h2>
              <h2 className="text-base font-semibold">
                {item?.card?.info?.name}
              </h2>
              {item?.card?.info?.ratings?.aggregatedRating?.rating && (
                <div className="flex items-center ">
                  <div className="gap-1 flex items-center">
                    <StarIcon className="w-4 h-4 text-[#1BA672]" />{" "}
                    <p className="font-bold text-[#1BA672] text-base">
                      {item.card.info.ratings.aggregatedRating.rating}
                    </p>
                  </div>
                  <span className="text-gray-500 ">
                    ({item.card.info.ratings.aggregatedRating.ratingCountV2})
                  </span>
                </div>
              )}
              <div className="text-xs font-semibold flex gap-1">
                {item.card.info.price && item.card.info.finalPrice ? (
                  <>
                    <span className="line-through text-gray-500">
                      ₹{item.card.info.price / 100}
                    </span>
                    <span>₹{item.card.info.finalPrice / 100}</span>
                  </>
                ) : (
                  <span>
                    ₹{" "}
                    {item.card.info.price / 100 ||
                      item.card.info.defaultPrice / 100}
                  </span>
                )}
              </div>
              <div className="text-xs hidden md:block">
                {item?.card?.info?.description}
              </div>
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
              <button
                className="bg-white text-orange-500 hover:bg-orange-500 hover:text-white font-bold p-2 px-6 rounded-md absolute shadow-md left-[50%] -bottom-5 -translate-x-[50%]"
                onClick={() => handleAddItem(item)}
              >
                ADD
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestMenuItem;
