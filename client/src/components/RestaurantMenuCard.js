import RestaurantMenuItem from "./RestaurantMenuItem";

const RestaurantMenuCard = ({ restaurant }) => {
  const restaurantMenu =
    restaurant?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div className="my-4">
      {restaurantMenu?.map((m, i) => {
        if (m?.card?.card?.title) {
          return <RestaurantMenuItem items={m} key={i} />;
        }
      })}
    </div>
  );
};

export default RestaurantMenuCard;
