import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import './index.css';
import App from './App';
import NotFound from './components/pages/NotFound';
import Login from './components/pages/Login';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/getstart" component={App}/>
      <Route exact path="/api" component={App}/>
      <Route exact path="/about" component={App}/>
      <Route path="/tag" component={App}></Route>
      <Route path="/topic" component={App}></Route>
      <Route exact path="/404" component={NotFound} />
      <Route exact path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </Router>
), document.getElementById('root'));
registerServiceWorker();
