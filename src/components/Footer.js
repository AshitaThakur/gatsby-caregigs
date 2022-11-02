import React from "react"
import logo_img from "../common/assets/Images/Images_home/logo_home/logo.svg"
import { Link } from "gatsby"

function Footer() {
  return (
    <footer>
      <div class="footerMain">
        <div class="footerMainleft">
          <div class="logo">
            <img src={logo_img}></img>
          </div>
          <div class="logoPara1">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
          </div>
          <div class="company">
            <p>Company</p>
          </div>
        </div>
        <div class="footerMainRight">
          <div class="logoPara2">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div class="search-container_footer">
            <form class="form-box_footer" action="#">
              <input
                class="form-box_footer_input"
                type="text"
                name="emailAddress"
                placeholder="Search here.."
              ></input>
              <button
                class="form-box_footer_button"
                type="submit"
                value="Search"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="footerMid">
        <nav class="footerNav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link to="#">Educator</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link to="/student">Student</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link to="/professional">Professional</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link to="#">Recruiter</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link to="#">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="copyright">
        <p class="copyrightPara">@Caregigs all rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
