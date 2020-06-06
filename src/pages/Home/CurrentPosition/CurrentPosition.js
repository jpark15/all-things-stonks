import React, { Component } from 'react';

import classes from './CurrentPosition.module.css';
import { DebounceInput } from 'react-debounce-input';
import ReactTooltip from "react-tooltip";

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
    if (equity !== null && this.props.position.lastClose !== null) {
      currentPosition = <div>
        <p>
          Total Invested: $<strong>
            {equity}
          </strong>
        </p>
        <p>
          Total Equity: $<strong>
            {(Number(this.props.position.numberOfShares) * Number(this.props.position.lastClose)).toFixed(2)}
          </strong>
        </p>
        <p>
          Total Gain: $<strong>
            {(Number(this.props.position.numberOfShares) * Number(this.props.position.lastClose)).toFixed(2) - equity}
          </strong>
        </p>
      </div>
    }

    return (
      <div className={classes.Position}>
        <h2>Current Position</h2>
        <label>Ticker Symbol:</label>
        <ReactTooltip />
        <DebounceInput data-tip="Debounced input to help with<br />API limit of 5 requests/minute."
          data-place="right"
          data-type="info"
          data-effect="solid"
          data-multiline={true}
          minLength={0}
          debounceTimeout={500}
          name="ticker"
          type="text"
          onChange={(event) => this.props.changeHandler(event, 'position')}
          value={this.props.position.ticker} />
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
