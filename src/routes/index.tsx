import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Improvements from '../pages/Improvements';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/improving" exact component={Improvements} />
    </Switch>
  );
};

export default Routes;
