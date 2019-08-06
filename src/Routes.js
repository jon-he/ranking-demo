import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomeContainer from "./Containers/Home/Home.container";

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={HomeContainer}/>
    </Switch>
  </HashRouter>
);

export default BasicRoute;