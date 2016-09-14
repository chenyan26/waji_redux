import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  Link,
} from 'react-router';
import {
  Container,
  TabBar,
  NavBar,
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

    const { appObj } = this.props;

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
      appObj,
      ...props,
    } = this.props;

    //转场动画名称，如不设置则没有转场动画
    //sfr: show from right
    // const transition = children.props.transition || 'sfr';

    let icon = "left-nav";
    if (appObj.isHideNavLeft) {
      icon = "";
    }

    const backNav = {
      component: Link,
      // icon: 'left-nav',
      icon:icon,
      // title: '返回',
      // to: '/my',
      to:appObj.navBackLink
    };

    const downloadNav = {
      component: 'a', // 默认为 `a`
      title: '下载App',
      href: 'http://fir.im/wwkj',
    };

    return (
      <Container direction="column" id="sk-container">
        <NavBar
          amStyle="primary"
          title={[appObj.navTitle]}
          leftNav={[backNav]}
          rightNav= {[downloadNav]}
        />
        <Container
          //transition={transition}
          transition='sfr'
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

  buys: PropTypes.object.isRequired,
  sells: PropTypes.object.isRequired,
  leases: PropTypes.object.isRequired,
  rents: PropTypes.object.isRequired,

  applys: PropTypes.object.isRequired,
  recruits: PropTypes.object.isRequired,

  friends: PropTypes.object.isRequired,

  login: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    appObj: state.appObj,

    buys: state.buys,
    sells: state.sells,
    leases: state.leases,
    rents: state.rents,

    recruits: state.recruits,
    applys: state.applys,

    friends: state.friends,

    login: state.login,
  }
}

export default connect(mapStateToProps,)(AppContainer)
