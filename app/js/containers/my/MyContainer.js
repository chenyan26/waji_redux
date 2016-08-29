import React from 'react';

import { connect } from 'react-redux';
import * as AppActions from '../../redux/actions/AppActions';

import {
  Container,
  List,
  NavBar,
  Group,
  View,
} from 'amazeui-touch';
import {
  Link,
} from 'react-router';

class MyContainer extends React.Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(AppActions.hideTabbar(false))
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
    const downloadNav = {
      component: 'a', // 默认为 `a`
      title: '下载App',
      href: 'http://fir.im/wwkj',
    };

    return (
      <View>
        <NavBar
          amStyle="primary"
          title="我的"
          rightNav= {[downloadNav]}
        />
        <Container>
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
