import React from "react"
import testimonial_img2 from "../../common/assets/Images/Images_home/testimonial_home/testimonial_img2.svg"
import testimonial_img3 from "../../common/assets/Images/Images_home/testimonial_home/testimonial_img3.svg"

function Home_Section5() {
  return (
    <div class="testimonialMain">
      <div class="testimonialMain_header">
        <h3>Testimonials</h3>
      </div>
      <div class="card_Main">
        <div class="card">
          <div class="profile_topbar">
            <img src={testimonial_img2} />
          </div>
          <div class="profile mainarea">
            <p class="profile_body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <a class="profile_link" href="#">
              Read More
            </a>
          </div>
        </div>
        <div class="card">
          <div class="profile_topbar">
            <img src={testimonial_img2} />
          </div>
          <div class="profile mainarea">
            <p class="profile_body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <a class="profile_link" href="#">
              Read More
            </a>
          </div>
        </div>
        <div class="card">
          <div class="profile_topbar">
            <img src={testimonial_img3} />
          </div>
          <div class="profile mainarea">
            <p class="profile_body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <a class="profile_link" href="#">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home_Section5
