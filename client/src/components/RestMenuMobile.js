import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestCategoryMobile from "./RestCategoryMobile";
import { MENU_API } from "../utils/constant";
import axios from "axios";

const RestMenuMobile = () => {
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
    <div className="container-md ">
      <RestCategoryMobile
        restaurant={restaurant}
        // restaurant?.data?.cards[2]?.card?.card?.info
      />
    </div>
  );
};

export default RestMenuMobile;
