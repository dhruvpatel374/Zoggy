import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (cartItem) =>
          cartItem?.item?.card?.info?.id === action.payload.card.info.id
      );

      if (existingItemIndex >= 0) {
        // Item already exists in the cart, increase the quantity
        state.items[existingItemIndex].quantity += 1;
      } else {
        // Item does not exist, add it to the cart
        state.items.push({
          item: action.payload,
          quantity: 1,
        });
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (cartItem) => cartItem?.item?.card?.info?.id !== action.payload.id
      );
    },

    increaseItemQuantity: (state, action) => {
      const { id } = action.payload;

      const itemToIncrease = state.items.find(
        (cartItem) => cartItem?.item?.card?.info?.id === id
      );

      if (itemToIncrease) {
        itemToIncrease.quantity += 1;
      }
    },

    decreaseItemQuantity: (state, action) => {
      const { id } = action.payload;
      const itemToDecrease = state.items.find(
        (cartItem) => cartItem?.item?.card?.info?.id === id
      );

      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity -= 1;
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Selector to get items in the cart
export const selectItemsInCart = ({ cart }) => cart?.items;

// Selector to calculate total price
export const selectTotalPrice = ({ cart }) => {
  return cart?.items.reduce((total, cartItem) => {
    const itemPrice = getEffectivePrice(cartItem?.item?.card?.info);
    return total + itemPrice * cartItem.quantity; // Calculate total price in rupees
  }, 0);
};

// Function to get effective price
const getEffectivePrice = (itemInfo) => {
  if (itemInfo?.finalPrice) {
    return itemInfo.finalPrice;
  } else if (itemInfo?.price) {
    return itemInfo.price; // Convert from paise to rupees
  } else if (itemInfo?.defaultPrice) {
    return itemInfo.defaultPrice;
  }
};

export const {
  addToCart,
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
