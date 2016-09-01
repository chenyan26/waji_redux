import React from 'react';

import { connect } from 'react-redux';
import * as AppActions from '../redux/actions/AppActions';

import {
  Container,
  List,
  Group,
  View,
} from 'amazeui-touch';
import {
  Link,
} from 'react-router';

class HomeContainer extends React.Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(AppActions.hideTabbar(false));
    dispatch(AppActions.hideNavLeft(true));
    dispatch(AppActions.setNavTitle('首页'));
  }

  renderItems() {
    const pages = [
      'sell',
      'buy',
      'lease',
      'rent',
      'hire',
      'apply',
    ];

    const titles = [
      '卖车信息',
      '买车信息',
      '出租信息',
      '求租信息',
      '招聘信息',
      '求职信息',
    ];

    return pages.map((item, index) => {
      return (

        <List.Item
          linkComponent={Link}
          // 传递 query 参数
          //linkProps={{to: {pathname: `/home/${item}`, query: {type: titles[index]}}}}
          linkProps={{to: {pathname: `/home/${item}`}}}
          title={titles[index]}
          key={index}
        />
      );
    });
  }

  render() {
    return (
      <View>
        <Container scrollable>
          <Group noPadded>
            <List>
              {this.renderItems()}
            </List>
          </Group>
        </Container>
      </View>
    );
  }
}

export default connect()(HomeContainer)
