import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import configureStore from '../redux/store/configureStore'

import {
  render,
} from 'react-dom';
import {
  Router,
  Route,
  Link,
  IndexRoute,
  hashHistory,
  withRouter,
} from 'react-router';
import {
  Container,
  TabBar,
} from 'amazeui-touch';

class App extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  render() {
    const {
      location,
      params,
      children,
      ...props,
    } = this.props;
    const {
      router
    } = this.context;
    const transition = children.props.transition || 'sfr';

    return (
      <Container direction="column" id="sk-container">
        <Container
          transition={transition}
          // fade transition example
          // transition='fade'
          // transitionEnterTimeout={450}
          // transitionLeaveTimeout={300}
        >
          {React.cloneElement(children, {key: location.key})}
        </Container>

        <TabBar
          amStyle="primary"
        >
          <TabBar.Item
            component={Link}
            icon="home"
            title="首页"
            selected={router.isActive('/', true)}
            to="/"
            onlyActiveOnIndex
          />
          <TabBar.Item
            component={Link}
            icon="pages"
            title="世界圈"
            // @see https://github.com/reactjs/react-router/blob/0616f6e14337f68d3ce9f758aa73f83a255d6db3/docs/API.md#isactivepathorloc-indexonly
            selected={router.isActive('/circle', true)}
            to="/circle"
            onlyActiveOnIndex
          />
          <TabBar.Item
            component={Link}
            icon="person"
            title="我的"
            // @see https://github.com/reactjs/react-router/blob/0616f6e14337f68d3ce9f758aa73f83a255d6db3/docs/API.md#isactivepathorloc-indexonly
            selected={router.isActive('/my', true)}
            to="/my"
            onlyActiveOnIndex
          />
        </TabBar>
      </Container>
    );
  }
}

import {
  Home,
  Circle,
  My,
} from '../components';

import {
  InfoContainer
} from '../containers';

const store = configureStore()

// withRouter HoC
// @see https://github.com/reactjs/react-router/blob/0616f6e14337f68d3ce9f758aa73f83a255d6db3/upgrade-guides/v2.4.0.md#v240-upgrade-guide
const routes = (
 //  <Provider store={store}>
 //    <Router history={hashHistory}>
 //      <Route path="/" component={App}>
 //
 //        <Route path='circle' component={Circle}>
 //
 //        </Route>
 //
 //        <Route path='my' component={My} />
 //        {/* <Route path="my/:page" component={MyContainer} /> */}
 //
 //        {/* <Route path=":page" component={Page}> */}
 //
 //        {/* </Route> */}
 //
 //        {/* <Route path="home/:page" component={HomeContainer} /> */}
 //        <IndexRoute component={Home} />
 //
 //      </Route>
 //    </Router>
 // </Provider>

 <Provider store={store}>
   <Router history={hashHistory}>
     <Route path="/" component={App}>

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
