import { supabase } from "../../supabaseConfig"

export const addNewStudent = async ({ id, name, role }) => {
  try {
    const { data, error } = await supabase.from("students").insert([
      {
        studentId: id,
        studentData: {
          name,
          id: id,
          tasks: [],
        },
      },
    ])
    if (error) {
      throw error
    } else {
      const { data, error } = await fetchStudentData({ id, role })
      return data
    }
  } catch (error) {
    console.log(error)
  }
}

export const fetchStudentData = async ({ id, role }) => {
  if (role === "student") {
    const { data, error } = await supabase
      .from("students")
      .select()
      .eq("studentId", id)
    if (error) {
      console.log(error)
    } else {
      return { data, error }
    }
  } else {
    const { data, error } = await supabase.from("students").select("*")
    if (error) {
      console.log(error)
    } else {
      return { data, error }
    }
  }
}

export const updatesupabaseTask = async (id, studentData) => {
  try {
    const { data, error } = await supabase
      .from("students")
      .update({ studentData: studentData })
      .eq("studentId", id)
    if (error) {
      throw error
    } else {
      console.log(data)
    }
  } catch (err) {
    console.log(err)
  }
}
