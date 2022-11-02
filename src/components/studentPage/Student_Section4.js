import React from "react"
import cardImage1 from "../../common/assets/Images/images_student/card_student/cardImage1.png"
import cardImage2 from "../../common/assets/Images/images_student/card_student/cardImage2.png"
import cardImage3 from "../../common/assets/Images/images_student/card_student/cardImage3.png"

function Student_Section4() {
  return (
    <section>
      {/* <!-- ---------slider start------ --> */}
      <div class="sliderstu">
        <div class="slidesstu">
          {/* <!-- radio button start------ --> */}
          <input type="radio" name="radio-btn" id="radiostu1"></input>
          <input type="radio" name="radio-btn" id="radiostu2"></input>
          <input type="radio" name="radio-btn" id="radiostu3"></input>
          {/* <!-- radio button ends--- --> */}
          {/* <!-- slide image start------ --> */}
          <div class="slidestu first">
            <div class="main_insidestu">
              <div class="main_insidestu_left">
                <div class="cardstu">
                  <img src={cardImage1} />
                  <p class="cardstu_para1">Lorem Ipsum </p>
                  <p class="cardstu_para2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                  </p>
                </div>
                <div class="cardstu">
                  <img src={cardImage2} />
                  <p class="cardstu_para1">Lorem Ipsum </p>
                  <p class="cardstu_para2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                  </p>
                </div>
                <div class="cardstu">
                  <img src={cardImage3} />
                  <p class="cardstu_para1">Lorem Ipsum </p>
                  <p class="cardstu_para2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                  </p>
                </div>
              </div>
              <div class="main_insidestu_right">
                <div class="right_contentstu">
                  <p class="main_insidestu_right_para1">START SELF CARE</p>
                  <p class="main_insidestu_right_para2">
                    Engage in hobbies that keep your mind and body occupied as
                    this will make you feel good amid the pain and ailments that
                    you have to deal with every day.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="slidestu">
            <div class="main_insidestu">
              <div class="main_insidestu_left">
                <div class="cardstu">
                  <img src={cardImage1} />
                  <p class="cardstu_para1">Lorem Ipsum </p>
                  <p class="cardstu_para2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                  </p>
                </div>
                <div class="cardstu">
                  <img src={cardImage1} />
                  <p class="cardstu_para1">Lorem Ipsum </p>
                  <p class="cardstu_para2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                  </p>
                </div>
                <div class="cardstu">
                  <img src={cardImage1} />
                  <p class="cardstu_para1">Lorem Ipsum </p>
                  <p class="cardstu_para2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                  </p>
                </div>
              </div>
              <div class="main_insidestu_right">
                <div class="right_contentstu">
                  <p class="main_insidestu_right_para1">START SELF CARE</p>
                  <p class="main_insidestu_right_para2">
                    Engage in hobbies that keep your mind and body occupied as
                    this will make you feel good amid the pain and ailments that
                    you have to deal with every day.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="slidestu">
            <div class="main_insidestu">
              <div class="main_insidestu_left">
                <div class="cardstu">
                  <img src={cardImage1} />
                  <p class="cardstu_para1">Lorem Ipsum </p>
                  <p class="cardstu_para2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                  </p>
                </div>
                <div class="cardstu">
                  <img src={cardImage1} />
                  <p class="cardstu_para1">Lorem Ipsum </p>
                  <p class="cardstu_para2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                  </p>
                </div>
                <div class="cardstu">
                  <img src={cardImage1} />
                  <p class="cardstu_para1">Lorem Ipsum </p>
                  <p class="cardstu_para2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                  </p>
                </div>
              </div>
              <div class="main_insidestu_right">
                <div class="right_contentstu">
                  <p class="main_insidestu_right_para1">START SELF CARE</p>
                  <p class="main_insidestu_right_para2">
                    Engage in hobbies that keep your mind and body occupied as
                    this will make you feel good amid the pain and ailments that
                    you have to deal with every day.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- slider image ends----- --> */}

          {/* <!-- manual naviigation start--- --> */}
          <div class="navigation-manualstu">
            <label for="radiostu1" class="manual-btnstu"></label>
            <label for="radiostu2" class="manual-btnstu"></label>
            <label for="radiostu3" class="manual-btnstu"></label>
          </div>
          {/* <!-- manual naviigation end --> */}
        </div>
      </div>
      {/* <!-- slider end------ --> */}
    </section>
  )
}

export default Student_Section4
