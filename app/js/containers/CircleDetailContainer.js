import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as DetailActions from '../redux/actions/DetailActions';
import { bindActionCreators } from 'redux';

import * as AppActions from '../redux/actions/AppActions';

import { FriendDetail } from '../components'

import {
  View,
} from 'amazeui-touch';

class CircleDetailContainer extends React.Component {

  componentWillMount() {
    const { appActions } = this.props;
    appActions.hideTabbar(true);
    appActions.hideNavLeft(false);
    appActions.setNavTitle('详细信息');
    const { type } = this.props.params;
    appActions.setNavBackLink(`/circle/${type}`);
  }

  renderComponent = () => {
    const { detail, detailActions, friends, worlds, params } = this.props;

    const { item, catid} = this.props.location.query;

    let circles;
    if (params.type == 'friend') {
      circles = friends;
    } else {
      circles = worlds;
    }
    return (
      <FriendDetail circles={circles} item={item} catid={catid} id={params.id}
                    detail={detail} detailActions={detailActions}/>
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

CircleDetailContainer.propTypes = {
  friends: PropTypes.object.isRequired,
  worlds: PropTypes.object.isRequired,
  detail: PropTypes.object.isRequired,

  appActions: PropTypes.object.isRequired,
  detailActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    friends: state.friends,
    worlds: state.worlds,
    detail:state.detail
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions : bindActionCreators(AppActions, dispatch),
    detailActions : bindActionCreators(DetailActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CircleDetailContainer)
