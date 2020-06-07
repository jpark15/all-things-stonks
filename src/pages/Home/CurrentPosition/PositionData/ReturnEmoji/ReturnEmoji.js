import React from 'react';

import classes from './ReturnEmoji.module.css';

const returnEmoji = (props) => {
  let emoji = null;

  if (props.percentReturn <= -75) {
    emoji = <span role="img" aria-label="sob">😭</span>
  } else if (props.percentReturn <= -40) {
    emoji = <span role="img" aria-label="cry">😢</span>
  } else if (props.percentReturn <= -20) {
    emoji = <span role="img" aria-label="frowning_face">😦</span>
  } else if (props.percentReturn <= -10) {
    emoji = <span role="img" aria-label="slightly_frowning_face">🙁</span>
  } else if (props.percentReturn < 10) {
    emoji = <span role="img" aria-label="neutral_face">😐</span>
  } else if (props.percentReturn < 20) {
    emoji = <span role="img" aria-label="slightly_smiling_face">🙂</span>
  } else if (props.percentReturn < 40) {
    emoji = <span role="img" aria-label="smile">😄</span>
  } else if (props.percentReturn < 75) {
    emoji = <span role="img" aria-label="star_struck">🤩</span>
  } else if (props.percentReturn < 100) {
    emoji = <span role="img" aria-label="partying_face">🥳</span>
  } else if (props.percentReturn < 200) {
    emoji = <span role="img" aria-label="money_with_wings">💸</span>
  } else if (200 <= props.percentReturn) {
    emoji = <span role="img" aria-label="moneybag">💰</span>
  }

  return (
    <div className={classes.Emoji}>
      {emoji}
    </div>
  );
};

export default returnEmoji;
