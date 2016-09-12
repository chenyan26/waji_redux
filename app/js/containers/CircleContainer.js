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

import { connect } from 'react-redux';
import * as AppActions from '../redux/actions/AppActions';

class CircleContainer extends React.Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(AppActions.hideTabbar(false));
    dispatch(AppActions.hideNavLeft(true));
    dispatch(AppActions.setNavTitle('朋友圈'));
  }

  renderItems() {
    const pages = [
      'world',
      'friend'
    ];

    const titles = [
      '世界圈',
      '朋友圈',
    ];

    const { login } = this.props;
    if (login.loadState.success) {
      // 如果登录 -> Circle -> CircleDetail
      return pages.map((item, index) => {
        return (

          <List.Item
            linkComponent={Link}
            // 传递 query 参数
            //linkProps={{to: {pathname: `/${item.toLowerCase()}`, query: {q: item}}}}
            linkProps={{to: {pathname: `/${item}`}}}
            //linkProps={{to: {pathname: '/login'}}}
            title={titles[index]}
            key={index}
          />
        );
      });
    } else {
      // 没登录-> login的内容
      return titles.map((item, index) => {
        return (
          <List.Item
            linkComponent={Link}
            linkProps={{to: {pathname: '/login'}}}
            title={item}
            key={index}
          />
        );
      });
    }
  }

  render() {
    return (
      <View>
        <Container scrollable>
          <Group>
            <List>
              {this.renderItems()}
            </List>
          </Group>
        </Container>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.login
  }
}

export default connect(mapStateToProps)(CircleContainer)
