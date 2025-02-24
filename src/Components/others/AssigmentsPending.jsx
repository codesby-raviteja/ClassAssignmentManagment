import React from "react"

function AssigmentsPending({ taskItem }) {
  return (
    <div className="min-h-52 w-[300px] bg-red-400 p-5 flex-shrink-0 rounded-xl flex flex-col justify-between ">
      <div className="flex justify-between items-center">
        <h3 className="bg-blue-600/90 px-3 py-1 rounded ">
          {taskItem?.category}
        </h3>
        <h4> {taskItem?.date} </h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{taskItem?.taskTitle}</h2>
      <p className="text-lg mt-2">{taskItem?.taskDescription}</p>
    </div>
  )
}

export default AssigmentsPending
