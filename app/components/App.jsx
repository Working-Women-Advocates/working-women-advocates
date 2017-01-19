import React, { Component } from 'react';
import Nav from './Nav';
import Drawer from './Drawer';
import Footer from './Footer';

export default ({ children }) => (
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <Nav />
    <Drawer />
    { children }
    <Footer />
  </div>
);
