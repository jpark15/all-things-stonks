import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import classes from './Layout.module.css';
import Toolbar from '../../navigation/Toolbar/Toolbar';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  render () {
    return (
      <Aux>
        <Toolbar/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
};

export default Layout;
