import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './redux/store/configureStore'

import {
  render,
} from 'react-dom';

import {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from 'react-router';

import {
  AppContainer,
  HomeContainer,
  CircleContainer,
  MyContainer,
  InfoContainer,
} from './containers';

const store = configureStore()

const routes = (
 <Provider store={store}>
   <Router history={hashHistory}>
     <Route path="/" component={AppContainer}>

       <Route path='circle' component={CircleContainer}>

       </Route>

       <Route path='my' component={MyContainer} />
       <Route path="my/info" component={InfoContainer} />

       {/* <Route path=":page" component={Page}> */}

       {/* </Route> */}

       {/* <Route path="home/:page" component={HomeContainer} /> */}
       <IndexRoute component={HomeContainer} />

     </Route>
   </Router>
</Provider>

);

document.addEventListener('DOMContentLoaded', () => {
  render(routes, document.getElementById('root'));
});
