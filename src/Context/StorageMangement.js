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

