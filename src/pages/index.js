import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/homePage/Hero"
import Home_Section1 from "../components/homePage/Home_Section1"
import Home_section2 from "../components/homePage/Home_section2"
import Home_section3 from "../components/homePage/Home_section3"
import Home_section4 from "../components/homePage/Home_section4"
import Home_Section5 from "../components/homePage/Home_Section5"
import Home_Section6 from "../components/homePage/Home_Section6"
import Home_section7 from "../components/homePage/Home_section7"
export default function Home() {
  return (
    <Layout>
      <Hero />
      <Home_Section1 />
      <Home_section2 />
      <Home_section3 />
      <Home_section4 />
      <Home_Section5 />
      <Home_Section6 />
      {/* <Home_section7 /> */}
    </Layout>
  )
}
