import RestaurantMenuItemMobile from "./RestMenuItemMobile";
import ShimmerRestMenu from "../utils/shimmer/ShimmerRestMenu";
const RestCategoryMobile = ({ restaurant }) => {
  const restaurantMenu =
    restaurant?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  if (!restaurantMenu) return <ShimmerRestMenu />;
  return (
    <div className="my-4">
      {restaurantMenu?.map((m, i) => {
        if (m?.card?.card?.title) {
          return <RestaurantMenuItemMobile items={m} key={i} />;
        }
      })}
    </div>
  );
};

export default RestCategoryMobile;
