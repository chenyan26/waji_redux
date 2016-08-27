import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import configureStore from './redux/store/configureStore'

import {
  render,
} from 'react-dom';

import {
  Router,
  Route,
  IndexRoute,
  hashHistory,
  withRouter,
} from 'react-router';

import {
  Home,
  Circle,
  My,
} from './components';

import {
  AppContainer,
  InfoContainer
} from './containers';

const store = configureStore()

const routes = (
 <Provider store={store}>
   <Router history={hashHistory}>
     <Route path="/" component={AppContainer}>

       <Route path='circle' component={Circle}>

       </Route>

       <Route path='my' component={My} />
       <Route path="my/info" component={InfoContainer} />

       {/* <Route path=":page" component={Page}> */}

       {/* </Route> */}

       {/* <Route path="home/:page" component={HomeContainer} /> */}
       <IndexRoute component={Home} />

     </Route>
   </Router>
</Provider>

);

document.addEventListener('DOMContentLoaded', () => {
  render(routes, document.getElementById('root'));
});
