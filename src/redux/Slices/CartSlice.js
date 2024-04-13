import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState: {
        value: [],
    },
    reducers: {
        add: function(state, action) {
            // console.log("in cart add");
            state.value.push(action.payload);
            // console.log("after add in cart");

        },
        remove: function(state, action) {
            state.value = state.value.filter( (item) => item.id !== action.payload);
        }
    }
})

export const{add, remove} = CartSlice.actions;
export default CartSlice.reducer;
