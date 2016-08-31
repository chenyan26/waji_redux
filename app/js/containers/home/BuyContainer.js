import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as HomeActions from '../../redux/actions/HomeActions';
import { bindActionCreators } from 'redux';

import * as AppActions from '../../redux/actions/AppActions';

import {
  Container,
  List,
  View,
  Loader,
  Button,
} from 'amazeui-touch';
import {
  Link,
} from 'react-router';

const albums = [
  {
    title: '卡特',
    subTitle: '大型挖掘机',
    after: '2012-9-25',
    desc: '北京市 朝阳区'
  },
  {
    title: '卡特',
    subTitle: '大型挖掘机',
    after: '2012-9-25',
    desc: '北京市 朝阳区'
  }
];

let mode = {
  brand :'',
  contacts:'',
  cartype:'',
  inputtime:'',
  phone:'',
  place:'',
  description:''
};

class BuyContainer extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.clickss = this.clickss.bind(this);
  // }

  componentWillMount() {
    const { appActions, homeActions, buys} = this.props;
    appActions.hideTabbar(true);
    appActions.hideNavLeft(false);
    appActions.setNavBackLink('/');
    appActions.setNavTitle('买车信息');

    //如没有 缓存 则 获取buys
    if (! buys.buyArray) {
      homeActions.getBuys();
    }
  }

  renderList = ()=> {
  const { buys } = this.props;
  const buyArr = buys.buyArray;

    if (buys.loadState.success) {
      return (
        <div>
        <List>
          {buyArr.map((buy, i) => {
            return (
              <List.Item
                title={buy.brand}
                subTitle={buy.cartype}
                after={buy.inputtime}
                desc={buy.place}
                target="_blank"
                key={i}
              />
            );
          })}
        </List>
          <Button amStyle="primary" block>加载更多</Button>
        </div>
      )
    }
    if(buys.loadState.loading) {
      return(
        <Loader
          className="cy-empty-loader"
          amStyle="primary"/>
      )
    }
  };

  render() {
    return (
      <View>
      <Container scrollable>
        {this.renderList()}
      </Container>
        </View>
    );
  }
}

BuyContainer.propTypes = {
  buys: PropTypes.object.isRequired,
  homeActions: PropTypes.object.isRequired,
  appActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    buys: state.buys
  }
}

function mapDispatchToProps(dispatch) {
  return {
    homeActions : bindActionCreators(HomeActions, dispatch),
    appActions : bindActionCreators(AppActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyContainer)
