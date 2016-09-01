import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as HomeActions from '../redux/actions/HomeActions';
import { bindActionCreators } from 'redux';

import * as AppActions from '../redux/actions/AppActions';

import { Buy, Sell } from '../components'

import {
  Container,
  List,
  View,
  Loader,
  Button,
} from 'amazeui-touch';
import {
  Link,
} from 'react-router';

class HomeTypeContainer extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.clickss = this.clickss.bind(this);
  // }

  componentWillMount() {
    const { appActions } = this.props;
    appActions.hideTabbar(true);
    appActions.hideNavLeft(false);
    appActions.setNavBackLink('/');
  }

  renderComponent = () => {
    const { appActions, homeActions} = this.props;
    const { type } = this.props.params;
    switch (type) {
      case 'buy':
        const { buys } = this.props;
        return (
          <Buy buys={buys} homeActions={homeActions} appActions={appActions}/>
        );
        break;
      case 'sell':
        const { sells } = this.props;
        return (
          <Sell sells={sells} homeActions={homeActions} appActions={appActions}/>
        );
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <View>
      <Container scrollable>
        {this.renderComponent()}
      </Container>
        </View>
    );
  }
}

HomeTypeContainer.propTypes = {
  buys: PropTypes.object.isRequired,
  sells: PropTypes.object.isRequired,
  homeActions: PropTypes.object.isRequired,
  appActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    buys: state.buys,
    sells: state.sells
  }
}

function mapDispatchToProps(dispatch) {
  return {
    homeActions : bindActionCreators(HomeActions, dispatch),
    appActions : bindActionCreators(AppActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeTypeContainer)
