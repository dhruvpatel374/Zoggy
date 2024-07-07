import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantMenuCard from "./RestaurantMenuCard";
import { MENU_API } from "../utils/constant";
import axios from "axios";
const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${MENU_API}?restaurantId=${restaurantId}`
        );
        console.log(data);
        setRestaurant(data);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [restaurantId]);

  // console.log(resItems?.card);

  // object►data►cards►4►groupedCard►cardGroupMap►REGULAR►cards►2►card►card►categories►0►itemCards►0►card►info►
  return (
    <div className="container-md my-8 mx-8">
      <RestaurantInfo info={restaurant?.data?.cards[2]?.card?.card?.info} />
      <RestaurantMenuCard restaurant={restaurant} />
    </div>
  );
};

export default RestaurantMenu;
