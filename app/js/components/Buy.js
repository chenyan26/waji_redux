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

export default class Buy extends React.Component {

  componentWillMount() {
    const { appActions, homeActions, buys} = this.props;
    appActions.setNavTitle('买车信息');

    //如没有 缓存 则 获取buys
    if (! buys.loadState.success) {
      console.log('dddddd');
      homeActions.getBuys();
    }
  }

  renderList = ()=> {
  const { buys } = this.props;

    if (buys.loadState.success) {
      const objArr = buys.buyArray;
      return (
        <div>
        <List>
          {objArr.map((obj, i) => {
            return (
              <List.Item
                title={obj.brand || "无"}
                subTitle={obj.cartype || "无"}
                after={obj.inputtime}
                desc={obj.place || "无"}
                target="_blank"
                key={i}

                linkComponent={Link}
                linkProps={{to: {pathname: `/detail/buy/${obj.id}`,query: {item: `${i}`}}}}
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

Buy.propTypes = {
  buys: PropTypes.object.isRequired,
  homeActions: PropTypes.object.isRequired,
  appActions: PropTypes.object.isRequired
};


