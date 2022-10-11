import { configureStore } from '@reduxjs/toolkit'
import filter from "./filterSlice"

export const store = configureStore({
  reducer: {
    filter,
  },
})
console.log(store)