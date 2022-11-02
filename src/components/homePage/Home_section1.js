import React from "react"
import GirlImage from "../../common/assets/Images/Images_home/carosal_home/girlImage.png"

function Home_Section1() {
  return (
    <div class="slidera11">
      <div class="slidesa11">
        {/*
            <!-- radio button start------ --> */}
        <input type="radio" name="radio-btna1" id="radioa11"></input>
        <input type="radio" name="radio-btna1" id="radioa22"></input>
        <input type="radio" name="radio-btna1" id="radioa33"></input>
        {/*
            <!-- radio button ends--- --> */}
        {/* /
            <!-- slide image start------ --> */}
        <div class="slidea1 firsta1">
          <div class="main_insidea1">
            <div class="main_insidea1_left">
              <img src={GirlImage}></img>
            </div>
            <div class="main_insidea1_right">
              <div class="right_contenta">
                <p class="main_insidea1_right_para1">START SELF CARE</p>
                <p class="main_insidea1_right_para2">
                  Engage in hobbies that keep your mind and body occupied as
                  this will make you feel good amid the pain and ailments that
                  you have to deal with every day.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="slidea1">
          <div class="main_insidea1">
            <div class="main_insidea1_left">
              <img src={GirlImage}></img>
            </div>
            <div class="main_insidea1_right">
              <div class="right_contenta">
                <p class="main_insidea1_right_para1">START SELF CARE</p>
                <p class="main_insidea1_right_para2">
                  Engage in hobbies that keep your mind and body occupied as
                  this will make you feel good amid the pain and ailments that
                  you have to deal with every day.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="slidea1">
          <div class="main_insidea1">
            <div class="main_insidea1_left">
              <img src={GirlImage}></img>
            </div>
            <div class="main_insidea1_right">
              <div class="right_contenta">
                <p class="main_insidea1_right_para1">START SELF CARE</p>
                <p class="main_insidea1_right_para2">
                  Engage in hobbies that keep your mind and body occupied as
                  this will make you feel good amid the pain and ailments that
                  you have to deal with every day.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- slider image ends----- --> */}

        {/*<!-- manual naviigation start--- --> */}
        <div class="navigation-manuaal1">
          <label for="radioa11" class="manual-btna1"></label>
          <label for="radioa22" class="manual-btna1"></label>
          <label for="radioa33" class="manual-btna1"></label>
        </div>
        {/*<!-- manual naviigation end --> */}
      </div>
    </div>
  )
}

export default Home_Section1
