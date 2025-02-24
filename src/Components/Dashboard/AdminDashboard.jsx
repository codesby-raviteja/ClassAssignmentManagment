import React, { useContext } from "react"
import Header from "../others/Header"
import CreateTask from "../others/CreateTask"
import AllTask from "../others/AllTask"
import { UserAuth } from "../../Context/UserLoginProvider"

const AdminDashboard = ({}) => {


  return (
    <div className="h-screen text-white w-full max-w-7xl mx-auto p-10">
      <Header />
      <CreateTask  />
      <AllTask  />
    </div>
  )
}

export default AdminDashboard
