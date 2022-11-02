import React from "react"
import { Link } from "gatsby"
import logo_img from "../common/assets/Images/Images_home/logo_home/logo.svg"

function Navbar() {
  return (
    <nav>
      <div class="logo">
        <img src={logo_img}></img>
      </div>
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

      <ul>
        <li>
          <Link to="#" class="btn small">
            Log In
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
