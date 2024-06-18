import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API } from "../utils/constant";
import { useState, useEffect } from "react";
import Shimmer from "../utils/Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    async function checkJsonData(jsonData) {
      for (let i = 0; i < jsonData?.data?.cards.length; i++) {
        let checkData =
          jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        if (checkData !== undefined) {
          return checkData;
        }
      }
    }
    const resData = await checkJsonData(json);
    console.log(json);
    setListOfRestaurant(
      // json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      resData
    );
  };

  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="container-max ">
      <h1 className="my-4 font-bold text-3xl pl-5">Restaurant List</h1>
      <div className="pl-5">
        <button
          className=" border-2 border-gray-500 rounded-3xl p-2 mr-4 mb-4 sm:mb-0 text-gray-700"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Rating 4.0+
        </button>
      </div>
      <div className="grid  md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-8 m-5">
        {listOfRestaurant?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
