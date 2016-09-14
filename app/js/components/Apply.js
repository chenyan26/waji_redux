import React, { PropTypes } from 'react';
import {
  Container,
  List,
  Loader,
} from 'amazeui-touch';
import {
  Link,
} from 'react-router';

import { MyFooter } from '../components';

export default class Apply extends React.Component {

  componentWillMount() {
    const { appActions, homeActions, applys} = this.props;
    appActions.setNavTitle('求职信息');

    if (! applys.loadState.success) {
      homeActions.getApplys();
    }
  }

  renderList = ()=> {
  const { applys } = this.props;

    if (applys.loadState.success) {
      const objArr = applys.applyArray;
      return (
        <div>
        <List>
          {objArr.map((obj, i) => {
            return (
              <List.Item
                title={obj.jobtype || '无'}
                subTitle={`${obj.salary} 元/月     ${obj.workplace}` }
                after={obj.inputtime}
                desc={obj.content || '无'}
                target="_blank"
                key={i}

                linkComponent={Link}
                linkProps={{to: {pathname: `/detail/apply/${obj.id}`,query: {item: `${i}`}}}}
              />
            );
          })}
        </List>
          <MyFooter />
        </div>
      )
    } else {
      return(
        <Loader
          className="cy-empty-loader"
          amStyle="primary"/>
      )
    }
  };

  render() {
    return (
      <Container scrollable>
        {this.renderList()}
      </Container>
    );
  }
}

Apply.propTypes = {
  applys: PropTypes.object.isRequired,
  homeActions: PropTypes.object.isRequired,
  appActions: PropTypes.object.isRequired
};


