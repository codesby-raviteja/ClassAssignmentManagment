import React, { useContext, useEffect, useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { UserAuth } from "../../Context/UserLoginProvider"
import { useSelector } from "react-redux"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { singIn } = useContext(UserAuth)
  const navigate = useNavigate()
  const loggedInUser = useSelector((state) => state.loginDetails)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const role = await singIn({ email, password })
    setEmail("")
    setPassword("")
  }

  useEffect(() => {
    if (loggedInUser.length) {
      navigate(`/${loggedInUser[0].role}`)
    }
  }, [loggedInUser])

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="border-2 p-8 w-[550px] rounded-xl bg-gray-800/40 text-white">
        <div className="mb-4">
          <h2 className="text-center text-2xl">Sign In</h2>
          <p className="text-center my-2 font-medium ">
            Doesn't have an account ?{" "}
            <Link to={"signUp"} className="underline text-sky-500  ">
              Sign Up
            </Link>
          </p>
        </div>
        <form className="flex flex-col  " onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="text-lg ">
              Enter your Email
            </label>
            <input
              className="text-white  w-full outline-none bg-gray-800 border-2 border-gray-900 y my-1 focus:bg-gray-900   rounded py-2 px-3 text-lg  placeholder:text-gray-400"
              id="email"
              type="email"
              placeholder="Enter your Email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </div>
          <div>
            <label htmlFor="password" className="text-lg ">
              Enter your Password
            </label>
          </div>
          <input
            className="text-white w-full outline-none bg-gray-800 border-2 border-gray-900 my-1 focus:bg-gray-900 rounded py-2 px-3 text-lg  placeholder:text-gray-400"
            type="password"
            id="password"
            required
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            autoComplete="on"
          />
          <button className="w-full text-white bg-red-400/90  focus:outline-white focus:outline-1  px-5 py-3 mt-5 text-xl rounded placeholder:text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
