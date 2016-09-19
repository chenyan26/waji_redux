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

import { Login } from '../components';

class CircleContainer extends React.Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(AppActions.hideTabbar(false));
    dispatch(AppActions.hideNavLeft(true));
    dispatch(AppActions.setNavTitle('世界圈'));
  }

  renderItems() {
    const { login, dispatch } = this.props;
    if (login.loadState.success) {
      // 如果登录 -> Circle -> CircleDetail
      return (
        <Group noPadded>
          <List>
            <List.Item
              linkComponent={Link}
              linkProps={{to: {pathname: '/circle/friend'}}}
              title="朋友圈"
              key="py"
            />
            <List.Item
              linkComponent={Link}
              linkProps={{to: {pathname: '/circle/world'}}}
              title="世界圈"
              key="sj"
            />
          </List>
        </Group>
      );
    } else {
      // 没登录-> login的内容
      return (
        <Login dispatch={dispatch}/>
      );
    }
  }

  render() {
    return (
      <View>
        <Container scrollable>
          {this.renderItems()}
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
