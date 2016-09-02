import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as HomeActions from '../redux/actions/HomeActions';
import { bindActionCreators } from 'redux';

import * as AppActions from '../redux/actions/AppActions';

import {
  Container,
  View,
  Button,
  Loader,
  Group,
} from 'amazeui-touch';
import {
  Link,
} from 'react-router';


class BuyDetailContainer extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.clickss = this.clickss.bind(this);
  // }

  componentWillMount() {
    const {appActions, homeActions } = this.props;
    appActions.hideTabbar(true);
    appActions.hideNavLeft(false);
    appActions.setNavBackLink('/home/buy');
    appActions.setNavTitle('详细信息');

    const { item } = this.props.location.query;
    const { buys } = this.props;

    if (buys.loadState.success) {
      homeActions.setBuyItem(item);
    } else {
      //根据 id 请求 params.id
      const { params } = this.props;
    }
  }

    renderDetail = () => {
      const {buys} = this.props;

      if (buys.loadState.success) {
        const buyArr = buys.buyArray;
        const buy = buyArr[buys.buyItem];
        return (
          <Container scrollable>
            <Group>
              <p>品牌: {buy.brand}</p>
              <p>联系人: {buy.contacts}</p>
              <p>型号: {buy.cartype}</p>
              <p>发布日期: {buy.inputtime}</p>
              <p>联系电话: {buy.phone}</p>
              <p>地点: {buy.place}</p>
              <p>买车要求: {buy.description}</p>
            </Group>
            <Button amStyle="primary" block>下载App查看更多</Button>
          </Container>
        )
      } else {
        return(
          <Loader
            className="cy-empty-loader"
            amStyle="primary"/>
        )
      }
    };

    render() {
      return (
        <View>
          {this.renderDetail()}
        </View>
      );
    }
}

BuyDetailContainer.propTypes = {
  buys: PropTypes.object.isRequired,
  homeActions: PropTypes.object.isRequired,
  appActions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    buys: state.buys
  }
}

function mapDispatchToProps(dispatch) {
  return {
    homeActions : bindActionCreators(HomeActions, dispatch),
    appActions : bindActionCreators(AppActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyDetailContainer)
