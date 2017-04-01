import React from 'react'
import Landing from './LandingPage/Landing'
import AboutUs from './LandingPage/AboutUs'
import NavBar from './NavBar'
import Team from './LandingPage/Team'
import Allies from './LandingPage/Allies'
import Services from './LandingPage/Services'
import GetInvolved from './LandingPage/GetInvolved'
import Contact from './LandingPage/Contact'
import Footer from './Footer'


export default () => {
  return (
    <main>
      <div>
        <NavBar />
        <Landing />
        <AboutUs />
        <Allies />
        <Team />
        <Services />
        <GetInvolved />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
