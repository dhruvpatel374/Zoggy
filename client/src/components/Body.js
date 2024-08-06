import RestCard from "./RestCard";
import { SWIGGY_API } from "../utils/constant";
import { useState, useEffect } from "react";
import ShimmerRestCard from "../utils/shimmer/ShimmerRestCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflineError from "../utils/ErrorPage/OfflineError";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import Banner from "./Banner";
import useRest from "../utils/useRest";
import ShimmerBanner from "../utils/shimmer/ShimmerBanner";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [originalListOfRestaurant, setOriginalListOfRestaurant] = useState([]);
  // const [ratingSelected, setRatingSelected] = useState(true);
  const [deliveryTimeSelected, setDeliveryTimeSelected] = useState(true);
  const [ratingHtoLSelected, setRatingHtoLSelected] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);
  const { restaurant: resinfo, loading } = useRest();
  console.log(
    resinfo?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
  );

  useEffect(() => {
    fetchData();
  }, []);
  const OPTIONS = { loop: true };
  const SLIDES =
    resinfo?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
      ?.length;

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
    // console.log(json);
    setListOfRestaurant(
      // json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      resData
    );
    setOriginalListOfRestaurant(resData);
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <OfflineError />;
  }
  if (originalListOfRestaurant.length === 0) {
    return <ShimmerRestCard />;
  }

  return (
    <div>
      <div className="container-max  ">
        {loading ? (
          <ShimmerBanner />
        ) : (
          <Banner data={resinfo} options={{ loop: true }} />
        )}
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
            className="bg-orange-400 basis-2/12 text-center text-white p-2 flex justify-center gap-2 items-center md:px-8 rounded-md text-sm md:text-base"
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
            <MagnifyingGlassIcon className="w-4 h-4" />{" "}
            <span className="hidden md:block">Search</span>
          </button>
        </div>
        <h1 className="my-4 font-bold text-3xl pl-5 ">
          Restaurant List
          {/* ({listOfRestaurant?.length}) */}
        </h1>
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

              // console.log(newList);
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

              // console.log(newList);
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
        <div className="grid  md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-4 md:gap-6 lg:gap-8 m-5">
          {listOfRestaurant?.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant?.info?.id}
              className="hover:scale-95 transition ease-in-out duration-300 relative z-10"
              key={restaurant?.info?.id}
            >
              <RestCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
