import React, { Component } from 'react';
import NavContainer from '../containers/NavContainer';
import DrawerContainer from '../containers/DrawerContainer';
import Footer from './Footer';

export default (props) => {
  // const loggedin = props.auth;
  // <div className="restaurant-woman mdl-layout mdl-js-layout">
  console.log('props', props)
  const loggedin = props.auth;
  return (
    <div className={`${ loggedin ? "mdl-layout--fixed-header" : "restaurant-woman"} mdl-layout mdl-js-layout`}>
      <NavContainer />
      <DrawerContainer />
      { props.children }
      <Footer />
    </div>
)}
