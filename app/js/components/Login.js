import React from 'react';
import {
  List,
  Icon,
  Field
} from 'amazeui-touch';


import * as LoginActions from '../redux/actions/LoginActions';

export default class Login extends React.Component {

  handleSubmit = (e) => {
    // e.preventDefault(); //取消事件的默认动作
    // console.log(this.refs.usernameField.getValue());
    // console.log(this.refs.passwordField.getValue());
    const { dispatch } = this.props;
    dispatch(LoginActions.login(this.refs.usernameField.getValue(), this.refs.passwordField.getValue()))
    // dispatch(LoginActions.login('18508446612', '58061858'))
  };

  render() {
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



