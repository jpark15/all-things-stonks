import React, { Component } from 'react';

import classes from './CurrentPosition.module.css';

class CurrentPosition extends Component {
  render () {
    let currentPosition = null
    if (this.props.equity !== null) {
      currentPosition = <p>
        Total Equity: $<strong>
          {this.props.equity}
        </strong>
      </p>
    }

    return (
      <div className={classes.Position}>
        <h2>Current Position</h2>
        <label>Number of Shares:</label>
        <input
          name="numberOfShares"
          type="text"
          onChange={(event) => this.props.changeHandler(event)}
          value={this.props.numberOfShares} />
        <label>Average Cost:</label>
        <input
          name="averageCost"
          type="text"
          onChange={(event) => this.props.changeHandler(event)}
          value={this.props.averageCost} />
        {currentPosition}
      </div>
    );
  }
}

export default CurrentPosition;
