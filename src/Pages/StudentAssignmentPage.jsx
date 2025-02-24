import React from "react"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import AssigmentsPending from "../Components/others/AssigmentsPending"
import AssigmentsSubmitted from "../Components/others/AssigmentsSubmitted"

function StudentAssignmentPage() {
  const location = useLocation()
  const studentsData = useSelector((state) => state.students)[0]

  const studentData = studentsData.filter(
    (student) => student.studentId === location.state
  )[0].studentData

  const pendingTasks = studentData.tasks.filter((task) => !task.completed)
  const completedTasks = studentData.tasks.filter((task) => task.completed)

  return (
    <div className="h-screen p-10 text-white">
      <h2 className="text-3xl text-center my-10 font-medium ">
        {studentData.name.toUpperCase()} - Assignments
      </h2>
      <div className="my-4">
        <h2 className="text-2xl font-medium ">Pending Assignments</h2>
        <div className="flex gap-5 min-h-48 mt-2 overflow-y-auto py-2 custom-scroll-bar">
          {pendingTasks.length > 0 ? (
            pendingTasks.map((task) => (
              <AssigmentsPending key={task.taskId} taskItem={task} />
            ))
          ) : (
            <h3 className=" text-2xl font-medium mx-auto mt-4 text-red-400 ">
              No Pending Assigments
            </h3>
          )}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-medium ">Completed Assignments</h2>
        <div className="flex gap-5 min-h-48 mt-2 overflow-y-auto py-2 custom-scroll-bar">
          {completedTasks.length > 0 ? (
            completedTasks.map((task) => (
              <AssigmentsSubmitted
                key={task.taskId}
                taskItem={task}
                studentId={location.state}
              />
            ))
          ) : (
            <h3 className=" text-2xl font-medium mx-auto mt-4 text-green-400 ">
              No Completed Assignments
            </h3>
          )}
        </div>
      </div>
    </div>
  )
}

export default StudentAssignmentPage
