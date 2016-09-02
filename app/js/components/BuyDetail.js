import React, { PropTypes } from 'react';

import {
  Container,
  View,
  Button,
  Loader,
  Group,
} from 'amazeui-touch';

export default class BuyDetail extends React.Component {

  componentWillMount() {
    const { buys ,detailActions, id} = this.props;

    if (! buys.loadState.success) {
      //根据 id 请求
      detailActions.getCarById(id);
    }
  }

    renderDetail = () => {
      const {buys, detail} = this.props;

      if (!(buys.loadState.success || detail.loadState.success)) {
        return(
          <Loader
            className="cy-empty-loader"
            amStyle="primary"/>
        )
      }

      var buy;
      if (buys.loadState.success) {
        const {item} = this.props;
        const buyArr = buys.buyArray;
        buy = buyArr[item];
      }else {
        buy = detail.detailObj.data[0];
      }
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
    };

    render() {
      return (
        <View>
          {this.renderDetail()}
        </View>
      );
    }
}

BuyDetail.propTypes = {
  buys: PropTypes.object.isRequired,
  detailActions: PropTypes.object.isRequired,
  item:PropTypes.string,
  id:PropTypes.string,
  detail:PropTypes.object.isRequired,
};

