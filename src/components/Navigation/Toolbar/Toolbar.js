import React from 'react';

import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
  <div className={classes.Toolbar}>
    <div className={classes.SideMenu}>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div>Stonks!</div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </div>
);

export default toolbar;
