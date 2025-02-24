import { createSlice } from "@reduxjs/toolkit"

const studentSlice = createSlice({
  name: "student",
  initialState: [],
  reducers: {
    addStudent(state, action) {
      state.length = 0
      state.push(action.payload)
    },
    addMultipleStudents(state, action) {
      state.length = 0
      state.push(action.payload)
    },
    
  },
})

export const { addStudent, addMultipleStudents } = studentSlice.actions

export default studentSlice.reducer
