import React, { PropTypes } from 'react';

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

export default class Buy extends React.Component {

  componentWillMount() {
    const { appActions, homeActions, buys} = this.props;
    appActions.setNavTitle('买车信息');

    //如没有 缓存 则 获取buys
    if (! buys.loadState.success) {
      homeActions.getBuys();
    }
  }

  renderList = ()=> {
  const { buys } = this.props;
  const buyArr = buys.buyArray;

    if (buys.loadState.success) {
      return (
        <div>
        <List>
          {buyArr.map((buy, i) => {
            return (
              <List.Item
                title={buy.brand}
                subTitle={buy.cartype}
                after={buy.inputtime}
                desc={buy.place}
                target="_blank"
                key={i}

                linkComponent={Link}
                linkProps={{to: {pathname: `/buy/${buy.id}`,query: {item: `${i}`}}}}
              />
            );
          })}
        </List>
          <Button amStyle="primary" block>下载App查看更多</Button>
        </div>
      )
    }
    if(buys.loadState.loading) {
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
      <Container scrollable>
        {this.renderList()}
      </Container>
        </View>
    );
  }
}

Buy.propTypes = {
  buys: PropTypes.object.isRequired,
  homeActions: PropTypes.object.isRequired,
  appActions: PropTypes.object.isRequired
};

