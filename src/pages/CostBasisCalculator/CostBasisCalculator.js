import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import CurrentPosition from './CurrentPosition/CurrentPosition';

class CostBasisCalculator extends Component {
  state = {
    numberOfShares: '',
    averageCost: '',
    equity: null
  }

  isNumber = (value) => {
    return !isNaN(Number(value))
  }

  calculateEquity = (tempState) => {
    let equity = null;
    if (tempState.numberOfShares !== '' && tempState.averageCost !== '') {
      equity = (Number(tempState.numberOfShares) * Number(tempState.averageCost)).toFixed(2);
    }
    tempState.equity = equity;
  }

  positionInputHandler = (event) => {
    let tempState = { ...this.state }

    const inputFieldName = event.target.name;
    let newValue = event.target.value;

    if (this.isNumber(newValue)) {
      tempState[inputFieldName] = newValue;
    }

    this.calculateEquity(tempState);
    this.setState(tempState);
  }

  render () {
    return (
      <Aux>
        <CurrentPosition
          numberOfShares={this.state.numberOfShares}
          averageCost={this.state.averageCost}
          equity={this.state.equity}
          changeHandler={this.positionInputHandler} />
      </Aux>
    );
  }
}

export default CostBasisCalculator;
