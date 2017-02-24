import React from 'react'
import { connect } from 'react-redux'

import NavContainer from '../containers/NavContainer'
import DrawerContainer from '../containers/DrawerContainer'
import Footer from './Footer'

/* ----------------- COMPONENT ------------------ */

const App = props => {
  const loggedin = props.auth
  return (
    <div className={`${loggedin ? 'logged-out mdl-layout--fixed-header' : 'logged-in restaurant-woman'} mdl-layout mdl-js-layout`}>
      <NavContainer />
      <DrawerContainer />
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
