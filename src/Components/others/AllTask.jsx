import React from "react"
import { useSelector } from "react-redux"

const AllTask = () => {
  const students = useSelector((state) => state.students)[0]

  const employes =
    students.length && students.map((student) => student?.studentData)



  return (
    <div className="bg-gray-800 relative    mt-5 rounded h-[calc(100vh-500px)]  font-medium  overflow-hidden">
      <div className="bg-blue-400 py-2 px-6 grid grid-cols-4 sticky top-0  rounded">
        <span>Student Name</span>
        <span className="text-center">No of Tasks Assigned</span>
        <span className="text-center">Completed</span>
        <span className="text-right">Pending</span>
      </div>

      <div className="space-y-2 h-full px-1 py-2 overflow-auto">
        {!employes ? (
          <p className="text-xl text-center my-4">No Students Exists </p>
        ) : (
          employes?.map((eachEmploye) => {
            return (
              <div
                key={eachEmploye?.id}
                className="bg-gray-500 py-2 px-6 grid grid-cols-4  font-medium rounded"
              >
                <span>{eachEmploye?.name}</span>
                <span className="text-center">
                  {eachEmploye?.tasks?.length}
                </span>
                <span className="text-center">
                  {eachEmploye?.tasks?.filter((task) => task.completed).length}
                </span>
                <span className="text-right">
                  {eachEmploye?.tasks?.filter((task) => !task.completed).length}
                </span>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default AllTask
