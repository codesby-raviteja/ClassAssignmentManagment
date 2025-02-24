import { configureStore } from "@reduxjs/toolkit"
import adminReducer from "./LoginDetailsSlice"
import studentsReducer from "./StudentSlice"

export const Store = configureStore({
  reducer: {
    loginDetails: adminReducer,
    students: studentsReducer,
  },
})
