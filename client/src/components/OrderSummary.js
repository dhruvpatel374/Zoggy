import { useSelector } from "react-redux";
import { selectItemsInCart, selectTotalPrice } from "../store/cartSlice";
import toast, { Toaster } from "react-hot-toast";
const OrderSummary = () => {
  const cartItems = useSelector(selectItemsInCart);
  const totalPrice = useSelector(selectTotalPrice);

  // Calculate discount and delivery charges
  const price = totalPrice / 100;
  const discount = (totalPrice * 0.1) / 100;
  const deliveryCharges = (totalPrice * 0.05) / 100;
  const totalAmt = totalPrice / 100 + deliveryCharges - discount;

  // Function to handle order placement
  const handlePlaceOrder = () => {
    const orderDetails = {
      items: cartItems.map((item) => ({
        id: item.item.card.info.id,
        name: item.item.card.info.name,
        quantity: item.quantity,
        imageId: item.item.card.info.imageId,
        price: getEffectivePrice(item.item.card.info) / 100, // Convert from paise to rupees
      })),
      totalAmmount: parseFloat(totalAmt.toFixed(2)),
      totalPrice: parseFloat(price.toFixed(2)),
      discount: parseFloat(discount.toFixed(2)),
      deliveryCharges: parseFloat(deliveryCharges.toFixed(2)),
      totalQuantity: cartItems.reduce((total, item) => total + item.quantity),
    };
    toast.success("Your Order Data is pirnted in console ");
    console.log("Order Data:-", orderDetails);
  };

  // Function to get effective price
  const getEffectivePrice = (itemInfo) => {
    if (itemInfo?.defaultPrice) {
      return itemInfo.defaultPrice;
    } else if (itemInfo?.finalPrice) {
      return itemInfo.finalPrice;
    } else if (itemInfo?.price) {
      return itemInfo.price;
    }
  };

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            boxShadow: "none", // Remove shadow
          },
        }}
      />
      <div className="basis-5/12 h-fit sticky top-40 p-8 rounded-md border shadow-md my-8 md:m-0">
        <h2 className="text-xl font-bold border-b pb-4">Order Summary</h2>

        {/* Order details */}
        <div className="py-4 text-lg space-y-4 border-b">
          <div className="flex justify-between items-center font-semibold">
            <p className="font-normal">Price ({cartItems.length} items)</p>
            <p>₹ {parseFloat(totalPrice / 100).toFixed(2)}</p>
          </div>
          <div className="flex justify-between items-center font-semibold">
            <p className="font-normal">Discount (10%)</p>
            <p> - ₹ {parseFloat(discount).toFixed(2)}</p>
          </div>
          <div className="flex justify-between items-center font-semibold">
            <p className="font-normal">Delivery charges (5%)</p>
            <p>+ ₹ {parseFloat(deliveryCharges).toFixed(2)}</p>
          </div>

          <p className="text-sm my-2">
            You'll save ₹{parseFloat(discount).toFixed(2)} on this order 🎉
          </p>
        </div>

        <div className="py-4 border-b">
          <div className="md:flex justify-between items-center font-bold text-lg md:text-2xl">
            <h1>Total Amount</h1>
            <h1 className="text-orange-400">
              ₹ {parseFloat(totalAmt).toFixed(2)}
            </h1>
          </div>
        </div>

        <button
          onClick={handlePlaceOrder}
          className="w-full block mt-4 uppercase font-bold text-lg bg-orange-400 text-white text-center p-4 rounded-md"
        >
          Place order
        </button>
      </div>
    </>
  );
};

export default OrderSummary;
