import React, { useContext } from "react"
import { UserAuth } from "../../Context/UserLoginProvider"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logOut } from "../../Store/LoginDetailsSlice"

const Header = () => {
  const studentData = useSelector((state) => state.loginDetails)
  const data = studentData[0]
  const dispatch = useDispatch()

  const { signOut } = useContext(UserAuth)
  const naviage = useNavigate()

  const handleSingOut = async (e) => {
    const data = await signOut()
    dispatch(logOut())
    naviage("/")
  }

  return (
    <div
      className="flex items-end justify-between
    "
    >
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">
          {(data?.name).toUpperCase()} 👋
        </span>
      </h1>
      <button
        className="bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-sm "
        onClick={handleSingOut}
      >
        Log Out
      </button>
    </div>
  )
}

export default Header
