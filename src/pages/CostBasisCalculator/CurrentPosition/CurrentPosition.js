import React, { Component } from 'react';

import classes from './CurrentPosition.module.css';

class CurrentPosition extends Component {
  calculateEquity = () => {
    let equity = null;
    if (this.props.numberOfShares !== '' && this.props.averageCost !== '') {
      equity = (Number(this.props.numberOfShares) * Number(this.props.averageCost)).toFixed(2);
    }
    return equity;
  }

  render () {
    let currentPosition = null;
    const equity = this.calculateEquity();
    if (equity !== null) {
      currentPosition = <p>
        Total Equity: $<strong>
          {equity}
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
