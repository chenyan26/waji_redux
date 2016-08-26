import React, { Component, PropTypes }  from 'react';
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

export default class My extends React.Component {

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
      onlyActiveOnIndex: true,
    };

    return (
      <View>
        <NavBar
          amStyle="primary"
          title="我的"
          rightNav= {[downloadNav]}
        />
        <Container scrollable>
          <Group

            noPadded
          >
            <List>
              {this.renderItems()}
            </List>
          </Group>
        </Container>
      </View>
    );
  }
}
