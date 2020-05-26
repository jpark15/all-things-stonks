import React, { Component } from 'react';

import classes from './CurrentPosition.module.css';

class CurrentPosition extends Component {
  calculateEquity = () => {
    let equity = null;
    if (this.props.position.numberOfShares !== '' && this.props.position.averageCost !== '') {
      equity = (Number(this.props.position.numberOfShares) * Number(this.props.position.averageCost)).toFixed(2);
    }
    return equity;
  }

  render () {
    let currentPosition = null;
    const equity = this.calculateEquity();
    if (equity !== null) {
      currentPosition = <p>
        Invested Total: $<strong>
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
          onChange={(event) => this.props.changeHandler(event, 'position')}
          value={this.props.position.numberOfShares} />
        <label>Average Cost:</label>
        <input
          name="averageCost"
          type="text"
          onChange={(event) => this.props.changeHandler(event, 'position')}
          value={this.props.position.averageCost} />
        {currentPosition}
        <button onClick={(event) => this.props.clearHandler(event, 'position')}>
          Reset
        </button>
      </div>
    );
  }
}

export default CurrentPosition;
