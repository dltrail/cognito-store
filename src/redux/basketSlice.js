import { createSlice } from "@reduxjs/toolkit";

// get basketItems from local storage
const basketFromLocalStorage = JSON.parse(
  localStorage.getItem("basketItems") || "[]"
);

const initialState = {
  basketItems: basketFromLocalStorage,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = {
        // create separate basket id (bId) to ensure each item in the basket is unique
        bID: Math.floor(Math.random() * 100),
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
      };

      state.basketItems.push(product);
    },

    removeProduct: (state, action) => {
      state.basketItems = state.basketItems.filter(
        // filter on bID so each basket instance is treated separately.
        //With id, the remove function will remove all instances of that product
        (product) => product.bID !== action.payload.bID
      );
    },
  },
});

export const { addProduct, removeProduct } = basketSlice.actions;

export default basketSlice.reducer;
