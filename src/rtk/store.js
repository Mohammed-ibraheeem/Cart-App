import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './productsSlice'
import cartSclice from './cardSlice'


export const store = configureStore({
    reducer: {
        products: productsSlice,
        cart: cartSclice
    }
})
