import React, { Component } from 'react';

import classes from './DesiredCostBasis.module.css';

class DesiredCostBasis extends Component {
  state = {
    desiredCostBasis: '',
    sharesToAdd: '',
  }

  calculateSharePrice = () => {
    const currentShares = Number(this.props.numberOfShares);
    const currentEquity = currentShares * Number(this.props.averageCost);

    let desiredPrice = null;
    if (this.state.desiredCostBasis !== '' && this.state.sharesToAdd !== '' && Number(this.state.sharesToAdd) !== 0) {
      const desiredCostBasis = Number(this.state.desiredCostBasis);
      const sharesToAdd = Number(this.state.sharesToAdd);
      const totalEquity = desiredCostBasis * (currentShares + sharesToAdd)
      desiredPrice = ((totalEquity - currentEquity)/sharesToAdd).toFixed(2);
    }

    return desiredPrice;
  }

  inputHandler = (event) => {
    let tempState = { ...this.state }

    const inputFieldName = event.target.name;
    const newValue = event.target.value;
    if (!isNaN(Number(newValue))) {
      tempState[inputFieldName] = newValue;
    }

    this.setState(tempState);
  }

  render () {
    const desiredPrice = this.calculateSharePrice();
    let sharePriceMessage = null;
    if (desiredPrice !== null) {
      sharePriceMessage = <p>
        Add <strong>
          {this.state.sharesToAdd}
        </strong> shares at a max price of $<strong>
          {desiredPrice}
        </strong> to stay below the desired cost basis
      </p>
    }

    return (
      <div className={classes.DesiredCostBasis}>
        <h6><em>Use the following to calculate the share price needed for the desired cost basis.</em></h6>
        <label>Desired Cost Basis:</label>
        <input
          name="desiredCostBasis"
          type="text"
          onChange={(event) => this.inputHandler(event)}
          value={this.state.desiredCostBasis}
          disabled={this.props.disabled} />
        <label>Shares to Add:</label>
        <input
          name="sharesToAdd"
          type="text"
          onChange={(event) => this.inputHandler(event)}
          value={this.state.sharesToAdd}
          disabled={this.props.disabled} />
        {sharePriceMessage}
      </div>
    );
  }
}

export default DesiredCostBasis;
