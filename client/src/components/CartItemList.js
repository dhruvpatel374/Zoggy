import { useSelector, useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeFromCart,
  selectItemsInCart,
} from "../store/cartSlice";
import { CDN_URL } from "../utils/constant";

const CartItemList = () => {
  const cartItems = useSelector(selectItemsInCart);
  const dispatch = useDispatch();

  const removeItem = (id) => dispatch(removeFromCart({ id }));
  const decreaseQuantity = (id) => dispatch(decreaseItemQuantity({ id }));
  const increaseQuantity = (id) => dispatch(increaseItemQuantity({ id }));

  if (cartItems.length === 0) {
    return (
      <div className="flex grow min-h-[60vh] justify-center items-center">
        <p>Your cart is empty!</p>
      </div>
    );
  }

  const getEffectivePrice = (itemInfo) => {
    if (itemInfo?.finalPrice) {
      return itemInfo.finalPrice / 100;
    } else if (itemInfo?.price) {
      return itemInfo.price / 100; // Convert from paise to rupees
    } else if (itemInfo?.defaultPrice) {
      return itemInfo.defaultPrice / 100;
    }
  };

  return (
    <ul className="basis-7/12">
      {cartItems.map((item) => (
        <li
          key={item?.item?.card?.info?.id}
          className="flex gap-4 justify-between max-w-[600px] my-4 border-b-2 border-dashed border-gray-300 pb-4"
        >
          <div className="basis-3/12">
            <img
              className="w-full h-full md:h-auto object-cover block rounded-md aspect-square"
              src={CDN_URL + item?.item?.card?.info?.imageId}
              alt="Image Not Found"
            />
          </div>
          <div className="basis-9/12">
            <p className="text-lg font-semibold">
              {item?.item?.card?.info?.name}
            </p>

            <p className="hidden md:block">
              {item?.item?.card?.info?.description?.length > 50
                ? item?.item?.card?.info?.description.slice(0, 50) + "..."
                : item?.item?.card?.info?.description}
            </p>

            <p className="my-2 space-x-1 flex gap-1">
              <span className="font-semibold flex gap-1">
                {item?.item?.card?.info?.price &&
                item?.item?.card?.info?.finalPrice ? (
                  <>
                    <p className="line-through text-gray-500">
                      ₹{item?.item?.card?.info?.price / 100}
                    </p>
                    <p className="  ">
                      ₹{item?.item?.card?.info?.finalPrice / 100}
                    </p>
                  </>
                ) : (
                  <p>
                    ₹{" "}
                    {item?.item?.card?.info?.price / 100 ||
                      item?.item?.card?.info?.defaultPrice / 100}
                  </p>
                )}
              </span>
              <span className="text-gray-800 font-normal">
                ({getEffectivePrice(item?.item?.card?.info)} × {item?.quantity})
              </span>
            </p>

            {/* actions */}
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center">
                <button
                  onClick={() => decreaseQuantity(item?.item?.card?.info?.id)}
                  disabled={item?.quantity === 1}
                  className={
                    "bg-orange-500 disabled:bg-orange-500/50 disabled:cursor-not-allowed text-white font-bold w-8 h-8 rounded-md"
                  }
                >
                  -
                </button>
                <p className="font-bold w-8 h-8 flex justify-center items-center">
                  {item?.quantity}
                </p>
                <button
                  onClick={() => increaseQuantity(item?.item?.card?.info?.id)}
                  className="bg-orange-500 text-white font-bold w-8 h-8 rounded-md"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeItem(item?.item?.card?.info?.id)}
                className="border border-orange-500 text-xs font-semibold text-orange-500 p-2 px-4 rounded-md"
              >
                Remove
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CartItemList;
