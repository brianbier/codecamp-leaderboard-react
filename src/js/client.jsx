import React from 'react';
import { render } from 'react-dom';
import Layout from './components/layout';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'


  render(
    <Router history={ browserHistory}>
      <Router path="/" component={Layout}>

      </Router>
    </Router>,
    document.querySelector("#app"));
