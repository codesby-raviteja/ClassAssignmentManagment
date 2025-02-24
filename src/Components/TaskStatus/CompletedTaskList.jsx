import React from "react"
import CompletedTask from "../others/CompletedTask"

function CompletedTaskList({ data }) {
  const filteredTask = data?.tasks?.filter((task) => task.completed)
  return (
    <div className="flex gap-5 min-h-48 mt-2 overflow-y-auto py-2 custom-scroll-bar">
      {filteredTask.length > 0 ? (
        filteredTask.map((task, idx) => (
          <CompletedTask key={idx} taskItem={task} />
        ))
      ) : (
        <h3 className=" text-2xl font-medium mx-auto mt-4 ">No Compledted Tasks</h3>
      )}
    </div>
  )
}

export default CompletedTaskList
