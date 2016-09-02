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
        const sellArr = sells.sellArray;
        const sell = sellArr[item];
        return (
          <div>
            <Group>
              <Slider
                //onAction={onAction}
              >
                {sell.picture.map((picture, i) => {
                  return (
                    <Slider.Item
                      key={i}>
                      <img src={`http://eswjdg.com/${picture.image}`} />
                    </Slider.Item>
                  );
                })}
              </Slider>

              <p>品牌: {sell.brand}</p>
              <p>价格: {sell.price}</p>
              <p>小时数: {sell.worktime}</p>
              <p>发布日期: {sell.inputtime}</p>
              <p>联系人: {sell.contacts}</p>
              <p>生产日期: {sell.madetime}</p>
              <p>地点: {sell.place}</p>
              <p>原车用途: {sell.application}</p>
              <p>车辆描述: {sell.description}</p>
            </Group>
            <Button amStyle="primary" block>下载App查看更多</Button>
          </div>
        )
      } else {
        const sell = detail.detailObj.data[0];
        return (
          <div>
            <Group>
              <Slider
                //onAction={onAction}
              >
                {sell.picture.map((picture, i) => {
                  return (
                    <Slider.Item
                      key={i}>
                      <img src={`http://eswjdg.com/${picture}`} />
                    </Slider.Item>
                  );
                })}
              </Slider>

              <p>品牌: {sell.brand}</p>
              <p>价格: {sell.price} 万元</p>
              <p>小时数: {sell.worktime}</p>
              <p>发布日期: {sell.inputtime}</p>
              <p>联系人: {sell.contacts}</p>
              <p>生产日期: {sell.madetime}</p>
              <p>地点: {sell.place}</p>
              <p>原车用途: {sell.application}</p>
              <p>车辆描述: {sell.description}</p>
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

