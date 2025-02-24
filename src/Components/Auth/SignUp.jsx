import React, { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../../Context/UserLoginProvider"
import { useSelector } from "react-redux"

export default function SignUp() {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    category: "",
  })

  const { signUp } = useContext(UserAuth)
  const loggedInUser = useSelector((state) => state.loginDetails)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await signUp(userDetails)
    setUserDetails({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      category: "",
    })
  }

  useEffect(() => {
    if (loggedInUser.length) {
      navigate(`/${loggedInUser[0].role}`)
    }
  }, [loggedInUser])

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="p-8 w-[550px] rounded-xl border-2 bg-blue-400/20 text-white">
        <div className="mb-4">
          <h2 className="text-center text-2xl">Sign up</h2>
          <p className="text-center my-2 font-medium ">
            Doesn't have an account ?{" "}
            <Link to={"/"} className="underline text-sky-500  ">
              Sign In
            </Link>
          </p>
        </div>
        <form className="" onSubmit={handleSubmit}>
          <div className="flex gap-4 my-2">
            <div className="flex flex-col gap-1 w-full">
              <span>Enter your First Name</span>
              <input
                className="w-full p-1 rounded-sm bg-gray-800"
                type="text"
                placeholder="Enter your first Name"
                required
                value={userDetails.firstName}
                onChange={(e) => {
                  setUserDetails((prev) => ({
                    ...prev,
                    firstName: e.target.value.trimEnd(),
                  }))
                }}
              />
            </div>
            <div className="flex flex-col gap-1 w-full rounded-sm ">
              <span>Enter your Last Name</span>
              <input
                className="w-full p-1  bg-gray-800"
                type="text"
                placeholder="Enter your last Name"
                required
                value={userDetails.lastName}
                onChange={(e) => {
                  setUserDetails((prev) => ({
                    ...prev,
                    lastName: e.target.value.trimEnd(),
                  }))
                }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full rounded-sm my-2">
            <span>Enter your Email</span>
            <input
              className="w-full p-1  bg-gray-800"
              type="email"
              placeholder="Enter your Email"
              required
              value={userDetails.email}
              onChange={(e) => {
                setUserDetails((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }}
            />
          </div>
          <div className="flex flex-col gap-1 w-full rounded-sm">
            <span>Enter your password</span>
            <input
              className="w-full p-1  bg-gray-800"
              type="password"
              placeholder="Enter your password"
              required
              autoComplete="on"
              value={userDetails.password}
              onChange={(e) => {
                setUserDetails((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }}
            />
          </div>
          <select
            className="mt-4 p-1 w-full  bg-gray-800 "
            value={userDetails.category}
            onChange={(e) => {
              setUserDetails((prev) => ({
                ...prev,
                category: e.target.value,
              }))
            }}
          >
            <option className="" value="" hidden>
              Select the category
            </option>
            <option className="" value="admin">
              Teacher
            </option>
            <option className="" value="student">
              Student
            </option>
          </select>

          <button className=" mt-5 bg-red-400 w-full py-2 rounded text-xl">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}
