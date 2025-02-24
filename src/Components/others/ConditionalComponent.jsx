import React from "react"
import AdminDashboard from "../Dashboard/AdminDashboard"
import EmployeeDashBoard from "../Dashboard/EmployeeDashBoard"
import { useSelector } from "react-redux"

export default function ConditionalComponent() {
  const loggedInUser = useSelector((state) => state.loginDetails)

  return loggedInUser[0].role == "admin" ? (
    <AdminDashboard />
  ) : (
    <EmployeeDashBoard />
  )
}
