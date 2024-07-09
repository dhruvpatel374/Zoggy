// import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestMenu from "../utils/useRestMenu";
import RestCategory from "./RestCategory";
import ShimmerRestMenu from "../utils/shimmer/ShimmerRestMenu";

const RestMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestMenu(resId); // Custom Hooks

  if (resInfo === null) return <ShimmerRestMenu />;

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);
  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;

  const category = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const categories = category?.filter(
    (c) =>
      c?.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  console.log(categories);
  return (
    <div>
      <div className="">
        {categories.map((category, index) => (
          <RestCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
          />
        ))}
      </div>
    </div>
  );
};

export default RestMenu;
