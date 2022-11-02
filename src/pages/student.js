import React from "react"
import Layout from "../components/Layout"
import Student_Hero from "../components/studentPage/Student_Hero"
import Student_Section1 from "../components/studentPage/Student_Section1"
import Student_Section2 from "../components/studentPage/Student_Section2"
import Student_section3 from "../components/studentPage/Student_section3"
import Student_Section4 from "../components/studentPage/Student_Section4"
import Student_section5 from "../components/studentPage/Student_section5"

function Student() {
  return (
    <Layout>
      <Student_Hero />
      <Student_Section1 />
      <Student_Section2 />
      <Student_section3 />
      <Student_Section4 />
      <Student_section5 />
    </Layout>
  )
}

export default Student
