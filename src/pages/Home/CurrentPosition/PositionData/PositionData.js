import React, { Component } from 'react';

import classes from './PositionData.module.css';
import ReturnEmoji from './ReturnEmoji/ReturnEmoji';

class PositionData extends Component {
  totalInvested = () => {
    let invested = null;
    if (this.props.position.numberOfShares !== '' && this.props.position.averageCost !== '') {
      invested = this.props.position.numberOfShares * this.props.position.averageCost;
    }
    return invested;
  }

  totalEquity = () => {
    let equity = null;
    if (this.props.position.numberOfShares !== '' && this.props.position.lastClose !== '') {
      equity = this.props.position.numberOfShares * this.props.position.lastClose;
    }
    return equity;
  }

  totalReturn = () => {
    let totalReturn = null;
    if (this.totalInvested() !== null && this.totalEquity() !== null) {
      totalReturn = this.totalEquity() - this.totalInvested();
    }
    return totalReturn;
  }

  totalReturnPercentage = () => {
    let returnPercentage = null;
    if (this.totalReturn() !== null && this.totalInvested() !== null) {
      returnPercentage = ((this.totalReturn()/this.totalInvested())*100);
    }
    return returnPercentage;
  }

  toCurrency = (number) => {
    return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  toPercent = (number) => {
    return number.toFixed(2) + '%'
  }

  render () {
    const totalInvested = this.totalInvested();
    const equity = this.totalEquity();
    const totalReturn = this.totalReturn();
    const percentReturn = this.totalReturnPercentage();

    let currentPosition = null;
    if (totalInvested !== null && equity !== null) {
      let colorClass = [];
      colorClass = (totalReturn > 0) ? [classes.positive] : colorClass;
      colorClass = (totalReturn < 0) ? [classes.negative] : colorClass;

      currentPosition = <div>
        <p>Total Invested: <strong>{this.toCurrency(totalInvested)}</strong></p>
        <p>Total Equity: <strong>{this.toCurrency(equity)}</strong></p>
        <p>Current Price: <strong>{this.toCurrency(this.props.position.lastClose)}</strong></p>
        <p>Gain/Loss: <strong className={colorClass}>
          {this.toCurrency(totalReturn) + ' (' + this.toPercent(percentReturn) + ')'}
        </strong></p>
        <ReturnEmoji percentReturn={percentReturn}/>
      </div>
    } else {
      currentPosition = <p style={{ color: 'salmon' }}>
        Fill out all fields...
      </p>
    }

    return (
      <div className={classes.Stats}>
        <label>Additional Details:</label>
        {currentPosition}
      </div>
    );
  };
}

export default PositionData;
