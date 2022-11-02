import React from "react"
import Layout from "../components/Layout"
import ProfessionalHero from "../components/professionalPage/ProfessionalHero"
import Professional_section1 from "../components/professionalPage/Professional_section1"
import Professional_section2 from "../components/professionalPage/Professional_section2"
import Professional_section3 from "../components/professionalPage/Professional_section3"
import Professional_section4 from "../components/professionalPage/Professional_section4"
import Student_Section4 from "../components/studentPage/Student_Section4"

function professional() {
  return (
    <Layout>
      <ProfessionalHero />
      <Professional_section1 />
      <Professional_section2 /> 
      <Professional_section3 />
      <Student_Section4 />
      {/* <Professional_section4 /> */}
    </Layout>
  )
}

export default professional
