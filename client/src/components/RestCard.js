import { StarIcon } from "@heroicons/react/24/solid";
import { CDN_URL } from "../utils/constant";
const RestCard = (props) => {
  const { resData } = props;
  // sohrtcut if we don't want to writee resData.data here
  const {
    cloudinaryImageId,
    name,
    avgRating,
    aggregatedDiscountInfoV3,
    aggregatedDiscountInfoV2,
    cuisines,
    sla,
    locality,
    totalRatingsString,
  } = resData?.info;

  return (
    <div className="cursor-pointer 	">
      <div className="relative  -z-50">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="restaurant"
          className="relative w-full min-h-[180px] overflow-hidden aspect-video object-cover block rounded-md"
        />
        <div className="overlay w-full rounded-md p-2 px-3 ">
          <p className="text-xl font-bold flex gap-2 flex-wrap">
            {/* {aggregatedDiscountInfoV3?.header
              ? aggregatedDiscountInfoV3.header
              : ""}{" "}
            {aggregatedDiscountInfoV3?.subHeader
              ? aggregatedDiscountInfoV3.subHeader
              : ""} */}
            {aggregatedDiscountInfoV2 ? (
              <>
                {aggregatedDiscountInfoV2.header}{" "}
                {aggregatedDiscountInfoV2?.shortDescriptionList?.meta}
              </>
            ) : (
              <>
                {aggregatedDiscountInfoV3?.header || ""}{" "}
                {aggregatedDiscountInfoV3?.subHeader || ""}
              </>
            )}
          </p>
        </div>
      </div>
      <h2 className="text-lg font-bold mt-2 text-zinc-800 ">{name}</h2>
      <div className="flex items-center gap-2">
        <StarIcon className="w-6 h-6 text-orange-400" />{" "}
        <p className="font-bold text-gray-700 text-base">
          {avgRating}
          <span className="text-sm font-extralight">
            ({totalRatingsString})
          </span>
        </p>
        <p className="font-bold text-gray-700 text-base hidden md:block lg:block">
          • {sla?.slaString}
        </p>
      </div>
      <p className="truncate  text-zinc-600 hidden md:block lg:block">
        <span>{cuisines.join(",")}</span>
      </p>

      <p className="text-zinc-600">{locality}</p>
    </div>
  );
};

export default RestCard;
