import { CDN_URL } from "../utils/constant";
const RestMenuItem = (items) => {
  const category = items?.data;
  if (category.length === 0) {
    return <p className="text-center text-gray-500">No items available</p>;
  }
  return (
    <div>
      {category.map((item, i) => (
        <ul className="p-4">
          {/* {item?.card?.card?.itemCards?.map((item, i) => {
            const itemPrice =
              item?.card?.info?.price || item?.card?.info?.defaultPrice; */}
          <li
            className="p-2 py-8 flex gap-4 md:gap-8 justify-between items-center border-b"
            key={i}
          >
            <div className="basis-8/12 space-y-2">
              <h2 className="text-base font-semibold">
                {item?.card?.info?.name}
              </h2>
              <p className="text-xs font-semibold">
                ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </p>
              <p className="text-xs hidden md:block">
                {item?.card?.info?.description}
              </p>
            </div>

            <div className="w-full basis-4/12 relative">
              <img
                className="w-full h-32 aspect-video object-cover rounded-md"
                src={CDN_URL + item?.card?.info?.imageId}
                alt=""
              />
              <button className="bg-white text-orange-500 hover:bg-orange-500 hover:text-white font-bold p-2 px-6 rounded-md absolute shadow-md left-[50%] -bottom-5 -translate-x-[50%]">
                ADD
              </button>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
};
export default RestMenuItem;
