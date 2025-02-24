import React from "react"

export default function TaskItem({ taskItem }) {
  return (
    <div className="h-full w-[300px] bg-green-400 p-5 flex-shrink-0 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 rounded "> High</h3>
        <h4> {taskItem?.taskDate} </h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{taskItem?.taskTitle}</h2>
      <p className="text-sm mt-2">{taskItem?.taskDescription}</p>
    </div>
  )
}
