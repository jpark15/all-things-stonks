import React, { Component } from 'react';

import NewCostBasis from './NewCostBasis/NewCostBasis';
import DesiredCostBasis from './DesiredCostBasis/DesiredCostBasis';
import classes from './CostBasis.module.css';

class CostBasis extends Component {
  render () {
    let disabled = true;
    if (this.props.position.numberOfShares !== '' && this.props.position.averageCost !== '') {
      disabled = false;
    }

    return (
      <div className={classes.CostBasis}>
        <h2>Cost Basis</h2>
        <NewCostBasis
          position={this.props.position}
          newCostBasis={this.props.newCostBasis}
          changeHandler={this.props.changeHandler}
          clearHandler={this.props.clearHandler}
          disabled={disabled} />
        <DesiredCostBasis
          position={this.props.position}
          desiredCostBasis={this.props.desiredCostBasis}
          changeHandler={this.props.changeHandler}
          clearHandler={this.props.clearHandler}
          disabled={disabled} />
      </div>
    );
  }
}

export default CostBasis;
