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

export default class Rent extends React.Component {

  componentWillMount() {
    const { appActions, homeActions, rents} = this.props;
    appActions.setNavTitle('求租信息');

    //如没有 缓存 则 获取rents
    if (! rents.loadState.success) {
      homeActions.getRents();
    }
  }

  renderList = ()=> {
  const { rents } = this.props;

    if (rents.loadState.success) {
      const objArr = rents.rentArray;
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
                linkProps={{to: {pathname: `/detail/rent/${obj.id}`,query: {item: `${i}`}}}}
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

Rent.propTypes = {
  rents: PropTypes.object.isRequired,
  homeActions: PropTypes.object.isRequired,
  appActions: PropTypes.object.isRequired
};


