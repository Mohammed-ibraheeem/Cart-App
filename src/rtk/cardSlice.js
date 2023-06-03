import { createSlice } from "@reduxjs/toolkit";

export const cartSclice = createSlice({
    initialState: [],
    name: 'productsSclice',
    reducers: {
        addtocart: (state, action) => {
            const findproduct = state.find((product) => product.id === action.payload.id);
            if (findproduct) {
                findproduct.quantity += 1;
            } else {
                const productClone = { ...action.payload, quantity: 1 }
                state.push(productClone);
            }
        },
        deletecart: (state, action) => {
            return state.filter((product) => product.id !== action.payload.id)
        },
        clear: (state, action) => {
            return [];
        }
    }
})
export const { addtocart, deletecart, clear } = cartSclice.actions;
export default cartSclice.reducer;