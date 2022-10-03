import React from 'react';

import classes from './CurrentPosition.module.css';
import CurrentPositionForm from './CurrentPositionForm/CurrentPositionForm';
import PositionData from './PositionData/PositionData';

export interface CurrentPositionProps {
  position: {
    ticker: string,
    lastClose: string,
    numberOfShares: string,
    averageCost: string,
  },
  changeHandler: (event: any, section: string) => void,
  clearHandler: (event: any, section: string) => void,
}

const CurrentPosition = (props: CurrentPositionProps) => {
  return (
    <div className={classes.Position}>
      <h2>Current Position</h2>
      <div id="outer" className={classes.container}>
        <div className={classes.form}>
          <CurrentPositionForm
            changeHandler={props.changeHandler}
            position={props.position}/>
        </div>
        <div className={classes.data}>
          <PositionData position={props.position}/>
        </div>
      </div>
      <button onClick={(event) => props.clearHandler(event, 'position')}>
        Reset
      </button>
    </div>
  );
}

export default CurrentPosition;
