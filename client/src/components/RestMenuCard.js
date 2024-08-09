import { useParams } from "react-router-dom";
import useRestMenu from "../utils/useRestMenu";
import RestCategory from "./RestCategory";
import ShimmerRestMenu from "../utils/shimmer/ShimmerRestMenu";
import { useImage } from "../utils/ImageContext.js";
import { useEffect } from "react";
import { useFilter } from "../utils/FilterContext.js";
const RestMenuCard = () => {
  const { resId } = useParams();

  const resInfo = useRestMenu(resId); // Custom Hooks
  const { image, setImage } = useImage(); // Use the context
  //
  const { filter, setFilter } = useFilter();
  useEffect(() => {
    if (resInfo) {
      const newImage = resInfo?.cards[2]?.card?.card?.info?.cloudinaryImageId;
      setImage(newImage); // Save the image in context
    }
  }, [resInfo, setImage]);
  useEffect(() => {
    setFilter("ALL");
  }, [resId, setFilter]);

  if (!resInfo) return <ShimmerRestMenu />;

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(itemCards);
  const { name, cuisines, costForTwoMessage, avgRating, cloudinaryImageId } =
    resInfo?.cards[2];

  const category = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  // console.log(category);
  const categories = category?.filter(
    (c) =>
      c?.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  // const image = resInfo?.cards[2]?.card?.card?.info;
  // console.log(image);

  // console.log(categories);
  return (
    <div className="mt-4">
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
      <div>
        {categories?.map((category, index) => (
          <RestCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            // image={image.cloudinaryImageId}
          />
        ))}
      </div>
    </div>
  );
};

export default RestMenuCard;
