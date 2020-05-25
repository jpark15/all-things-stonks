import React, { Component } from 'react';

import NewCostBasis from './NewCostBasis/NewCostBasis';
import DesiredCostBasis from './DesiredCostBasis/DesiredCostBasis';
import classes from './CostBasis.module.css';

class CostBasis extends Component {
  render () {
    let disabled = true;
    if (this.props.numberOfShares !== '' && this.props.averageCost !== '') {
      disabled = false;
    }

    return (
      <div className={classes.CostBasis}>
        <h2>Cost Basis</h2>
        <NewCostBasis
          numberOfShares={this.props.numberOfShares}
          averageCost={this.props.averageCost}
          disabled={disabled} />
        <DesiredCostBasis
          numberOfShares={this.props.numberOfShares}
          averageCost={this.props.averageCost}
          disabled={disabled} />
      </div>
    );
  }
}

export default CostBasis;
