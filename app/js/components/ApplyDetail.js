import React, { PropTypes } from 'react';
import {
  Container,
  Loader,
  Group,
} from 'amazeui-touch';

import { MyFooter } from '../components';

export default class ApplyDetail extends React.Component {

  componentWillMount() {
    const { applys ,detailActions, id} = this.props;

    if (! applys.loadState.success) {
      //根据 id 请求
      detailActions.getApplyById(id);
    }
  }

    renderDetail = () => {
      const {applys, detail} = this.props;

      if (!(applys.loadState.success || detail.loadState.success)) {
        return(
          <Loader
            className="cy-empty-loader"
            amStyle="primary"/>
        )
      }

      var obj;
      if (applys.loadState.success) {
        const {item} = this.props;
        const objArr = applys.applyArray;
        obj = objArr[item];
      }else {
        obj = detail.detailObj.data[0];
      }
      return (
        <div>
          <Group>
            <p>职位: {obj.jobtype}</p>
            <p>姓名: {obj.name}</p>
            <p>工资: {obj.salary}</p>
            <p>学历 {obj.educational}</p>
            <p>工作经验: {obj.jobback}</p>
            <p>地点: {obj.workplace}</p>
            <p>发布日期: {obj.inputtime}</p>
            <p>求职者自述: {obj.content}</p>
          </Group>
          <MyFooter />
        </div>
      )
    };

    render() {
      return (
        <Container>
          {this.renderDetail()}
        </Container>
      );
    }
}


ApplyDetail.propTypes = {
  applys: PropTypes.object.isRequired,
  detailActions: PropTypes.object.isRequired,
  item:PropTypes.string,
  id:PropTypes.string,
  detail:PropTypes.object.isRequired,
};

