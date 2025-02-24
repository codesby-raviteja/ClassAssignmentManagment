import React, { useContext } from "react"
import Header from "../others/Header"
import TaskListNumber from "../others/TaskListNumber"
import TaskList from "../TaskList/TaskList"
import { UserAuth } from "../../Context/UserLoginProvider"
import { useSelector } from "react-redux"

const EmployeeDashBoard = () => {
  return (
    <div className="p-10  min-h-screen max-w-screen-xl mx-auto">
      <Header />
      <TaskListNumber />
      <TaskList />
    </div>
  )
}

export default EmployeeDashBoard
