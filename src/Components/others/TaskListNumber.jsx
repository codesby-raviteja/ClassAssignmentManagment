import React from "react"
import { useSelector } from "react-redux"

const TaskListNumber = () => {
  const studentData = useSelector((state) => state.students)
  const data = studentData[0].studentData
  return (
    <div className="flex mt-10 justify-between gap-5 ">
      <div className=" rounded-xl w-[45%] py-6 px-9 bg-red-400">
        <h2 className="text-2xl font-semibold">
          {data?.tasks?.filter((task) => !task.completed).length}
        </h2>
        <h2 className="text-xl font-medium">Pending Tasks</h2>
      </div>
      <div className=" rounded-xl w-[45%] py-6 px-9 bg-blue-400">
        <h2 className="text-2xl font-semibold">
          {data?.tasks?.filter((task) => task.completed).length}
        </h2>
        <h2 className="text-xl font-medium">Completed Tasks</h2>
      </div>
      <div className=" rounded-xl w-[45%] py-6 px-9 bg-green-400">
        <h2 className="text-2xl font-semibold">{data?.tasks?.length}</h2>
        <h2 className="text-xl font-medium">Tasks Assigned</h2>
      </div>
    </div>
  )
}

export default TaskListNumber
