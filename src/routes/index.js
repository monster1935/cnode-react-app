// Copyright (c) 2018 by monster1935. All Rights Reserved.
import React, { Component } from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from '../components/home';
import Post from '../components/post';

class ChildRoute extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/tag/:type" component={Home}></Route>
        <Route exact path="/tag/:type" component={Home}></Route>
        <Route exact path="/tag/:type" component={Home}></Route>
        <Route exact path="/tag/:type" component={Home}></Route>
        <Route exact path="/tag/:type" component={Home}></Route>
        <Route exact path="/topic/:postId" component={Post}></Route>
        <Route render={() => ( <Redirect to="/404"></Redirect>)}/>
      </Switch>
    )
  }
};

export default ChildRoute
