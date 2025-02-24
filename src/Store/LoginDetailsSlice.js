import { createSlice } from "@reduxjs/toolkit"

const adminSlice = createSlice({
  name: "loginDetails",
  initialState: [],
  reducers: {
    addLoggedInUser(state, action) {
      state.push(action.payload)
    },
    logOut(state, action) {
      state.length = 0
    },
  },
})

export const getLoginUserDetails = (list, email, password) => {}

export const { addLoggedInUser, logOut } = adminSlice.actions

export default adminSlice.reducer
