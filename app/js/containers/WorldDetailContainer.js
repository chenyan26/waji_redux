import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as DetailActions from '../redux/actions/DetailActions';
import { bindActionCreators } from 'redux';

import * as AppActions from '../redux/actions/AppActions';

import { WorldDetail } from '../components'

import {
  View,
} from 'amazeui-touch';

class WorldDetailContainer extends React.Component {

  componentWillMount() {
    const { appActions } = this.props;
    appActions.hideTabbar(true);
    appActions.hideNavLeft(false);
    appActions.setNavTitle('详细信息');
    appActions.setNavBackLink(`/circle`);
  }

  renderComponent = () => {
    const { detail, detailActions, worlds, params } = this.props;

    const { item, catid} = this.props.location.query;
    return (
      <WorldDetail circles={worlds} item={item} catid={catid} id={params.id}
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

WorldDetailContainer.propTypes = {
  worlds: PropTypes.object.isRequired,
  detail: PropTypes.object.isRequired,

  appActions: PropTypes.object.isRequired,
  detailActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(WorldDetailContainer)
