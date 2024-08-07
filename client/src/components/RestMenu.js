import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestMenuInfo from "./RestMenuInfo";
import RestMenuCard from "./RestMenuCard";
import { MENU_API } from "../utils/constant";
import { isMobile } from "react-device-detect";
import axios from "axios";
import ShimmerRestaurantInfo from "../utils/shimmer/ShimmerRestInfo";
import RestMenuMobile from "./RestMenuMobile";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflineError from "../utils/ErrorPage/OfflineError";
const RestMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${MENU_API}?restaurantId=${resId}`);
        // console.log(data);
        setRestaurant(data);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [resId]);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <OfflineError />;
  }
  return (
    <div className="container-md   m-8  md:w-6/12 md:m-auto ">
      {isLoading ? (
        <ShimmerRestaurantInfo />
      ) : (
        <>
          <RestMenuInfo
            info={restaurant?.data?.cards[2]?.card?.card?.info}
            data={restaurant?.data}
          />
          {isMobile ? <RestMenuMobile /> : <RestMenuCard />}
        </>
      )}
    </div>
  );
};

export default RestMenu;
