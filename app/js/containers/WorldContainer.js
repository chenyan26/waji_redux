import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as CircleActions from '../redux/actions/CircleActions';
import { bindActionCreators } from 'redux';

import * as AppActions from '../redux/actions/AppActions';

import {
  View
} from 'amazeui-touch';

import { World } from '../components'

class WorldContainer extends React.Component {
  componentWillMount() {
    const { appActions } = this.props;
    appActions.hideTabbar(false);
    appActions.hideNavLeft(true);
    appActions.setNavTitle('世界圈');
  }

  renderComponent = () => {
    const { appActions, circleActions, worlds} = this.props;
    return (
      <World circles={worlds} circleActions={circleActions} appActions={appActions}/>
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

WorldContainer.propTypes = {
  worlds: PropTypes.object.isRequired,
  circleActions: PropTypes.object.isRequired,
  appActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    worlds: state.worlds,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    circleActions : bindActionCreators(CircleActions, dispatch),
    appActions : bindActionCreators(AppActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorldContainer)
