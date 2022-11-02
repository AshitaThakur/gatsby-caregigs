import React from "react"
import UK from "../../common/assets/Images/images_student/banner_student/UK.png"
import india from "../../common/assets/Images/images_student/banner_student/india.png"
import abroad from "../../common/assets/Images/images_student/banner_student/abroad.png"

function Student_Hero() {
  return (
    <div class="student_header_image">
      <div class="image1" style={{ backgroundImage: `url(${UK})` }}></div>
      <div class="image2" style={{ backgroundImage: `url(${india})` }}></div>
      <div class="image3" style={{ backgroundImage: `url(${abroad})` }}></div>
    </div>
  )
}

export default Student_Hero
