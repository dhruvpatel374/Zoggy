import { useState } from "react";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

import RestMenuItem from "./RestMenuItem";
const RestCategory = (data) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <>
      <div>
        <div
          onClick={handleClick}
          className="flex cursor-pointer justify-between items-center p-4 my-2 rounded-md bg-gray-50 select-none"
        >
          <h3 className="text-lg font-semibold">
            {data?.data?.title} ({data?.data?.itemCards.length})
          </h3>

          <button>
            {showItems ? (
              <ChevronUpIcon className="w-6 h-6" />
            ) : (
              <ChevronDownIcon className="w-6 h-6" />
            )}
          </button>
        </div>
        <div></div>
      </div>
      <div className="my-4">
        {showItems && <RestMenuItem data={data?.data?.itemCards} />}
      </div>
    </>
  );
};

export default RestCategory;
