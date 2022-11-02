import React from "react"
import googleicon from "../../common/assets/Images/Images_home/icons_home/googleicon.svg"

import appStore from "../../common/assets/Images/Images_home/icons_home/appStore.svg"
import app_image from "../../common/assets/Images/Images_home/common_images/appImage.png"

function Home_Section6() {
  return (
    <div class="appStoreMain">
      <div class="appStoreLeft"></div>
      <div class="appStoreRight">
        <div class="appStoreImage">
          <img src={app_image} className="app_image " />
        </div>
        <div class="appStrorePara">
          <p class="appStoreHeading">For better experience download our app</p>
          <p class="appStorePara">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <div class="appIcon">
            <span class="googleIcon">
              <a href="#">
                <img src={googleicon} />
              </a>
            </span>
            <span class="appStoreIcon">
              <a href="#">
                <img src={appStore} />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home_Section6
