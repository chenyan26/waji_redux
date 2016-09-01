import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as MyActions from '../redux/actions/MyActions';
import { bindActionCreators } from 'redux';

import * as AppActions from '../redux/actions/AppActions';

import {
  View,
} from 'amazeui-touch';
import {
  Link,
} from 'react-router';

class InfoContainer extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.clickss = this.clickss.bind(this);
  // }

  componentWillMount() {
    const { appActions } = this.props;
    appActions.hideTabbar(true);
    appActions.hideNavLeft(false);
    appActions.setNavBackLink('/my');
    appActions.setNavTitle('个人信息');
  }

  render() {
    const {account} = this.props;

    return (
      <View>
      <p>{account.username}</p>
      <p>{account.ks}</p>
      {/*<p>{test.artist}</p>*/}
      <button onClick={this.clickss}>点一下</button>
      </View>
    );
  }

  // clickss() {
  //   const {actions} = this.props
  //   actions.setName("44444")
  // }

  clickss = () => {
    const {myActions} = this.props;
    myActions.setUsername("555555");
    myActions.getAccount("111")
  }

}

InfoContainer.propTypes = {
  account: PropTypes.object.isRequired,
  myActions: PropTypes.object.isRequired,
  appActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    account: state.account,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    myActions : bindActionCreators(MyActions, dispatch),
    appActions : bindActionCreators(AppActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoContainer)
