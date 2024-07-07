import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API } from "../utils/constant";
import { useState, useEffect } from "react";
import Shimmer from "../utils/Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [originalListOfRestaurant, setOriginalListOfRestaurant] = useState([]);
  // const [ratingSelected, setRatingSelected] = useState(true);
  const [deliveryTimeSelected, setDeliveryTimeSelected] = useState(true);
  const [ratingHtoLSelected, setRatingHtoLSelected] = useState(true);
  const [searchText, setSearchText] = useState("");

  const [isSearchEmpty, setIsSearchEmpty] = useState(false);

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

  if (originalListOfRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="container-max ">
      <div className="flex gap-4 max-w-[560px] w-[95%] mx-auto m-5 h-12 lg:w-[500px]   ">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for Restaurants and cuisine"
          className="p-2 px-4 rounded-md border outline-none focus-within:border-orange-400 border-gray-200 grow"
          value={searchText}
          onChange={(input) => {
            setSearchText(input.target.value);
          }}
        ></input>
        <button
          type="submit"
          className="bg-orange-400 text-white p-2 sm:px-8 rounded-md"
          onClick={() => {
            const filteredRestaurant = originalListOfRestaurant.filter(
              (res) => {
                return (
                  res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase()) ||
                  res.info.cuisines
                    .join(",")
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                );
              }
            );

            setIsSearchEmpty(filteredRestaurant.length === 0);
            setListOfRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
      </div>
      <h1 className="my-4 font-bold text-3xl pl-5 ">Restaurant List</h1>
      <div className="pl-5">
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
            setIsSearchEmpty(false);
            setSearchText("");
          }}
        >
          Reset
        </button>
      </div>
      <div>
        {isSearchEmpty && (
          <div className="text-center mt-4 font-bold text-xl">
            <p>No Restaurants and Cuisine found for "{searchText}" </p>
          </div>
        )}
      </div>
      <div className="grid  md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-8 m-5">
        {listOfRestaurant?.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
