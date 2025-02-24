import { createContext, use, useEffect, useState } from "react"
import { supabase } from "../../supabaseConfig"
import { addNewStudent, fetchStudentData } from "./DatabaseMangement"
import { useDispatch } from "react-redux"
import { addLoggedInUser } from "../Store/LoginDetailsSlice"
import { addMultipleStudents, addStudent } from "../Store/StudentSlice"

export const UserAuth = createContext(null)

const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState({})

  const dispatch = useDispatch()

  const singIn = async ({ email, password }) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        throw error
      } else {
        const { data: studentData } = await fetchStudentData({
          id: data?.user?.id,
          role: data?.user?.user_metadata?.role,
        })
        dispatch(addLoggedInUser(data?.user?.user_metadata))
        if (data?.user?.user_metadata?.role === "admin") {
          dispatch(addMultipleStudents(studentData))
        } else {
          dispatch(addStudent(studentData[0]))
        }
        // return data?.user?.user_metadata?.role
      }
    } catch (error) {
      console.log(error)
    }
  }

  const signUp = async ({ firstName, lastName, email, password, category }) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            role: category,
            name: `${firstName} ${lastName}`,
          },
        },
      })
      if (error) {
        throw error
      } else {
        if (data?.user?.user_metadata?.role === "student") {
          // if signedup user is student we need to create Data (add new student to Database)
          const studentData = await addNewStudent({
            id: data?.user?.id,
            name: data?.user?.user_metadata?.name,
            role: data?.user?.user_metadata?.role,
          })
          dispatch(addLoggedInUser(data?.user?.user_metadata))
          dispatch(addStudent(studentData[0]))

          return {
            SignInData: data?.user?.user_metadata,
            taskData: studentData,
          }
        }
        const { data: taskData, error } = await fetchStudentData({
          id: data?.user?.id,
          role: data?.user?.role,
        })
        console.log(taskData)
        return { SignInData: data?.user?.user_metadata, taskData }
      }
    } catch (error) {
      console.log(error)
    }
  }

  const signOut = async () => {
    try {
      const { data, error } = await supabase.auth.signOut()
      if (error) {
        throw error
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <UserAuth.Provider value={{ signUp, singIn, user, setUser, signOut }}>
      {children}
    </UserAuth.Provider>
  )
}

export default UserAuthProvider
