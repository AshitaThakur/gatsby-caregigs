import React from "react"
import luggage from "../../common/assets/Images/images_student/icon_students/luggage.svg"
import verticle_line from "../../common/assets/Images/images_student/icon_students/vertical_line.svg"
import dollar from "../../common/assets/Images/images_student/icon_students/dollar-sign.svg"
import globe from "../../common/assets/Images/images_student/icon_students/globe.svg"
import mappin from "../../common/assets/Images/images_student/icon_students/map-pin.svg"

function Student_Section1() {
  return (
    <section class="choose_destination">
      <div class="icon_section2">
        <div class="icon_section2_inside">
          <img src={luggage} />

          <p class="icon_section2_inside_para">1 lakh + Nursing Jobs</p>
        </div>
        <div class="icon_section2_inside verticle_line">
          <img src={verticle_line} />
        </div>
        <div class="icon_section2_inside">
          <img src={dollar} />
          <p class="icon_section2_inside_para">Highly paid</p>
        </div>
        <div class="icon_section2_inside verticle_line">
          <img src={verticle_line} />
        </div>
        <div class="icon_section2_inside">
          <img src={globe} />

          <p class="icon_section2_inside_para">High demand across the world </p>
        </div>
        <div class="icon_section2_inside verticle_line">
          <img src={verticle_line} />
        </div>
        <div class="icon_section2_inside">
          <img src={mappin} />

          <p class="icon_section2_inside_para">Travel the world as a Travel</p>
        </div>
      </div>

      <div class="choose_destination_btn">
        <a href="#" class="button2">
          Choose Your Dream Destination
        </a>
      </div>
    </section>
  )
}

export default Student_Section1
