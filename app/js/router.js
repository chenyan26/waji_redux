import React from 'react';
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './redux/store/configureStore'

import {
  render,
} from 'react-dom';

import {
  Router,
  Route,
  IndexRoute,
  hashHistory,
  // browserHistory
} from 'react-router';

import {
  AppContainer,
  LoginContainer,

  HomeContainer,
  HomeTypeContainer,

  HomeDetailContainer,

  CircleContainer,
  MyContainer,
  InfoContainer,
} from './containers';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

const routes = (
 <Provider store={store}>
   <Router history={history}>
     <Route path="/" component={AppContainer}>

       <Route path="login" component={LoginContainer} />

       <Route path='circle' component={CircleContainer} />

       <Route path='my' component={MyContainer} />
       <Route path="my/info" component={InfoContainer} />

       {/* <Route path=":page" component={Page}> */}

       {/* </Route> */}

       {/* <Route path="home/:page" component={HomeContainer} /> */}

       <Route path="home/:type" component={HomeTypeContainer}/>

       <Route path="detail/:type/:id" component={HomeDetailContainer}/>

       {/*<Route path="detail/:id" component={HomeDetailContainer}/>*/}

       <IndexRoute component={HomeContainer} />

     </Route>
   </Router>
</Provider>

);

document.addEventListener('DOMContentLoaded', () => {
  render(routes, document.getElementById('root'));
});
