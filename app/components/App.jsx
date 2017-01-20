import React, { Component } from 'react';
import Nav from './Nav';
import Drawer from './Drawer';
import Footer from './Footer';

export default ({ children }) => (
  // <div className={`${ loggedin ? "" : "restaurant-woman"} mdl-layout mdl-js-layout`}>
  <div className="restaurant-woman mdl-layout mdl-js-layout">
    <Nav />
    <Drawer />
    { children }
    <Footer />
  </div>
);
