import React, { useContext, useRef } from "react"
import { UserAuth } from "../../Context/UserLoginProvider"
import {
  fetchStudentData,
  updatesupabaseTask,
} from "../../Context/DatabaseMangement"
import { useDispatch, useSelector } from "react-redux"
import { addStudent } from "../../Store/StudentSlice"
import { uploadPDF } from "../../Context/StorageMangement"

export default function PendingTask({ taskItem, studentId }) {
  const loggedInUser = useSelector((state) => state.loginDetails)[0]
  const studentFetchedData = useSelector((state) => state.students)[0]
  const dispatch = useDispatch(loggedInUser)

  const inputRef = useRef()

  const markAsCompleted = async (id) => {
    if (inputRef.current.files.length !== 0) {
      if (
        confirm(
          "Make sure you are uploading correct documents, Because once you Submit the Assignment you cannot update or Delete it !! Do you wanna proceed ?"
        )
      ) {
        const newUpdatedTaskData = studentFetchedData.studentData.tasks.map(
          (task) => {
            if (task.taskId === id) {
              return { ...task, completed: !task.completed }
            }
            return task
          }
        )

        const updatedStudentData = {
          ...studentFetchedData.studentData,
          tasks: newUpdatedTaskData,
        }

        await updatesupabaseTask(updatedStudentData.id, updatedStudentData) // Updating the task in Database and waiting untill it is finished
        uploadPDF(updatedStudentData.id, id, inputRef.current.files[0])

        const { data } = await fetchStudentData({
          // fetching the updated Data from Database and so mantain updated UI
          id: loggedInUser.sub,
          role: loggedInUser.role,
        })
        dispatch(addStudent(data[0]))
      }
    } else {
      alert("Please upload Assignment file")
    }
  }

  return (
    <div className="min-h-full w-[300px] bg-red-400 p-5 flex-shrink-0 rounded-xl flex flex-col justify-between ">
      <div className="flex justify-between items-center">
        <h3 className="bg-blue-600/90 px-3 py-1 rounded ">
          {taskItem?.category}
        </h3>
        <h4> {taskItem?.date} </h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{taskItem?.taskTitle}</h2>
      <p className="text-lg mt-2">{taskItem?.taskDescription}</p>
      <input
        type="file"
        className="w-full bg-gray-400 py-2 px-2"
        ref={inputRef}
      />
      <button
        className="py-2 mt-4  px-6 bg-green-500  block mx-auto text-center font-medium text-lg rounded-md"
        onClick={() => markAsCompleted(taskItem?.taskId)}
      >
        Mark as Completed
      </button>
    </div>
  )
}
