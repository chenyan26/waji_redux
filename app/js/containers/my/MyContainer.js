import React from 'react';

import { connect } from 'react-redux';
import * as AppActions from '../../redux/actions/AppActions';

import {
  Container,
  List,
  Group,
  View,
} from 'amazeui-touch';
import {
  Link,
} from 'react-router';

class MyContainer extends React.Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(AppActions.hideTabbar(false));
    dispatch(AppActions.hideNavLeft(true));
    dispatch(AppActions.setNavTitle('我的'));
  }

  renderItems() {
    const pages = [
      'info',
      'setting',
    ];

    const titles = [
      '个人信息',
      '设置',
    ];

    return pages.map((item, index) => {
      return (
        <List.Item
          linkComponent={Link}
          // 传递 query 参数
          linkProps={{to: {pathname: `/my/${item}`, query: {type: titles[index]}}}}
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
          <Group noPadded> {/*是否移除分组内容的 padding*/}
            <List>
              {this.renderItems()}
            </List>
          </Group>
        </Container>
      </View>
    );
  }
}

export default connect()(MyContainer)
