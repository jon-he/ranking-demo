import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomeContainer from "./Containers/Home/Home.container";
import RankContainer from "./Containers/Rank/Rank.container";

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={RankContainer}/>
      <Route exact path="/rank" component={RankContainer}/>
    </Switch>
  </HashRouter>
);

export default BasicRoute;