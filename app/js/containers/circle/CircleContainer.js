import React from 'react';
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

export default class CircleContainer extends React.Component {

  renderItems() {
    const pages = [
      '世界圈',
      '朋友圈',
    ];

    return pages.map((item, index) => {
      return (

        <List.Item
          linkComponent={Link}
          // 传递 query 参数
          linkProps={{to: {pathname: `/${item.toLowerCase()}`, query: {q: item}}}}
          title={item}
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
          title="世界圈"
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
