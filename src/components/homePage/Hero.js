import React from "react"
import Nurse_Image from "../../common/assets/Images/Images_home/banner_home/hero-ban-nurse2.png"
function Hero() {
  return (
    <div>
      <div class="wrapper">
        <section class="hero_section">
          <div class="image">
            <img src={Nurse_Image}></img>
          </div>
          <div class="search-container">
            <form class="form-box" action="#">
              <div className="form-box">
                <input
                  type="text"
                  name="emailAddress"
                  placeholder="Search here.."
                ></input>
                <button type="submit" value="Search">
                  Search
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <section class="wrapper11">
        <h2>A Platform that supports Healthcare System End to End</h2>
        <div class="btnMain input22">
          <a href="#" class="button2">
            Student
          </a>
          <a href="#" class="button2">
            Professional
          </a>
          <a href="#" class="button2">
            Educator
          </a>
          <a href="#" class="button2">
            Recruiter
          </a>
        </div>
      </section>
    </div>
  )
}

export default Hero
