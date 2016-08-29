import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  Link,
} from 'react-router';
import {
  Container,
  TabBar,
} from 'amazeui-touch';

class AppContainer extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.renderTabBar = this.renderTabBar.bind(this);
  }

  // clickss = () => {
  //   const {actions} = this.props
  //   actions.hideTabbar(true)
  // }

  renderTabBar() {
    const { router } = this.context;

    const { appObj} = this.props;

    if (! appObj.isHideTabbar) {
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
          />
          <TabBar.Item
            component={Link}
            icon="pages"
            title="世界圈"
            selected={router.isActive('/circle', true)}
            to="/circle"
          />
          <TabBar.Item
            component={Link}
            icon="person"
            title="我的"
            selected={router.isActive('/my', true)}
            to="/my"
          />
        </TabBar>
      )
    }
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

AppContainer.propTypes = {
  appObj: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    appObj: state.appObj
  }
}

export default connect(mapStateToProps,)(AppContainer)
