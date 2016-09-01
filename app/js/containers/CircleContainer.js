import React from 'react';
import {
  Container,
  List,
  Group,
  View,
} from 'amazeui-touch';
import {
  Link,
} from 'react-router';

class CircleContainer extends React.Component {

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

export default CircleContainer
