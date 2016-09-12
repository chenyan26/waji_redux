import React, { PropTypes } from 'react';

import {
  Container,
  Button,
  Loader,
  Group,
  Slider
} from 'amazeui-touch';

export default class SellDetail extends React.Component {

  componentWillMount() {
    const { sells, detailActions, id} = this.props;

    if (! sells.loadState.success) {
      detailActions.getCarById(id);
    }
  }

    renderDetail = () => {
      const { sells, detail } = this.props;

      if (!(sells.loadState.success || detail.loadState.success)) {
        return(
          <Loader
            className="cy-empty-loader"
            amStyle="primary"/>
        )
      }

      if (sells.loadState.success) {
        const {item} = this.props;
        const objArr = sells.sellArray;
        const obj = objArr[item];
        return (
          <div>
            <Group>
              <Slider
                //onAction={onAction}
              >
                {obj.picture.map((picture, i) => {
                  return (
                    <Slider.Item
                      key={i}>
                      <img src={`http://eswjdg.com/${picture.image}`} />
                    </Slider.Item>
                  );
                })}
              </Slider>

              <p>品牌: {obj.brand}</p>
              <p>类型: {obj.cartype}</p>
              <p>价格: {obj.price}</p>
              <p>小时数: {obj.worktime}</p>
              <p>发布日期: {obj.inputtime}</p>
              <p>联系人: {obj.contacts}</p>
              <p>生产日期: {obj.madetime}</p>
              <p>地点: {obj.place}</p>
              <p>原车用途: {obj.application}</p>
              <p>车辆描述: {obj.description}</p>
            </Group>
            <Button amStyle="primary" block>下载App查看更多</Button>
          </div>
        )
      } else {
        const obj = detail.detailObj.data[0];
        return (
          <div>
            <Group>
              <Slider
                //onAction={onAction}
              >
                {obj.picture.map((picture, i) => {
                  return (
                    <Slider.Item
                      key={i}>
                      <img src={`http://eswjdg.com/${picture}`} />
                    </Slider.Item>
                  );
                })}
              </Slider>

              <p>品牌: {obj.brand}</p>
              <p>类型: {obj.cartype}</p>
              <p>价格: {obj.price} 万元</p>
              <p>小时数: {obj.worktime}</p>
              <p>发布日期: {obj.inputtime}</p>
              <p>联系人: {obj.contacts}</p>
              <p>生产日期: {obj.madetime}</p>
              <p>地点: {obj.place}</p>
              <p>原车用途: {obj.application}</p>
              <p>车辆描述: {obj.description}</p>
            </Group>
            <Button amStyle="primary" block>下载App查看更多</Button>
          </div>
        )
      }
    };

    render() {
      return (
        <Container scrollable>
          {this.renderDetail()}
        </Container>
      );
    }
}

SellDetail.propTypes = {
  sells: PropTypes.object.isRequired,
  detailActions: PropTypes.object.isRequired,
  item:PropTypes.string,
  id:PropTypes.string,
  detail:PropTypes.object.isRequired,
};

