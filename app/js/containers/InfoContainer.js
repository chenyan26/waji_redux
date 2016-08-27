import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as MyActions from '../redux/actions/MyActions';
import { bindActionCreators } from 'redux';

import {
  View,
  NavBar,
} from 'amazeui-touch';
import {
  Link,
} from 'react-router';

class InfoContainer extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.clickss = this.clickss.bind(this);
  // }

  render() {
    const downloadNav = {
      component: 'a', // 默认为 `a`
      title: '下载App',
      href: 'http://fir.im/wwkj',
      onlyActiveOnIndex: true,
    };

    const backNav = {
      component: Link,
      icon: 'left-nav',
      // title: '返回',
      to: '/my',
      onlyActiveOnIndex: true,
    };

    const {account} = this.props

    return (
      <View>
        <NavBar
          title={account.name}
          leftNav={[backNav]}
          rightNav= {[downloadNav]}
          amStyle="primary"
        />
      <p>{account.name}</p>
      <button onClick={this.clickss}>点一下</button>
      </View>
    );
  }

  // clickss() {
  //   const {actions} = this.props
  //   actions.setName("44444")
  // }

  clickss = () => {
    const {actions} = this.props
    actions.setName("555555")
  }

}

InfoContainer.propTypes = {
  account: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    account: state.account
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions : bindActionCreators(MyActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoContainer)
