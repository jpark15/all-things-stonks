import React from 'react';

import classes from './About.module.css';

const about = () => (
  <div className={classes.About}>
    <h3>About this App</h3>
    <p>Just a simple cost basis calculator for stocks.</p>
    <br/>

    <h3>Planned Features</h3>
    <p>Reach out to stock API to provide useful information.</p>
    <p>Open to suggestions!</p>
    <br/>

    <h3>Project Goals (Growing List)</h3>
    <p>Build and deploy native React app.</p>
    <p>Use third-party API.</p>
  </div>
);

export default about;
