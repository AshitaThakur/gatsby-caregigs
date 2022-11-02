import React from "react"
import Mac_book from "../../common/assets/Images/Images_home/common_images/macbook.png"
import machine_learning_outlined from "../../common/assets/Images/Images_home/icons_home/eos-icons_machine-learning-outlined.svg"

import learningGroup from "../../common/assets/Images/Images_home/icons_home/learningGroup.svg"
import opportunity from "../../common/assets/Images/Images_home/icons_home/opportunity.svg"
import updates from "../../common/assets/Images/Images_home/icons_home/updates.svg"
import jobs from "../../common/assets/Images/Images_home/icons_home/jobs.svg"
import clarity_connect_solid from "../../common/assets/Images/Images_home/icons_home/clarity_connect-solid.svg"

function Home_section3() {
  return (
    <section class="MacBook_sectionn">
      <div class="MacImage">
        <img src={Mac_book}></img>
      </div>
      <div class="icon_sectionn1">
        <div class="iconInside">
          <img src={machine_learning_outlined}></img>
          <p class="iconInside_para">Personalised Learning Path</p>
        </div>
        <div class="iconInside">
          <img src={learningGroup}></img>
          <p class="iconInside_para_Mcbook iconInside_para">
            Create your own learning group
          </p>
        </div>
        <div class="iconInside">
          <img src={opportunity}></img>
          <p class="iconInside_para_Mcbook iconInside_para">
            Opportunities to teach and earn
          </p>
        </div>
        <div class="iconInside">
          <img src={updates}></img>
          <p class="iconInside_para_Mcbook1 iconInside_para">
            Get latest updates on nursing
          </p>
        </div>
      </div>
      <div class="icon_sectionn2">
        <div class="iconInside iconApply">
          <img src={jobs}></img>
          <p class="iconInside_para_Mcbook iconInside_para">Apply for jobs</p>
        </div>
        <div class="iconInside2 iconInside">
          <img src={clarity_connect_solid}></img>
          <p class="iconInside_para_Mcbook2 iconInside_para">
            Connect with peer
          </p>
        </div>
      </div>
    </section>
  )
}

export default Home_section3
