import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import CostBasisCalculator from './pages/Home/Home';
import About from './pages/About/About';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact component={CostBasisCalculator} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
