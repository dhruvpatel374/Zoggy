import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API } from "../utils/constant";
import { useState, useEffect } from "react";
import Shimmer from "../utils/Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [originalListOfRestaurant, setOriginalListOfRestaurant] = useState([]);
  // const [ratingSelected, setRatingSelected] = useState(true);
  const [deliveryTimeSelected, setDeliveryTimeSelected] = useState(true);
  const [ratingHtoLSelected, setRatingHtoLSelected] = useState(true);

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
    setOriginalListOfRestaurant(resData);
  };

  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="container-max ">
      <h1 className="my-4 font-bold text-3xl pl-5">Restaurant List</h1>
      <div className="pl-5">
        {/* <button
          className={`border-2 border-gray-500 rounded-3xl p-2 mr-4 mb-4 sm:mb-0 text-gray-700 ${
            ratingSelected ? "selected-button" : "border-orange-400"
          }`}
          onClick={() => {
            setRatingSelected(!ratingSelected);
            const filteredList = listOfRestaurant.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            console.log(filteredList);
            setListOfRestaurant(filteredList);
          }}
        >
          Rating 4.0+
        </button> */}
        <button
          className={`border-2 border-gray-500 rounded-3xl p-2 mr-4 mb-4 sm:mb-0 text-gray-700 ${
            deliveryTimeSelected ? "selected-button" : "border-orange-400"
          }`}
          onClick={() => {
            setDeliveryTimeSelected(!deliveryTimeSelected);
            const newList = [...listOfRestaurant];

            newList.sort(
              (a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime
            );

            console.log(newList);
            setListOfRestaurant(newList);
          }}
        >
          Delivery Time Low to High
        </button>
        <button
          className={`border-2 border-gray-500 rounded-3xl p-2 mr-4 mb-4 sm:mb-0 text-gray-700 ${
            ratingHtoLSelected ? "selected-button" : "border-orange-400"
          }`}
          onClick={() => {
            setRatingHtoLSelected(!ratingHtoLSelected);
            const newList = [...listOfRestaurant];

            newList.sort((a, b) => b.info.avgRating - a.info.avgRating);

            console.log(newList);
            setListOfRestaurant(newList);
          }}
        >
          Rating High to Low
        </button>
        <button
          className=" border-2 border-gray-500 rounded-3xl p-2 mr-4 mb-4 sm:mb-0 text-gray-700 "
          onClick={() => {
            // setRatingSelected(true);
            setDeliveryTimeSelected(true);
            setRatingHtoLSelected(true);
            setListOfRestaurant(originalListOfRestaurant);
          }}
        >
          Reset
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
