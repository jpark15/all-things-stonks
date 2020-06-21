import React from 'react';

import classes from './ReturnEmoji.module.css';

const returnEmoji = (props) => {
  let emoji = null;

  if (props.percentReturn <= -75) {
    emoji = <span role="img" aria-label="sob">😭</span>
  } else if (props.percentReturn <= -50) {
    emoji = <span role="img" aria-label="cry">😢</span>
  } else if (props.percentReturn <= -25) {
    emoji = <span role="img" aria-label="frowning_face">😦</span>
  } else if (props.percentReturn <= -10) {
    emoji = <span role="img" aria-label="slightly_frowning_face">🙁</span>
  } else if (props.percentReturn < 10) {
    emoji = <span role="img" aria-label="neutral_face">😐</span>
  } else if (props.percentReturn < 25) {
    emoji = <span role="img" aria-label="slightly_smiling_face">🙂</span>
  } else if (props.percentReturn < 50) {
    emoji = <span role="img" aria-label="smiley">😃</span>
  } else if (props.percentReturn < 100) {
    emoji = <span role="img" aria-label="joy">😂</span>
  } else if (props.percentReturn < 200) {
    emoji = <span role="img" aria-label="partying_face">🥳</span>
  } else {
    emoji = <span role="img" aria-label="moneybag">💰</span>
  }

  return (
    <div className={classes.Emoji}>
      {emoji}
    </div>
  );
};

export default returnEmoji;
