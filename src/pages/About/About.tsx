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
    <h3>But, why?</h3>
    <ul>
      <li>Build a native React app</li>
      <li>Practice React, JSX, and HTML/CSS</li>
      <li>Use ALPHA VANTAGE stock API</li>
      <li>Deploy app to Heroku</li>
    </ul>
    <h3>Updates:</h3>
    <ul>
      <li>Convert Current Position and About sections to Typescript</li>
      <li>Use React Hooks for state management</li>
      <li>Use ReactQuery to fetch stock data</li>
    </ul>
  </div>
);

export default about;
