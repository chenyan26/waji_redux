import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as CircleActions from '../redux/actions/CircleActions';
import { bindActionCreators } from 'redux';

import * as AppActions from '../redux/actions/AppActions';

import {
  View
} from 'amazeui-touch';

import { Friend } from '../components'

class CircleTypeContainer extends React.Component {
  componentWillMount() {
    const { appActions } = this.props;
    appActions.hideTabbar(true);
    appActions.hideNavLeft(false);
    appActions.setNavBackLink('/circle');
  }

  renderComponent = () => {
    const { appActions, circleActions, login, friends, worlds} = this.props;
    const { username } = login;
    const { type } = this.props.params;
    return (
      <Friend friends={friends} worlds={worlds}
              type={type} username={username}
              circleActions={circleActions} appActions={appActions}/>
    );
  };

  render() {
    return (
      <View>
        {this.renderComponent()}
      </View>
    );
  }
}

CircleTypeContainer.propTypes = {
  friends: PropTypes.object.isRequired,
  worlds: PropTypes.object.isRequired,
  login: PropTypes.object.isRequired,

  circleActions: PropTypes.object.isRequired,
  appActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    friends: state.friends,
    worlds: state.worlds,
    login: state.login,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    circleActions : bindActionCreators(CircleActions, dispatch),
    appActions : bindActionCreators(AppActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CircleTypeContainer)
