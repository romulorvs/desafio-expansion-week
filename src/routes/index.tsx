import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Improving from '../pages/Improving';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/improving" exact component={Improving} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
