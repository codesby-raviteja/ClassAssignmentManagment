import React from "react"

function AssigmentsSubmitted({ taskItem, studentId }) {
  return (
    <div className="min-h-64 flex flex-col justify-between w-[300px] bg-green-400/70 p-5 flex-shrink-0 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 rounded "> {taskItem?.category}</h3>
        <h4> {taskItem?.date} </h4>
      </div>

      <div>
        <h2 className="mt-5 text-2xl font-semibold">{taskItem?.taskTitle}</h2>
        <p className="text-sm mt-2 line-clamp-3">{taskItem?.taskDescription}</p>
      </div>
      <a
        target="_blank"
        href={`https://sdrkbfmgungphphqdvnd.supabase.co/storage/v1/object/public/Assignments/${studentId}/${taskItem?.taskId}`}
        className="py-2 my  px-4 bg-yellow-300 mt-5 block text-center font-medium text-lg rounded-md text-gray-700"
      >
        View Assignment PDF
      </a>
    </div>
  )
}

export default AssigmentsSubmitted
