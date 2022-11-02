import React from "react"
import professionals_image1 from "../../common/assets/Images/images_professional/banner_professional/professionals_image1.png"
import { Link } from "gatsby"

function ProfessionalHero() {
  return (
    <section
      class="main"
      style={{ backgroundImage: `url(${professionals_image1})` }}
    >
      <div>
        <div class="para_main">
          <p class="paraP1">Helping Nurses Find their Dream Job</p>
          <p class="para1 para2">Across World!</p>
          <p class="para3">
            We help you prepare for exams such as NCLEX, IELTS, HAAD, licensing,
            planning accomodation, creating your study plan! Connect with
            millions of nurses across the world, learn and share your
            experiences
          </p>
          <div class="btn btnP3">
            <Link to="#" class="buttonP_3">
              Choose Your Dream Work Location
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfessionalHero
