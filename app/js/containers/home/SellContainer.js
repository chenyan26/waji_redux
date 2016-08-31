import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as HomeActions from '../../redux/actions/HomeActions';
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
    subTitle: '价格: 40万元',
    after: '2012-9-25',
    desc: '湖南省 长沙市 天心区'
  },
  {
    title: '小松',
    subTitle: '价格: 40万元',
    after: '2012-9-25',
    desc: '湖南省 长沙市 天心区'
  },
  {
    title: '小松',
    subTitle: '价格: 40万元',
    after: '2012-9-25',
    desc: '湖南省 长沙市 天心区'
  },
  {
    title: '小松',
    subTitle: '价格: 40万元',
    after: '2012-9-25',
    desc: '湖南省 长沙市 天心区'
  },
  {
    title: '小松',
    subTitle: '价格: 40万元',
    after: '2012-9-25',
    desc: '湖南省 长沙市 天心区'
  },
  {
    title: '小松',
    subTitle: '价格: 40万元',
    after: '2012-9-25',
    desc: '湖南省 长沙市 天心区'
  },
  {
    title: '小松',
    subTitle: '价格: 40万元',
    after: '2012-9-25',
    desc: '湖南省 长沙市 天心区'
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

  clickss = ()=> {
    const { homeActions } = this.props;
    homeActions.getSells()
  };

  render() {
    // const {account} = this.props;

    return (
      <View>
        <button onClick={this.clickss}>点击</button>
      <Container scrollable>
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
  sells: PropTypes.object.isRequired,
  homeActions: PropTypes.object.isRequired,
  appActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    sells: state.sells
  }
}

function mapDispatchToProps(dispatch) {
  return {
    homeActions : bindActionCreators(HomeActions, dispatch),
    appActions : bindActionCreators(AppActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SellContainer)
