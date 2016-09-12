import React, { PropTypes } from 'react';

import {
  Container,
  Button,
  Loader,
  Group,
} from 'amazeui-touch';

export default class RentDetail extends React.Component {

  componentWillMount() {
    const { rents ,detailActions, id} = this.props;

    if (! rents.loadState.success) {
      //根据 id 请求
      detailActions.getCarById(id);
    }
  }

    renderDetail = () => {
      const {rents, detail} = this.props;

      if (!(rents.loadState.success || detail.loadState.success)) {
        return(
          <Loader
            className="cy-empty-loader"
            amStyle="primary"/>
        )
      }

      var obj;
      if (rents.loadState.success) {
        const {item} = this.props;
        const objArr = rents.rentArray;
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
          <Button amStyle="primary" block>下载App查看更多</Button>
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

RentDetail.propTypes = {
  rents: PropTypes.object.isRequired,
  detailActions: PropTypes.object.isRequired,
  item:PropTypes.string,
  id:PropTypes.string,
  detail:PropTypes.object.isRequired,
};

