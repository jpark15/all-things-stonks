import React, { Component } from 'react';

import classes from './NewCostBasis.module.css';

class NewCostBasis extends Component {
  state = {
    sharesToAdd: '',
    sharePrice: '',
  }

  calculateCostBasisAndTotalShares = () => {
    let totalShares = Number(this.props.numberOfShares);
    let totalEquity = totalShares * Number(this.props.averageCost);

    let newCostBasis = null;
    if (this.state.sharesToAdd !== '' && this.state.sharePrice !== '') {
      const sharesToAdd = Number(this.state.sharesToAdd);
      const sharePrice = Number(this.state.sharePrice);
      totalShares += sharesToAdd;
      totalEquity += (sharesToAdd * sharePrice);
      newCostBasis = (totalEquity/totalShares).toFixed(2);
    }

    return {
      costBasis: newCostBasis,
      totalShares: totalShares,
    };
  }

  inputHandler = (event) => {
    let tempState = { ...this.state }

    const inputFieldName = event.target.name;
    const newValue = event.target.value.trim();
    if (!isNaN(Number(newValue))) {
      tempState[inputFieldName] = newValue;
    }

    this.setState(tempState);
  }

  render () {
    const result = this.calculateCostBasisAndTotalShares();
    let costBasisMessage = null;
    if (result.costBasis !== null) {
      costBasisMessage = <p>
        New cost basis of $<strong>
          {result.costBasis}
        </strong> for all <strong>
          {result.totalShares}
        </strong> shares
      </p>
    }

    return (
      <div className={classes.NewCostBasis}>
        <h6><em>Use the following to calculate a new cost basis.</em></h6>
        <label>Shares to Add:</label>
        <input
          name="sharesToAdd"
          type="text"
          onChange={(event) => this.inputHandler(event)}
          value={this.state.sharesToAdd}
          disabled={this.props.disabled} />
        <label>Share Price:</label>
        <input
          name="sharePrice"
          type="text"
          onChange={(event) => this.inputHandler(event)}
          value={this.state.sharePrice}
          disabled={this.props.disabled} />
        {costBasisMessage}
      </div>
    );
  }
}

export default NewCostBasis;
