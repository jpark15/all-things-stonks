import React from 'react';

import classes from './About.module.css';

const about = () => (
  <div className={classes.Section}>
    <h3>About this App</h3>
    <p>
      Simple React app (with no database) designed to help with cost
      basis calculations for stock positions.
    </p>
    <br/>
    <h3>Upcoming Changes</h3>
    <p>Integrate with stock API to provide useful information.</p>
    <ul>
      <li>Total equity</li>
      <li>Total return percentage</li>
      <li>Last day stock hit desired share price.</li>
    </ul>
    <p>Open to suggestions!</p>
    <br/>
    <h3>But, why?</h3>
    <p>Build native React app.</p>
    <ul>
      <li>Practice React, JSX, and CSS.</li>
    </ul>
    <p>Deploy app to Heroku.</p>
    <p>(WIP) Integrate third-party API.</p>
  </div>
);

export default about;
