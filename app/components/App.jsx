import React, { Component } from 'react';
import NavContainer from '../containers/NavContainer';
import DrawerContainer from '../containers/DrawerContainer';
import Footer from './Footer';

export default (props) => {
  const loggedin = props.auth;
  return (
    <div className={`${ loggedin ? "logged-out mdl-layout--fixed-header" : "logged-in restaurant-woman"} mdl-layout mdl-js-layout`}>
      <NavContainer />
      <DrawerContainer />
      { props.children }
      <Footer />
    </div>
)}
