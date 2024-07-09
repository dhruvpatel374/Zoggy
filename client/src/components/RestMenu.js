import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestMenuInfo from "./RestMenuInfo";
import RestMenuCard from "./RestMenuCard";
import { MENU_API } from "../utils/constant";

import axios from "axios";
import ShimmerRestaurantInfo from "../utils/shimmer/ShimmerRestInfo";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${MENU_API}?restaurantId=${resId}`);
        console.log(data);
        setRestaurant(data);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [resId]);

  return (
    <div className="container-md m-8">
      {isLoading ? (
        <ShimmerRestaurantInfo />
      ) : (
        <>
          <RestMenuInfo info={restaurant?.data?.cards[2]?.card?.card?.info} />
          <RestMenuCard />
        </>
      )}
    </div>
  );
};

export default RestaurantMenu;
