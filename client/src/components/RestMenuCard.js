import { useParams } from "react-router-dom";
import useRestMenu from "../utils/useRestMenu";
import RestCategory from "./RestCategory";
import ShimmerRestMenu from "../utils/shimmer/ShimmerRestMenu";

const RestMenuCard = () => {
  const { resId } = useParams();

  const resInfo = useRestMenu(resId); // Custom Hooks

  if (!resInfo) return <ShimmerRestMenu />;

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(itemCards);
  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;

  const category = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  // console.log(category);
  const categories = category?.filter(
    (c) =>
      c?.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  // console.log(categories);
  return (
    <div>
      <div>
        {categories?.map((category, index) => (
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
