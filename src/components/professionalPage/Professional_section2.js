import React from "react"
import professionals_image2 from "../../common/assets/Images/images_professional/carosal_professional/professionals_image2.png"

function Professional_section2() {
  return (
    <div class="sliderb11">
      <div class="slidesb11">
        {/* <!-- radio button start------ --> */}
        <input type="radio" name="radio-btnb1" id="radiob11"></input>
        <input type="radio" name="radio-btnb1" id="radiob22"></input>
        <input type="radio" name="radio-btnb1" id="radiob33"></input>
        {/* <!-- radio button ends--- --> */}
        {/* <!-- slide image start------ --> */}
        <div class="slideb1 firstb1">
          <div class="main_insideb1">
            <div class="main_insideb1_left">
              <img src={professionals_image2} />
            </div>
            <div class="main_insideb1_right">
              <div class="right_contentb">
                <p class="main_inside1_right_parab1">Lorem Ipsum</p>
                <p class="main_inside1_right_parab2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </p>
                <div class="btn btnS3 btn4">
                  <a href="#" class="button_3 ">
                    Find Jobs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="slideb1">
          <div class="main_insideb1">
            <div class="main_insideb1_left">
              <img src={professionals_image2} />
            </div>
            <div class="main_insideb1_right">
              <div class="right_contentb">
                <p class="main_inside1_right_parab1">Lorem Ipsum</p>
                <p class="main_inside1_right_parab2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </p>
                <div class="btn btnS3 btn4">
                  <a href="#" class="button_3 ">
                    Find Jobs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="slideb1">
          <div class="main_insideb1">
            <div class="main_insideb1_left">
              <img src={professionals_image2} />
            </div>
            <div class="main_insideb1_right">
              <div class="right_contentb">
                <p class="main_inside1_right_parab1">Lorem Ipsum</p>
                <p class="main_inside1_right_parab2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </p>
                <div class="btn btnS3 btn4">
                  <a href="#" class="button_3 ">
                    Find Jobs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- slider image ends----- --> */}

        {/* <!-- manual naviigation start--- --> */}
        <div class="navigation-manuabl1">
          <label for="radiob11" class="manual-btnb1"></label>
          <label for="radiob22" class="manual-btnb1"></label>
          <label for="radiob33" class="manual-btnb1"></label>
        </div>
        {/* <!-- manual naviigation end --> */}
      </div>
    </div>
  )
}

export default Professional_section2
