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

export default class Lease extends React.Component {

  componentWillMount() {
    const { appActions, homeActions, leases} = this.props;
    appActions.setNavTitle('出租信息');

    //如没有 缓存 则 获取buys
    if (! leases.loadState.success) {
      homeActions.getLeases();
    }
  }

  renderList = ()=> {
  const { leases } = this.props;

    if (leases.loadState.success) {
      const objArr = leases.leaseArray;
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
                  linkProps={{to: {pathname: `/detail/lease/${obj.id}`,query: {item: `${i}`}}}}
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

Lease.propTypes = {
  leases: PropTypes.object.isRequired,
  homeActions: PropTypes.object.isRequired,
  appActions: PropTypes.object.isRequired
};


