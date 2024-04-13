import { configureStore } from "@reduxjs/toolkit";
//here,from CartSlice.js -> bydefault we are exporting CartSlice.reducer -> so, here need to use only CartSlice with cart
//if, we would send, CartSlice as default from CartSlice.js, then, here we need to initialize cart with CartSlice.reducer

import cartReducer from "./Slices/CartSlice";

export const store = configureStore({
    reducer: {
        cart : cartReducer,
    }
})
