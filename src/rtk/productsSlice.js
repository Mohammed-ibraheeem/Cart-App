import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchproducts = createAsyncThunk("productsSclice/fetchproducts", async () => {
    const res = await fetch('https://api-vr4k.onrender.com/product');
    const data = await res.json();
    return data;

})
export const productsSclice = createSlice({
    initialState: [],
    name: 'productsSclice',
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchproducts.fulfilled, (state, action) => {
            return action.payload;
        })

    }
})
export const { s } = productsSclice.actions;
export default productsSclice.reducer;