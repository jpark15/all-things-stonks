import React from 'react';

import classes from './PositionData.module.css';
import ReturnEmoji from './ReturnEmoji/ReturnEmoji';

export interface PositionDataProps {
  position: {
    lastClose: string,
    numberOfShares: string,
    averageCost: string,
  },
}

const PositionData = (props: PositionDataProps) => {
  const { lastClose, numberOfShares, averageCost } = props.position;

  const totalInvested = () => {
    let invested = null;
    if (numberOfShares !== '' && averageCost !== '') {
      invested = Number(numberOfShares) * Number(averageCost);
    }
    return invested;
  }

  const totalEquity = () => {
    let equity = null;
    if (numberOfShares !== '' && lastClose !== '') {
      equity = Number(numberOfShares) * Number(lastClose);
    }
    return equity;
  }

  const totalReturn = () => {
    let totalReturn = null;
    if (totalInvested() !== null && totalEquity() !== null) {
      totalReturn = Number(totalEquity()) - Number(totalInvested());
    }
    return totalReturn;
  }

  const totalReturnPercentage = () => {
    let returnPercentage = null;
    if (totalReturn() !== null && totalInvested() !== null) {
      returnPercentage = ((Number(totalReturn())/Number(totalInvested()))*100);
    }
    return returnPercentage;
  }

  const toCurrency = (number: number) => {
    return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  const toPercent = (number: number) => {
    return number.toFixed(2) + '%'
  }

  const invested = totalInvested();
  const equity = totalEquity();
  const returns = totalReturn();
  const percentReturn = totalReturnPercentage();

  let currentPosition = null;
  if (invested !== null && equity !== null) {
    let colorClass: any[] = [];
    colorClass = (returns && returns > 0) ? [classes.positive] : colorClass;
    colorClass = (returns && returns < 0) ? [classes.negative] : colorClass;

    currentPosition = <div>
      <p>Total Invested: <strong>{toCurrency(invested)}</strong></p>
      <p>Total Equity: <strong>{toCurrency(equity)}</strong></p>
      <p>Current Price: <strong>{toCurrency(Number(lastClose))}</strong></p>
      <p>Gain/Loss: <strong className={colorClass.toString()}>
        {toCurrency(Number(returns)) + ' (' + toPercent(Number(percentReturn)) + ')'}
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
}

export default PositionData;
