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

export default class Home extends React.Component {
  static defaultProps = {
    transition: 'rfr'
  };

  renderItems() {
    const pages = [
      'sell',
      'buy',
      'lend',
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
          linkProps={{to: {pathname: `/home/${item}`, query: {type: titles[index]}}}}
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
          title="挖挖"
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
