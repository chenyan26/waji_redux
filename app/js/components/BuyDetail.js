import React, { PropTypes } from 'react';
import {
  Container,
  Loader,
  Group,
} from 'amazeui-touch';

import { MyFooter } from '../components';

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

      var obj;
      if (buys.loadState.success) {
        const {item} = this.props;
        const objArr = buys.buyArray;
        obj = objArr[item];
      }else {
        obj = detail.detailObj.data[0];
      }
      return (
        <div>
          <Group>
            <p>品牌: {obj.brand}</p>
            <p>联系人: {obj.contacts}</p>
            <p>型号: {obj.cartype}</p>
            <p>发布日期: {obj.inputtime}</p>
            <p>联系电话: {obj.phone}</p>
            <p>地点: {obj.place}</p>
            <p>买车要求: {obj.description}</p>
          </Group>
          <MyFooter />
        </div>
      )
    };

    render() {
      return (
        <Container>
          {this.renderDetail()}
        </Container>
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

