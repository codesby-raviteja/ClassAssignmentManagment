import { supabase } from "../../supabaseConfig"

export const uploadPDF = async (studentId, taskId, file) => {
  const { data, error } = await supabase.storage
    .from("Assignments")
    .upload(studentId + "/" + taskId, file)
  if (error) {
    throw error
  } else {
    console.log(data)
  }
}

export const listFiles = async () => {
  const { data, error } = await supabase.storage
    .from("Assignments")
    .list(id + "/", {
      limit: 100,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    })
  if (error) {
    throw error
  } else {
    console.log(data)
  }
}
