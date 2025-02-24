import React from "react"
import CompletedTaskList from "../TaskStatus/CompletedTaskList"
import PendingTaskList from "../TaskStatus/PendingTaskList"
import { useSelector } from "react-redux"

const TaskList = () => {
  const studentData = useSelector((state) => state.students)
  const data = studentData[0].studentData
  return (
    <div id="tasklist" className="mt-10">
      <div>
        <h2 className="text-2xl font-semibold ">Pending Tasks</h2>
        <PendingTaskList data={data} />
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold ">Completed Tasks</h2>
        <CompletedTaskList data={data} />
      </div>
    </div>
  )
}

export default TaskList
