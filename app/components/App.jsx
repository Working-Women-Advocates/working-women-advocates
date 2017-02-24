import React from 'react'
import { connect } from 'react-redux'

import Nav from './Nav'
import Drawer from './Drawer'
import Footer from './Footer'

/* ----------------- COMPONENT ------------------ */

const App = props => {
  const loggedin = props.auth
  return (
    <div className={`${loggedin ? 'logged-out mdl-layout--fixed-header' : 'logged-in restaurant-woman'} mdl-layout mdl-js-layout`}>
      <Nav />
      <Drawer />
      { props.children }
      <Footer />
    </div>
  )
}

/* ----------------- CONTAINER ------------------ */

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(App)
