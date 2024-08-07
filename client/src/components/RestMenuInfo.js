import { StarIcon } from "@heroicons/react/24/solid";

import OfferBanner from "./OfferBanner";

const RestMenuInfo = ({ info, data }) => {
  console.log(data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers);

  const resinfo =
    data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;
  const OPTIONS = { dragFree: true };
  const SLIDE_COUNT = resinfo?.length;
  const SLIDES = resinfo.length;
  console.log(info);
  console.log(resinfo);

  return (
    <div className="border-b border-dashed ">
      <div className="flex justify-between items-center pb-4 border-b border-dashed">
        <div>
          <h2 className="text-xl font-bold my-2">{info?.name}</h2>
          <p className="text-xs text-gray-500">
            {info?.cuisines?.map((c, i) => (
              <span key={i}>
                {c}
                {i === info.cuisines.length - 1 ? "" : ", "}
              </span>
            ))}
          </p>
          <p className="text-xs text-gray-500">
            {info?.areaName}, {info?.sla.lastMileTravelString}
          </p>
          <div className=" text-gray-500 text-xs ">
            {info?.feeDetails?.fees[0]?.fee ? (
              <p>
                ₹{info?.feeDetails?.fees[0]?.fee / 100} Delivery fee will apply
              </p>
            ) : null}
          </div>
        </div>
        <div className="border rounded-md font-bold  p-2 text-sm">
          <div className="flex justify-center items-center gap-1  text-green-500">
            <StarIcon className="w-4 h-4" />{" "}
            <p className="font-bold  ">{info?.avgRatingString}</p>
          </div>
          <p className="pt-2 border-t text-xs font-normal text-gray-500 text-center">
            {info?.totalRatingsString}
          </p>
        </div>
      </div>
      <OfferBanner data={resinfo} options={OPTIONS} />
    </div>
  );
};
export default RestMenuInfo;
