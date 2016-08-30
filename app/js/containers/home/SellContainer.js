import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import * as MyActions from '../../redux/actions/MyActions';
import { bindActionCreators } from 'redux';

import * as AppActions from '../../redux/actions/AppActions';

import {
  Container,
  List,
  View
} from 'amazeui-touch';
import {
  Link,
} from 'react-router';

const img80 = <img width="80" src="http://lorempixel.com/160/160/people/" />;
const img40 = <img width="48" src="http://lorempixel.com/160/160/people/" />;

const albums = [
  {
    title: '小松',
    subTitle: '小时数: 400',
    after: '2012-9-25',
    desc: '价格: 40万元'
  },
  {
    title: '小松',
    subTitle: '小时数: 400',
    after: '2012-9-25',
    desc: '价格: 40万元'
  },
  {
    title: '小松',
    subTitle: '小时数: 400',
    after: '2012-9-25',
    desc: '价格: 40万元'
  },
  {
    title: '小松',
    subTitle: '小时数: 400',
    after: '2012-9-25',
    desc: '价格: 40万元'
  },
  {
    title: '小松',
    subTitle: '小时数: 400',
    after: '2012-9-25',
    desc: '价格: 40万元'
  },
  {
    title: '小松',
    subTitle: '小时数: 400',
    after: '2012-9-25',
    desc: '价格: 40万元'
  },
];

class SellContainer extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.clickss = this.clickss.bind(this);
  // }

  componentWillMount() {
    const { appActions } = this.props;
    appActions.hideTabbar(true);
    appActions.hideNavLeft(false);
    appActions.setNavBackLink('/');
    appActions.setNavTitle('卖车信息');
  }

  render() {
    // const {account} = this.props;

    return (
      <View>
      <Container scrollable
                 {...this.props}>
          <List>
            {albums.map((album, i) => {
              return (
                <List.Item
                  {...album}
                  target="_blank"
                  media={img80}
                  href = {null}
                  key={i}
                  linkComponent={Link}
                  linkProps={{to: {pathname: '/my'}}}
                />
              );
            })}
          </List>
      </Container>
        </View>
    );
  }
}

SellContainer.propTypes = {
  // account: PropTypes.object.isRequired,
  // myActions: PropTypes.object.isRequired,
  appActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    account: state.account
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // myActions : bindActionCreators(MyActions, dispatch),
    appActions : bindActionCreators(AppActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SellContainer)
