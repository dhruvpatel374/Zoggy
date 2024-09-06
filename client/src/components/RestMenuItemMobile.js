import { CDN_URL } from "../utils/constant";
import { useState } from "react";
import { ChevronUpIcon, StarIcon } from "@heroicons/react/24/solid";
import NonVeg from "../utils/images/Non-Veg.svg";
import Veg from "../utils/images/Veg.svg";
import BestSeller from "../utils/images/BestSeller.svg";
import { useFilter } from "../utils/FilterContext";
import { useImage } from "../utils/ImageContext";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import toast, { Toaster } from "react-hot-toast";
const RestaurantMenuItemMobile = ({ items }) => {
  const [showItems, setShowItems] = useState(false);
  const { filter } = useFilter();
  const { image } = useImage();
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addToCart(item));
    toast.success("Added to cart!");
  };
  const filteredItems = items?.card?.card?.itemCards?.filter((item) => {
    const isVeg = item?.card?.info?.itemAttribute?.vegClassifier === "VEG";
    const isBestseller = item?.card?.info?.isBestseller; // This should be a boolean

    return (
      filter === "ALL" ||
      (filter === "VEG" && isVeg) ||
      (filter === "NON_VEG" && !isVeg) ||
      (filter === "BESTSELLER" && isBestseller) // Show only bestsellers
    );
  });
  return (
    <>
      <div
        onClick={() => setShowItems(!showItems)}
        className="flex cursor-pointer justify-between items-center p-4 my-2 rounded-md bg-gray-50 select-none"
      >
        <h3 className="text-lg font-semibold">
          {items.card.card.title} ({filteredItems?.length || 0})
        </h3>
        <button
          className={`transition-transform duration-300 ${
            showItems ? "rotate-180" : ""
          }`}
        >
          <ChevronUpIcon className="w-6 h-6" />
        </button>
      </div>
      <Toaster
        toastOptions={{
          style: {
            boxShadow: "none", // Remove shadow
          },
        }}
      />

      {showItems && (
        <ul className="p-4">
          {filteredItems?.length > 0 ? (
            filteredItems?.map((item, i) => {
              const itemPrice =
                item?.card?.info?.price || item?.card?.info?.defaultPrice;

              return (
                <li
                  className="p-2 py-8 flex gap-4 md:gap-8 justify-between items-center border-b"
                  key={i}
                >
                  <div className="basis-8/12 space-y-2">
                    <div className="flex gap-1">
                      {item?.card?.info?.itemAttribute?.vegClassifier ===
                      "VEG" ? (
                        <img className="w-4 h-4" src={Veg} alt="Vegetarian" />
                      ) : (
                        <img
                          className="w-4 h-4"
                          src={NonVeg}
                          alt="Non-Vegetarian"
                        />
                      )}
                      {item?.card?.info?.isBestseller ? (
                        <span className="text-sm font-bold text-orange-500 flex">
                          <img src={BestSeller} className="w-18 h-4" />
                        </span>
                      ) : null}
                    </div>
                    <h2 className="text-base font-semibold">
                      {item?.card?.info?.name}
                    </h2>

                    {item?.card?.info?.ratings?.aggregatedRating?.rating && (
                      <p className="flex align-middle gap-1">
                        <StarIcon className="w-4 h-4 text-green-500 font-bold" />
                        <span className="text-green-500 font-bold">
                          {item.card.info.ratings.aggregatedRating.rating}
                        </span>
                        <span className="text-gray-500">
                          (
                          {
                            item.card.info.ratings.aggregatedRating
                              .ratingCountV2
                          }
                          )
                        </span>
                      </p>
                    )}
                    <h1 className="text-xs font-semibold flex gap-1">
                      {item.card.info.price && item.card.info.finalPrice ? (
                        <>
                          <p className="line-through text-gray-500">
                            ₹{item.card.info.price / 100}
                          </p>
                          <p className="  ">
                            ₹{item.card.info.finalPrice / 100}
                          </p>
                        </>
                      ) : (
                        <p>
                          ₹{" "}
                          {item.card.info.price / 100 ||
                            item.card.info.defaultPrice / 100}
                        </p>
                      )}
                    </h1>
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
                    <button
                      className="bg-white text-orange-500 hover:bg-orange-500 hover:text-white font-bold p-2 px-6 rounded-md absolute shadow-md left-[50%] -bottom-5 -translate-x-[50%]"
                      onClick={() => handleAddItem(item)}
                    >
                      ADD
                    </button>
                  </div>
                </li>
              );
            })
          ) : (
            <p className="text-center text-gray-500">No items available</p>
          )}
        </ul>
      )}
    </>
  );
};

export default RestaurantMenuItemMobile;
