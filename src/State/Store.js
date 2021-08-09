import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from "./Slice"

export const store = configureStore({
  reducer: {
      counter : CounterReducer
  },
})
