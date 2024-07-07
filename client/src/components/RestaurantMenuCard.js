import RestaurantMenuItem from "./RestaurantMenuItem";
import { useState } from "react";
const RestaurantMenuCard = ({ restaurant }) => {
  const restaurantMenu =
    restaurant?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(0);

  const handleToggleAccordion = (index) => {
    if (index === activeAccordionIndex) {
      setActiveAccordionIndex(null);
    } else {
      setActiveAccordionIndex(index);
    }
  };
  return (
    <div className="my-4 ">
      {restaurantMenu?.map((m, i) => {
        if (m?.card?.card?.title) {
          return (
            <RestaurantMenuItem
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

export default RestaurantMenuCard;
