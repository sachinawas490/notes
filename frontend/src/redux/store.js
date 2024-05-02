import { configureStore } from '@reduxjs/toolkit'
import userslice from './slice/userslice'

export const store = configureStore({
  reducer: {
   "userex":userslice,

  },
})