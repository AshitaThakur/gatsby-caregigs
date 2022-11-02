import React from "react"
import professionals_image11 from "../../common/assets/Images/images_professional/exam_professional/professionals_image11.png"
import professionals_image22 from "../../common/assets/Images/images_professional/exam_professional/professionals_image22.png"
import professionals_image33 from "../../common/assets/Images/images_professional/exam_professional/professionals_image33.png"

function Professional_section3() {
  return (
    <section>
      <div class="exam_main">
        <p class="exam_para">Prepare For Exams</p>
        <div class="examImages">
          <div
            class="exam_Img1"
            style={{ backgroundImage: `url(${professionals_image11})` }}
          ></div>
          <div
            class="exam_Img2"
            style={{ backgroundImage: `url(${professionals_image22})` }}
          ></div>
          <div
            class="exam_Img3"
            style={{ backgroundImage: `url(${professionals_image33})` }}
          ></div>
        </div>
      </div>
    </section>
  )
}

export default Professional_section3
