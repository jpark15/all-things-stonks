import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Toolbar from './components/Navigation/Toolbar/Toolbar';
import CostBasisCalculator from './containers/CostBasisCalculator/CostBasisCalculator';
import About from './containers/About/About';

function App() {
  return (
    <div>
      <Toolbar/>
      <Switch>
        <Route path="/" exact component={CostBasisCalculator} />
        <Route path="/about" exact component={About} />
      </Switch>
    </div>
  );
}

export default App;
