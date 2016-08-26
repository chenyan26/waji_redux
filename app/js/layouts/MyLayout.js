import React, { PropTypes } from 'react';

import {
  View,
  NavBar,
} from 'amazeui-touch';
import {
  Link,
} from 'react-router';

class MyLayout extends React.Component {
  render() {
    const downloadNav = {
      component: 'a', // 默认为 `a`
      title: '下载App',
      href: 'http://fir.im/wwkj',
      onlyActiveOnIndex: true,
    };

    const backNav = {
      component: Link,
      icon: 'left-nav',
      // title: '返回',
      to: '/my',
      onlyActiveOnIndex: true,
    };

    const { title } = this.props

    return (
      <View>
        <NavBar
          title={title}
          leftNav={[backNav]}
          rightNav= {[downloadNav]}
          amStyle="primary"
        />
      </View>
    );
  }
}

MyLayout.propTypes = {
  title: PropTypes.string.isRequired
}

export default MyLayout
