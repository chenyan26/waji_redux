import React, { PropTypes } from 'react';
import {
  Container,
  Loader,
  Group,
} from 'amazeui-touch';

import { MyFooter } from '../components';

export default class RecruitDetail extends React.Component {

  componentWillMount() {
    const { recruits ,detailActions, id} = this.props;

    if (! recruits.loadState.success) {
      //根据 id 请求
      detailActions.getRecruitById(id);
    }
  }

    renderDetail = () => {
      const {recruits, detail} = this.props;

      if (!(recruits.loadState.success || detail.loadState.success)) {
        return(
          <Loader
            className="cy-empty-loader"
            amStyle="primary"/>
        )
      }

      var obj;
      if (recruits.loadState.success) {
        const {item} = this.props;
        const objArr = recruits.recruitArray;
        obj = objArr[item];
      }else {
        obj = detail.detailObj.data[0];
      }
      return (
        <div>
          <Group>
            <p>职位: {obj.jobtype}</p>
            <p>公司名称: {obj.companyname}</p>
            <p>工资: {obj.salary}</p>
            <p>学历要求: {obj.educational}</p>
            <p>工作经验: {obj.workback}</p>
            <p>地点: {obj.place}</p>
            <p>发布日期: {obj.inputtime}</p>
            <p>公司介绍: {obj.content}</p>
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

RecruitDetail.propTypes = {
  recruits: PropTypes.object.isRequired,
  detailActions: PropTypes.object.isRequired,
  item:PropTypes.string,
  id:PropTypes.string,
  detail:PropTypes.object.isRequired,
};


