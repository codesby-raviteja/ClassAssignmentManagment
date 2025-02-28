import React, { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../../Context/UserLoginProvider"
import { useSelector } from "react-redux"
import { validateForm } from "../Helper"

export default function SignUp() {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    category: "",
  })

  const [Errors, setErrors] = useState({})

  const { signUp } = useContext(UserAuth)
  const loggedInUser = useSelector((state) => state.loginDetails)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errorObj = validateForm(userDetails)

    if (Object.keys(errorObj).length > 0) {
      setErrors(errorObj)
    } else {
      const res = await signUp(userDetails)
      setUserDetails({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          category: "",
        })
    }

  }

  useEffect(() => {
    if (loggedInUser.length) {
      navigate(`/${loggedInUser[0].role}`)
    }
  }, [loggedInUser])

  const handleChange = (e) => {
    const { value, name } = e.target
    setUserDetails((prev) => ({ ...prev, [name]: value }))
    setErrors({})
  }

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
            <div className="w-full">
              <div className="flex flex-col gap-1 w-full">
                <label>Enter your First Name</label>
                <input
                  className="w-full p-1 rounded-sm bg-gray-800"
                  type="text"
                  placeholder="Enter your first Name"
                  name="firstName"
                  value={userDetails.firstName}
                  onChange={handleChange}
                />
              </div>
              {Errors.firstName ? (
                <p className="text-base text-red-500">{Errors.firstName}</p>
              ) : (
                <p className="text-base h-5 "></p>
              )}
            </div>

            <div className="w-full">
              <div className="flex flex-col gap-1 w-full rounded-sm ">
                <label>Enter your Last Name</label>
                <input
                  className="w-full p-1  bg-gray-800"
                  type="text"
                  placeholder="Enter your last Name"
                  name="lastName"
                  value={userDetails.lastName}
                  onChange={handleChange}
                />
              </div>
              {Errors.lastName ? (
                <p className="text-base text-red-500">{Errors.lastName}</p>
              ) : (
                <p className="text-base h-5 "></p>
              )}
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-1 w-full rounded-sm mt-2">
              <label>Enter your Email</label>
              <input
                className="w-full p-1  bg-gray-800"
                type="email"
                placeholder="Enter your Email"
                value={userDetails.email}
                name="email"
                onChange={handleChange}
              />
            </div>
            {Errors.email ? (
              <p className="text-base text-red-500">{Errors.email} </p>
            ) : (
              <p className="text-base h-5 "></p>
            )}
          </div>

          <div>
            <div className="flex flex-col gap-1 w-full rounded-sm">
              <label>Enter your password</label>
              <input
                className="w-full p-1  bg-gray-800"
                type="password"
                placeholder="Enter your password"
                autoComplete="on"
                value={userDetails.password}
                name="password"
                onChange={handleChange}
              />
            </div>
            {Errors.password ? (
              <p className="text-base text-red-500 ">{Errors.password}</p>
            ) : (
              <p className="text-base h-5 "></p>
            )}
          </div>

          <div>
            <select
              className="mt-4 p-1 w-full  bg-gray-800 "
              value={userDetails.category}
              name="category"
              onChange={handleChange}
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
            {Errors.category ? (
              <p className="text-base text-red-500">{Errors.category}</p>
            ) : (
              <p className="text-base h-5 "></p>
            )}
          </div>

          <button className=" mt-5 bg-red-400 w-full py-2 rounded text-xl">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}
