import React, { useState } from "react"
import {
  fetchStudentData,
  updatesupabaseTask,
} from "../../Context/DatabaseMangement"
import { useDispatch, useSelector } from "react-redux"
import { addMultipleStudents } from "../../Store/StudentSlice"

const CreateTask = () => {
  const [formData, setFormData] = useState({
    taskTitle: "",
    date: "",
    category: "",
    taskDescription: "",
  })
  const [assignedTo, setAssignedTo] = useState("")
  const dispatch = useDispatch()
  const loginUserData = useSelector((state) => state.loginDetails)[0]

  const students = useSelector((state) => state.students)[0]

  const employes =
    students.length && students.map((student) => student?.studentData)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newTask = {
      ...formData,
      completed: false,
      taskId: crypto.randomUUID(),
    }

    if (assignedTo === "all") {
      const updatedTaskList = employes.map((student) => {
        const newUpdatedStudentData = { ...student, tasks: [...student.tasks] } // Since the state was coming through redux we cannot directly mutate it
        newUpdatedStudentData.tasks.push(newTask)
        return newUpdatedStudentData
      })

      const data = Promise.all(
        students.map((student, idx) =>
          updatesupabaseTask(student.studentId, updatedTaskList[idx])
        )
      ).then(async () => {
        const { data } = await fetchStudentData({
          id: loginUserData.id,
          role: loginUserData.role,
        })
        dispatch(addMultipleStudents(data))
      })
    } else {
      const updateTheStudentData = employes.filter(
        (student) => student?.id === assignedTo
      )[0]

      const newTaskData = {
        ...updateTheStudentData,
        tasks: [...updateTheStudentData.tasks],
      }
      newTaskData.tasks.push(newTask)

      students.forEach((student) => {
        if (student.studentData.id === newTaskData.id) {
          updatesupabaseTask(student.studentId, newTaskData)
        }
      })

      const { data } = await fetchStudentData({
        id: loginUserData.id,
        role: loginUserData.role,
      })
      dispatch(addMultipleStudents(data))
    }

    setFormData({
      taskTitle: "",
      date: "",
      category: "",
      taskDescription: "",
    })
    setAssignedTo("")
  }

  return (
    <div>
      <form
        className="flex w-full flex-wrap mt-4 p-4  bg-gray-700 witems-start justify-between"
        onSubmit={handleSubmit}
      >
        <div className="w-1/2 text-white">
          <div>
            <h3 className="text-sm tet-gray-300 mb-0.5">Task Title</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded text-white placeholder:text-gray-300 outline-none bg-gray-800 border-[1px] border-gray-400 mb-4"
              type="text"
              value={formData.taskTitle}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, taskTitle: e.target.value }))
              }}
              placeholder="Make a UI Design"
            />
          </div>

          <div className="">
            <h3 className="text-sm tet-gray-300 mb-0.5">Date</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded text-white  outline-none bg-gray-800 border-[1px] border-gray-400 mb-4"
              type="date"
              value={formData.date}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, date: e.target.value }))
              }}
            />
          </div>
          <div className="">
            <h3 className="text-sm  mb-0.5">Asign to</h3>

            <div className="overflow-y-visible ">
              <select
                className="bg-gray-800  border w-4/5 text-sm px-2 py-1 mb-4 rounded  max-h-16 overflow-y-auto"
                name="select"
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)}
              >
                <option value="" hidden className="">
                  Select the student
                </option>
                <option
                  className="bg-gray-600 text-white"
                  id="select"
                  value="all"
                >
                  All Students
                </option>

                {employes &&
                  employes.map((student) => (
                    <option
                      key={student.id}
                      className="bg-gray-600 "
                      value={student.id}
                    >
                      {student.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div>
            <h3 className="text-sm  mb-0.5">Category</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded text-white outline-none placeholder:text-gray-300 bg-gray-800 border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="dedign,  dev, etc"
              value={formData.category}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, category: e.target.value }))
              }}
            />
          </div>
        </div>
        <div className="w-1/2 flex text-white flex-col items-start">
          <h3 className="text-sm  mb-0.5">Description</h3>
          <textarea
            className="w-full flex-1  text-sm py-1 text-white px-4 outline-none bg-gray-800 border-[1px] bordergray-400"
            cols="30"
            rows="10"
            value={formData.taskDescription}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                taskDescription: e.target.value,
              }))
            }}
          ></textarea>
          <button className="bg-emerald-600  py-3 hover:bg-emerald-500 px-5 rounded text-lg mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
