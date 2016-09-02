import React, { PropTypes } from 'react';

import {
  Container,
  List,
  Loader,
  Button,
} from 'amazeui-touch';
import {
  Link,
} from 'react-router';

export default class Sell extends React.Component {

  componentWillMount() {
    const { appActions, homeActions, sells} = this.props;
    appActions.setNavTitle('卖车信息');

    //如没有 缓存 则 获取buys
    if (! sells.loadState.success) {
      homeActions.getSells();
    }
  }

  renderList = ()=> {
  const { sells } = this.props;

    if (sells.loadState.success) {
      const sellArr = sells.sellArray;
      return (
        <div>
          <List>
            {sellArr.map((sell, i) => {
              const img80 = <img width="80" src={`http://eswjdg.com/${(sell.picture)[0].picthumb}`} />;
              return (
                <List.Item
                  title={sell.brand}
                  subTitle={`价格: ${sell.price} 万元`}
                  after={sell.inputtime}
                  desc={sell.place}
                  target="_blank"
                  media={img80}
                  key={i}
                  linkComponent={Link}
                  linkProps={{to: {pathname: `/detail/sell/${sell.id}`,query: {item: `${i}`}}}}
                />
              );
            })}
          </List>
          <Button amStyle="primary" block>下载App查看更多</Button>
        </div>
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
      <Container scrollable>
        {this.renderList()}
      </Container>
    );
  }
}

Sell.propTypes = {
  sells: PropTypes.object.isRequired,
  homeActions: PropTypes.object.isRequired,
  appActions: PropTypes.object.isRequired
};


