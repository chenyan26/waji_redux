import React, { PropTypes } from 'react';

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
  }];

export default class Sell extends React.Component {

  componentWillMount() {
    const { appActions } = this.props;
    appActions.setNavTitle('卖车信息');
  }

  clickss = ()=> {
    const { homeActions } = this.props;
    homeActions.getSells()
  };

  render() {
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

Sell.propTypes = {
  sells: PropTypes.object.isRequired,
  homeActions: PropTypes.object.isRequired,
  appActions: PropTypes.object.isRequired
};

