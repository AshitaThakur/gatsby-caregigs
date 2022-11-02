import React from "react"
import StudyCourse1 from "../../common/assets/Images/images_student/common_student/StudyCourse1.png"
import paybtn from "../../common/assets/Images/images_student/common_student/paybtn.png"
import mentor1 from "../../common/assets/Images/images_student/common_student/mentor1.png"
import mentor2 from "../../common/assets/Images/images_student/common_student/mentor2.png"
import StudyCourse2 from "../../common/assets/Images/images_student/common_student/StudyCourse2.png"
import StudyCourse3 from "../../common/assets/Images/images_student/common_student/StudyCourse3.png"

function Student_section3() {
  return (
    <div>
      <section class="popular_courses">
        <div class="popular_courses_inside">
          <p>Study from Popular Courses</p>
        </div>
        <div class="img_main">
          <div
            class="img1"
            style={{ backgroundImage: `url(${StudyCourse1})` }}
          ></div>
          <div
            class="img2"
            style={{ backgroundImage: `url(${StudyCourse2})` }}
          ></div>
          <div
            class="img3"
            style={{ backgroundImage: `url(${StudyCourse3})` }}
          ></div>
        </div>
      </section>
      {/* <!-- -----------------------------End --> */}
      <section class="popular_courses2">
        <div class="popular_courses_inside2">
          <p>Connect & Learn from Mentors</p>
        </div>
        <div class="img_main_video">
          <div
            class="video_img1"
            style={{ backgroundImage: `url(${mentor1})` }}
          >
            <img src={paybtn} />
          </div>
          <div
            class="video_img2"
            style={{ backgroundImage: `url(${mentor2})` }}
          >
            <img src={paybtn} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Student_section3
