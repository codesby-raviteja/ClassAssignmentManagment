import React from "react"
import { uploadPDF } from "../../Context/StorageMangement"

export default function CompletedTask({ taskItem }) {
  return (
    <div className="min-h-full flex flex-col justify-between  w-[300px] bg-red-300 p-5 flex-shrink-0 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 rounded "> {taskItem?.category}</h3>
        <h4> {taskItem?.date} </h4>
      </div>
      <div>
        <h2 className="mt-5 text-2xl font-semibold">{taskItem?.taskTitle}</h2>
        <p className="text-sm mt-2  line-clamp-3">
          {taskItem?.taskDescription}
        </p>
      </div>

      <span className="py-2 my  px-4 bg-blue-400 mt-5 block text-center font-medium text-lg rounded-md">
        Completed
      </span>
    </div>
  )
}
