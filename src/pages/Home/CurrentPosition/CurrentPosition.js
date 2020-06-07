import React, { Component } from 'react';

import classes from './CurrentPosition.module.css';
import CurrentPositionForm from './CurrentPositionForm/CurrentPositionForm';
import PositionData from './PositionData/PositionData';

class CurrentPosition extends Component {
  render () {
    return (
      <div className={classes.Position}>
        <h2>Current Position</h2>
        <div id="outer" className={classes.container}>
          <div id="left" className={classes.form}>
            <CurrentPositionForm
              changeHandler={this.props.changeHandler}
              position={this.props.position}/>
          </div>
          <div id="right" className={classes.data}>
            <PositionData position={this.props.position}/>
          </div>
        </div>
        <button onClick={(event) => this.props.clearHandler(event, 'position')}>
          Reset
        </button>
      </div>
    );
  }
}

export default CurrentPosition;
