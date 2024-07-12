import { useState } from "react";
import RestaurantMenuItemMobile from "./RestMenuItemMobile";
import ShimmerRestMenu from "../utils/shimmer/ShimmerRestMenu";
const RestCategoryMobile = ({ restaurant }) => {
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(0);

  const restaurantMenu =
    restaurant?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const handleToggleAccordion = (index) => {
    if (index === activeAccordionIndex) {
      setActiveAccordionIndex(null);
    } else {
      setActiveAccordionIndex(index);
    }
  };
  if (!restaurantMenu) return <ShimmerRestMenu />;
  return (
    <div className="my-4">
      {restaurantMenu?.map((m, i) => {
        if (m?.card?.card?.title) {
          return (
            <RestaurantMenuItemMobile
              items={m}
              key={i}
              index={i}
              activeIndex={activeAccordionIndex}
              setActiveIndex={handleToggleAccordion}
            />
          );
        }
      })}
    </div>
  );
};

export default RestCategoryMobile;
