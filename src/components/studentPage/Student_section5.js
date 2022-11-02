import React from "react"
import question from "../../common/assets/Images/images_student/common_student/question.png"

function Student_section5() {
  return (
    <section>
      <div class="questionaries">
        <div class="img" style={{ backgroundImage: `url(${question})` }}></div>
        <div class="para">
          <p class="para1">Have Questions?</p>
          <p class="para2">
            Schedule a Free Counselling Session with our Expert
          </p>
        </div>
        <div class="btn">
          <a href="#" class="button3">
            Schedule Call
          </a>
        </div>
      </div>
    </section>
  )
}

export default Student_section5
