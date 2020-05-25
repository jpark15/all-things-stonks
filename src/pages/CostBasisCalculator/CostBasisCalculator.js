import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import CurrentPosition from './CurrentPosition/CurrentPosition';
import CostBasis from './CostBasis/CostBasis';

class CostBasisCalculator extends Component {
  state = {
    numberOfShares: '',
    averageCost: '',
  }

  positionInputHandler = (event) => {
    let tempState = { ...this.state }

    const inputFieldName = event.target.name;
    const newValue = event.target.value.trim();
    if (!isNaN(Number(newValue))) {
      tempState[inputFieldName] = newValue;
    }

    this.setState(tempState);
  }

  render () {
    return (
      <Aux>
        <CurrentPosition
          numberOfShares={this.state.numberOfShares}
          averageCost={this.state.averageCost}
          changeHandler={this.positionInputHandler} />
        <CostBasis
          numberOfShares={this.state.numberOfShares}
          averageCost={this.state.averageCost} />
      </Aux>
    );
  }
}

export default CostBasisCalculator;
