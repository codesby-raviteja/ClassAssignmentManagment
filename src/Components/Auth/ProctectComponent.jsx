import React, { use, useContext } from "react"
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

export default function ProctectComponent({ children }) {
  const loggedInUser = useSelector((state) => state.loginDetails)

  return <>{loggedInUser.length ? children : <Navigate to={"/"} />}</>
}
