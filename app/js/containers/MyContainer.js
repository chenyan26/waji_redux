import React from 'react';

import { connect } from 'react-redux';
import * as AppActions from '../redux/actions/AppActions';

import {
  Container,
  List,
  Group,
  View,
} from 'amazeui-touch';

import { Login, MyFooter } from '../components';

class MyContainer extends React.Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(AppActions.hideTabbar(false));
    dispatch(AppActions.hideNavLeft(true));
    dispatch(AppActions.setNavTitle('个人信息'));
  }

  renderItems() {
    const { login, dispatch } = this.props;
    if (login.loadState.success) {
      const data = login.data;
      const img = <img width="60" src={`http://eswjdg.com/${data.hdimg}`} />;
      //登录了
      return (
        <div>
          <Group noPadded> {/*是否移除分组内容的 padding*/}
            <List>
              <List.Item
                title={`昵称:  ${login.nickname}`}
                subTitle={`账号:  ${login.username}`}
                target="_blank"
                media={img}
              />
              <List.Item title={`性别:  ${data.sex}`} />
              <List.Item title={`地区:  ${data.address}`} />
              <List.Item title={`个性签名:  ${data.sign}`} />
            </List>
          </Group>
          <MyFooter />
        </div>
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

export default connect(mapStateToProps)(MyContainer)
