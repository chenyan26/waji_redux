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

  HomeContainer,
  HomeTypeContainer,
  HomeDetailContainer,

  CircleContainer,
  CircleTypeContainer,
  CircleDetailContainer,

  MyContainer,
} from './containers';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

const routes = (
 <Provider store={store}>
   <Router history={history}>
     <Route path="/" component={AppContainer}>

       <Route path='circle' component={CircleContainer} />
       <Route path='circle/:type' component={CircleTypeContainer} />
       <Route path='circle/:type/:id' component={CircleDetailContainer} />

       <Route path='my' component={MyContainer} />
       {/* <Route path=":page" component={Page}> */}

       {/* </Route> */}

       {/* <Route path="home/:page" component={HomeContainer} /> */}

       <Route path="home/:type" component={HomeTypeContainer}/>

       <Route path="detail/:type/:id" component={HomeDetailContainer}/>

       <IndexRoute component={HomeContainer} />

     </Route>
   </Router>
</Provider>

);

document.addEventListener('DOMContentLoaded', () => {
  render(routes, document.getElementById('root'));
});
