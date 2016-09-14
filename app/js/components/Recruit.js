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

export default class Recruit extends React.Component {

  componentWillMount() {
    const { appActions, homeActions, recruits} = this.props;
    appActions.setNavTitle('招聘信息');

    if (! recruits.loadState.success) {
      homeActions.getRecruits();
    }
  }

  renderList = ()=> {
  const { recruits } = this.props;

    if (recruits.loadState.success) {
      const objArr = recruits.recruitArray;
      return (
        <div>
        <List>
          {objArr.map((obj, i) => {
            return (
              <List.Item
                title={obj.jobtype || '无'}
                subTitle={`${obj.salary} 元/月     ${obj.place}` }
                after={obj.inputtime}
                desc={obj.content || '无'}
                target="_blank"
                key={i}

                linkComponent={Link}
                linkProps={{to: {pathname: `/detail/recruit/${obj.id}`,query: {item: `${i}`}}}}
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

Recruit.propTypes = {
  recruits: PropTypes.object.isRequired,
  homeActions: PropTypes.object.isRequired,
  appActions: PropTypes.object.isRequired
};


