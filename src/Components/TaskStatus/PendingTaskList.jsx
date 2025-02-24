import React from "react"
import PendingTask from "../others/PendingTask"

function PendingTaskList({ data }) {
  const pendingTaskList = data?.tasks?.filter((task) => !task.completed)
  return (
    <div className="flex gap-5 min-h-48 mt-2 overflow-y-auto py-2 custom-scroll-bar">
      {pendingTaskList.length > 0 ? (
        pendingTaskList.map((task) => (
          <PendingTask key={task.taskId} taskItem={task} studentId={data.id} />
        ))
      ) : (
        <h3 className=" text-2xl font-medium mx-auto mt-4 ">
          No Pending Tasks
        </h3>
      )}
    </div>
  )
}

export default PendingTaskList
