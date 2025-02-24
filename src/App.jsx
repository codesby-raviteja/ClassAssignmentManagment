import React, { useContext } from "react"
import {  Outlet } from "react-router-dom"

const App = () => {

  return <div className="bg-gray-600 ">{<Outlet />}</div>
}

export default App
