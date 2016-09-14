import React, { PropTypes } from 'react';
import {
  Container,
  List,
  Loader,
} from 'amazeui-touch';
import {
  Link,
} from 'react-router';

import { MyFooter } from '../components';

export default class Sell extends React.Component {

  componentWillMount() {
    const { appActions, homeActions, sells} = this.props;
    appActions.setNavTitle('卖车信息');

    //如没有 缓存 则 获取sells
    if (! sells.loadState.success) {
      homeActions.getSells();
    }
  }

  renderList = ()=> {
  const { sells } = this.props;

    if (sells.loadState.success) {
      const objArr = sells.sellArray;
      return (
        <div>
          <List>
            {objArr.map((obj, i) => {
              const img80 = <img width="80" src={`http://eswjdg.com/${(obj.picture)[0].picthumb}`} />;
              return (
                <List.Item
                  title={obj.brand || "无"}
                  subTitle={`价格: ${obj.price} 万元` || "无"}
                  after={obj.inputtime}
                  desc={obj.place || "无"}
                  target="_blank"
                  media={img80}
                  key={i}
                  linkComponent={Link}
                  linkProps={{to: {pathname: `/detail/sell/${obj.id}`,query: {item: `${i}`}}}}
                />
              );
            })}
          </List>
          <MyFooter />
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


