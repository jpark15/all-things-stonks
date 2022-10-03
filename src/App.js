import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';

import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
const queryClient = new QueryClient();

export default function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
          </Switch>
        </Layout>
      </QueryClientProvider>
    </div>
  );
}
