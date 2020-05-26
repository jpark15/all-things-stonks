import React, { Component } from 'react';

import classes from './DesiredCostBasis.module.css';

class DesiredCostBasis extends Component {
  state = {
    desiredCostBasis: '',
    sharesToAdd: '',
  }

  calculateSharePrice = () => {
    const currentShares = Number(this.props.position.numberOfShares);
    const currentEquity = currentShares * Number(this.props.position.averageCost);

    let desiredPrice = null;
    if (this.props.desiredCostBasis.desiredCostBasis !== '' && this.props.desiredCostBasis.sharesToAdd !== '' && Number(this.props.desiredCostBasis.sharesToAdd) !== 0) {
      const desiredCostBasis = Number(this.props.desiredCostBasis.desiredCostBasis);
      const sharesToAdd = Number(this.props.desiredCostBasis.sharesToAdd);
      const totalEquity = desiredCostBasis * (currentShares + sharesToAdd)
      desiredPrice = ((totalEquity - currentEquity)/sharesToAdd).toFixed(2);
    }

    return desiredPrice;
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
          onChange={(event) => this.props.changeHandler(event, 'desiredCostBasis')}
          value={this.props.desiredCostBasis.desiredCostBasis}
          disabled={this.props.disabled} />
        <label>Shares to Add:</label>
        <input
          name="sharesToAdd"
          type="text"
          onChange={(event) => this.props.changeHandler(event, 'desiredCostBasis')}
          value={this.props.desiredCostBasis.sharesToAdd}
          disabled={this.props.disabled} />
        {sharePriceMessage}
        <button onClick={(event) => this.props.clearHandler(event, 'desiredCostBasis')}>
          Clear
        </button>
      </div>
    );
  }
}

export default DesiredCostBasis;
