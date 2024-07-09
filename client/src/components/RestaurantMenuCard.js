// import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestMenu from "../utils/useRestMenu";
import RestaurantCategory from "./RestaurantCategory";

/* const RestMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestMenu(resId);

    const resDetails = useResDetails(resId);

    //const {name, cuisines, costForTwoMessage} = resDetails;

    if(resInfo.length === 0)
       return <Shimmer />
       
    //const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" );

    /*const {name, cuisines} = resInfo?.cards[2]?.card?.card?.info;
    console.log(resInfo?.cards[0]?.card?.card?.info);
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" );
    console.log(itemCards);
*/

/*    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(itemCards);

    

    return (

        
        <div>
            <div className="restDetails">

                <h1 className="font-extrabold text-5xl text-center m-4  bg-orange-200">{name}</h1>
                <div className="flex flex-wrap justify-between font-normal text-2xl mb-4">
                    <h3>{cuisines + (" ")}</h3>
                    <h3>{costForTwoMessage}</h3>
                </div>
                <div className="text-center">
                    <h1 className="font-bold text-3xl">Menu</h1>
                    {
                        categories.map((category, index) => <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}/>)}
                </div>
            </div>
        </div>
    );
};
*/

const RestMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestMenu(resId); // Custom Hooks

  if (resInfo === null) return <h1>Loading....</h1>;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);
  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;

  const category = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const categories = category.filter(
    (c) =>
      c?.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  console.log(categories);
  return (
    <div>
      <div className="">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
          />
        ))}
      </div>
    </div>
  );
};

export default RestMenu;
