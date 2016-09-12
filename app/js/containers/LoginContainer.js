import React from 'react';

import { connect } from 'react-redux';
import * as AppActions from '../redux/actions/AppActions';
import * as LoginActions from '../redux/actions/LoginActions';

import {
  Container,
  List,
  View,
  Field,
  Icon
} from 'amazeui-touch';
import {
  Link,
} from 'react-router';

class LoginContainer extends React.Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(AppActions.hideTabbar(false));
    dispatch(AppActions.setNavTitle('登录'));
  }

  handleSubmit = (e) => {
    // e.preventDefault(); //取消事件的默认动作
    // console.log(this.refs.usernameField.getValue());
    // console.log(this.refs.passwordField.getValue());
    const { dispatch } = this.props;
    dispatch(LoginActions.login(this.refs.usernameField.getValue(), this.refs.passwordField.getValue()))
  };

  render() {
    return (
      <View>
        <Container scrollable>
            <List>
              <List.Item
                key={1}
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
                key={2}
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
        </Container>
      </View>
    );
  }
}

export default connect()(LoginContainer)

