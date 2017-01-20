import React, { Component } from 'react';
import NavContainer from '../containers/NavContainer';
import Drawer from './Drawer';
import Footer from './Footer';

export default ({ children }) => (
  // <div className={`${ loggedin ? "" : "restaurant-woman"} mdl-layout mdl-js-layout`}>
  <div className="restaurant-woman mdl-layout mdl-js-layout">
    <NavContainer />
    <Drawer />
    { children }
    <Footer />
  </div>
);
