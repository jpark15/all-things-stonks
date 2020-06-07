import React, { Component } from 'react';

import classes from './CurrentPositionForm.module.css';
import { DebounceInput } from 'react-debounce-input';
import ReactTooltip from "react-tooltip";

class CurrentPositionForm extends Component {
  render () {
    return (
      <div className={classes.Form}>
        <label>Ticker Symbol:</label>
        <DebounceInput data-tip="API limited to 5<br />requests/minute :("
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
        <ReactTooltip />
      </div>
    );
  }
}

export default CurrentPositionForm;
