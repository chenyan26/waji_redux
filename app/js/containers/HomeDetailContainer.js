import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as DetailActions from '../redux/actions/DetailActions';
import { bindActionCreators } from 'redux';

import * as AppActions from '../redux/actions/AppActions';

import { BuyDetail, SellDetail } from '../components'

import {
  View,
} from 'amazeui-touch';

class HomeDetailContainer extends React.Component {

  componentWillMount() {
    const { appActions } = this.props;
    appActions.hideTabbar(true);
    appActions.hideNavLeft(false);
    appActions.setNavTitle('详细信息');
    const { type } = this.props.params;
    appActions.setNavBackLink(`/home/${type}`);
  }

  renderComponent = () => {
    const { detail, detailActions } = this.props;

    const { item } = this.props.location.query;
    const { params } = this.props;

    switch (params.type) {
      case 'buy':
        const { buys } = this.props;
        return (
          <BuyDetail buys={buys} item={item} id={params.id}
                     detail={detail} detailActions={detailActions}/>
        );
        break;
      case 'sell':
        const { sells } = this.props;
        return (
          <SellDetail sells={sells} item={item} id={params.id}
                      detail={detail} detailActions={detailActions}/>
        );
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <View>
        {this.renderComponent()}
      </View>
    );
  }
}

HomeDetailContainer.propTypes = {
  buys: PropTypes.object.isRequired,
  sells: PropTypes.object.isRequired,
  detail: PropTypes.object.isRequired,
  appActions: PropTypes.object.isRequired,
  detailActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    buys: state.buys,
    sells: state.sells,
    detail:state.detail
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions : bindActionCreators(AppActions, dispatch),
    detailActions : bindActionCreators(DetailActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeDetailContainer)
