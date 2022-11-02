import React from "react"
import globe from "../../common/assets/Images/Images_home/globe_home/globe.png"

function Home_section4() {
  return (
    <div class="slider_globe_main1">
      <div class="slider_globe">
        <div class="slides_globe">
          {/* <!-- ---radio button start------> */}
          <input type="radio" name="radio-btn" id="radio1"></input>
          <input type="radio" name="radio-btn" id="radio2"></input>
          <input type="radio" name="radio-btn" id="radio3"></input>
          {/* <!-- -------radio button ends--- --> */}
          {/* <!-- slide image start------ --> */}

          <div class="slide first">
            <div class="icon_glob_outer">
              <div class="icon_section1 icon_section11">
                <div class="iconInside iconInside1 ">
                  <p class="iconInside_para iconInside_para1">34,000</p>

                  <p class="iconInside_para iconInside_para2">Students</p>
                </div>
                <div class="iconInside iconInside1">
                  <p class="iconInside_para iconInside_para1">16,999</p>

                  <p class="iconInside_para iconInside_para2">Employees</p>
                </div>
                <div class="iconInside iconInside1">
                  <p class="iconInside_para iconInside_para1">49</p>

                  <p class="iconInside_para iconInside_para2">Top Countries</p>
                </div>
                <div class="iconInside iconInside1">
                  <p class="iconInside_para iconInside_para1">55,000</p>

                  <p class="iconInside_para iconInside_para2">Jobs</p>
                </div>
              </div>
              <div class="globeRight">
                <img class="globeRight_image" src={globe} />
              </div>
            </div>
          </div>

          <div class="slide">
            <div class="icon_glob_outer">
              <div class="icon_section1 icon_section11">
                <div class="iconInside iconInside1 ">
                  <p class="iconInside_para iconInside_para1">34,000</p>

                  <p class="iconInside_para iconInside_para2">Students</p>
                </div>
                <div class="iconInside iconInside1">
                  <p class="iconInside_para iconInside_para1">16,999</p>

                  <p class="iconInside_para iconInside_para2">Employees</p>
                </div>
                <div class="iconInside iconInside1">
                  <p class="iconInside_para iconInside_para1">49</p>

                  <p class="iconInside_para iconInside_para2">Top Countries</p>
                </div>
                <div class="iconInside iconInside1">
                  <p class="iconInside_para iconInside_para1">55,000</p>

                  <p class="iconInside_para iconInside_para2">Jobs</p>
                </div>
              </div>

              <div class="globeRight">
                <img class="globeRight_image" src={globe} />
              </div>
            </div>
          </div>

          <div class="slide">
            <div class="icon_glob_outer">
              <div class="icon_section1 icon_section11">
                <div class="iconInside iconInside1 ">
                  <p class="iconInside_para iconInside_para1">34,000</p>

                  <p class="iconInside_para iconInside_para2">Students</p>
                </div>
                <div class="iconInside iconInside1">
                  <p class="iconInside_para iconInside_para1">16,999</p>

                  <p class="iconInside_para iconInside_para2">Employees</p>
                </div>
                <div class="iconInside iconInside1">
                  <p class="iconInside_para iconInside_para1">49</p>

                  <p class="iconInside_para iconInside_para2">Top Countries</p>
                </div>
                <div class="iconInside iconInside1">
                  <p class="iconInside_para iconInside_para1">55,000</p>

                  <p class="iconInside_para iconInside_para2">Jobs</p>
                </div>
              </div>

              <div class="globeRight">
                <img class="globeRight_image" src={globe} />
              </div>
            </div>
          </div>
          {/* <!-- -----automatic navigation start------ --> */}
          <div class="navigation-auto">
            <div class="auto-btn1"></div>
            <div class="auto-btn2"></div>
            <div class="auto-btn3"></div>
          </div>
          {/* <!-- -----automatic navigation end------ --> */}
          {/* <!-- manual navigation start------ --> */}
          <div class="navigation-manual">
            <label for="radio1" class="manual-btn"></label>
            <label for="radio2" class="manual-btn"></label>
            <label for="radio3" class="manual-btn"></label>
          </div>
          {/* <!-- manual navigation end ------ --> */}
        </div>
      </div>
    </div>
  )
}

export default Home_section4
