import React, { Component } from 'react';

import classes from './NewCostBasis.module.css';

class NewCostBasis extends Component {
  calculateCostBasisAndTotalShares = () => {
    let totalShares = Number(this.props.position.numberOfShares);
    let totalEquity = totalShares * Number(this.props.position.averageCost);

    let newCostBasis = null;
    if (this.props.newCostBasis.sharesToAdd !== '' && this.props.newCostBasis.sharePrice !== '') {
      const sharesToAdd = Number(this.props.newCostBasis.sharesToAdd);
      const sharePrice = Number(this.props.newCostBasis.sharePrice);
      totalShares += sharesToAdd;
      totalEquity += (sharesToAdd * sharePrice);
      newCostBasis = (totalEquity/totalShares).toFixed(2);
    }

    return {
      costBasis: newCostBasis,
      totalShares: totalShares,
    };
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
        <h5><em>
          Calculate your new cost basis given the number of
          <br/>shares you'd like to add and the share price.
        </em></h5>
        <label>Shares to Add:</label>
        <input
          name="sharesToAdd"
          type="text"
          onChange={(event) => this.props.changeHandler(event, 'newCostBasis')}
          value={this.props.newCostBasis.sharesToAdd}
          disabled={this.props.disabled} />
        <label>Share Price:</label>
        <input
          name="sharePrice"
          type="text"
          onChange={(event) => this.props.changeHandler(event, 'newCostBasis')}
          value={this.props.newCostBasis.sharePrice}
          disabled={this.props.disabled} />
        {costBasisMessage}
        <button onClick={(event) => this.props.clearHandler(event, 'newCostBasis')}>
          Clear
        </button>
      </div>
    );
  }
}

export default NewCostBasis;
