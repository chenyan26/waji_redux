import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as MyActions from '../redux/actions/AppActions';
import { bindActionCreators } from 'redux';

import {
  Link,
} from 'react-router';
import {
  Container,
  TabBar,
} from 'amazeui-touch';

import {
  Home,
  Circle,
  My,
} from '../components';

import {
  InfoContainer
} from '../containers';

class AppContainer extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props)
    this.renderTabBar = this.renderTabBar.bind(this);
  }

  renderTabBar() {
    const {
      router
    } = this.context;

    return(
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
          selected={router.isActive('/circle', true)}
          to="/circle"
          onlyActiveOnIndex
        />
        <TabBar.Item
          component={Link}
          icon="person"
          title="我的"
          selected={router.isActive('/my', true)}
          to="/my"
          onlyActiveOnIndex
        />
      </TabBar>
    )
  }

  render() {
    const {
      location,
      params,
      children,
      ...props,
    } = this.props;

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
        {this.renderTabBar()}
      </Container>
    );
  }
}

export default AppContainer
