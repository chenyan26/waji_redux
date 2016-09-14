import React from 'react';
import {
  Container,
  List,
  Group,
  View,
  Icon,
  Field
} from 'amazeui-touch';
import {
  Link,
} from 'react-router';

import { connect } from 'react-redux';
import * as AppActions from '../redux/actions/AppActions';
import * as LoginActions from '../redux/actions/LoginActions';


class CircleContainer extends React.Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(AppActions.hideTabbar(false));
    dispatch(AppActions.hideNavLeft(true));

    dispatch(AppActions.setNavTitle('世界圈'));
  }

  handleSubmit = (e) => {
    // e.preventDefault(); //取消事件的默认动作
    // console.log(this.refs.usernameField.getValue());
    // console.log(this.refs.passwordField.getValue());
    const { dispatch } = this.props;
    // dispatch(LoginActions.login(this.refs.usernameField.getValue(), this.refs.passwordField.getValue()))
    dispatch(LoginActions.login('18508446612', '58061858'))
  };

  renderItems() {
    const { login } = this.props;
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
        <div>
          <List>
            <List.Item
              key="zh"
              nested="input"
              media={<Icon name="person" />}>
              <Field
                label="账号"
                type="text"
                placeholder= "请输入账号"
                ref="usernameField"
              />
            </List.Item>

            <List.Item
              className = "cy_list_item"
              key="mm"
              nested="input"
              media={<Icon name="info" />}>
              <Field
                label="密码"
                type="text"
                placeholder= "请输入密码"
                ref="passwordField"
              />
            </List.Item>
          </List>
          <Field
            value="提交"
            type="submit"
            amStyle="success"
            block
            onClick={this.handleSubmit}
          />
        </div>
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
