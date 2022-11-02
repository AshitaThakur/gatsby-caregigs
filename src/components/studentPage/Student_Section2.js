import React from "react"
import learningPath from "../../common/assets/Images/images_student/banner_student/learningPath.png"
import { IoMdArrowDropdown } from "react-icons/io"
function Student_Section2() {
  return (
    <section class="learning_path">
      <div
        class="lerning_path_image"
        style={{ backgroundImage: `url(${learningPath})` }}
      ></div>
      <div class="learning_path_inside">
        <p class="learning_path_inside_para">Customise your learning path</p>
        <div class="learning_path_option_main">
          <div class="dropdown_bar">
            <div class="dropdown">
              <button class="dropbtn">
                I'm..
                <span class="dropdown_icon">
                  <IoMdArrowDropdown />
                </span>
              </button>
              <div class="dropdown_content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </div>

          <div class="dropdown_bar dropdown_im">
            <div class="dropdown">
              <button class="dropbtn">
                From
                <span class="dropdown_icon">
                  <IoMdArrowDropdown />
                </span>
              </button>
              <div class="dropdown_content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </div>

          <div class="dropdown_bar">
            <div class="dropdown">
              <button class="dropbtn">
                Looking for
                <span class="dropdown_icon">
                  <IoMdArrowDropdown />
                </span>
              </button>
              <div class="dropdown_content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </div>

          <div class="dropdown_bar dropdown_im">
            <div class="dropdown">
              <button class="dropbtn">
                In
                <span class="dropdown_icon _icon_in">
                  <IoMdArrowDropdown />
                </span>
              </button>
              <div class="dropdown_content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Student_Section2
