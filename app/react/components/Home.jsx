import React from 'react'
import Landing from './Landing'
import AboutUs from './AboutUs'
import NavBar from './NavBar'
import Team from './Team'
import Services from './Services'
import GetInvolved from './GetInvolved'
import Contact from './Contact'
import Footer from './Footer'


export default () => {
  return (
    <main>
      <div>
        <NavBar />
        <Landing />
        <AboutUs />
        <Team />
        <Services />
        <GetInvolved />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
