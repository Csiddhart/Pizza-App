import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './slices/CartSlice'
import FilterSlice from './slices/FilterSlice'
import SearchSlice from './slices/SearchSlice'

export const store = configureStore({
  reducer: {
    cart:CartSlice,//eta(cart ta) oi func ta represent
    filter:FilterSlice,
    search: SearchSlice,
  },
})