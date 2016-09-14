import React, { PropTypes } from 'react';
import {
  Container,
  Loader,
  Group,
  Slider,
  List
} from 'amazeui-touch';
import {
  Divider,
  Image
} from 'amazeui-react'

import { MyFooter } from '../components';

export default class FriendDetail extends React.Component {

  componentWillMount() {
    const {circles, detailActions, id, catid} = this.props;
    const {item} = this.props;

    if (circles.loadState.success) {

      const objArr = circles.array;
      const obj = objArr[item];
      if (catid) {
        switch (catid) {
          //求职
          case '11': detailActions.getCircleApplyById(id, obj.conid, obj.user_id);
            break;
          //招聘
          case '10': detailActions.getCircleRecruitById(id, obj.conid, obj.user_id);
            break;
          default: detailActions.getCircleCarById(id, obj.conid, obj.user_id);
            break;
        }
      }
    } else {
      location.replace(window.location.origin + '#/circle');
    }
  }

  renderHeader = (obj) => {
    return(
      <div>
        <Image
          src={`http://eswjdg.com/${obj.hdimg}`}
          width="60"
          height="60"
          circle />
        <p className="cy-cricel-detail-name">{obj.nickname}</p>
        <p className="cy-cricel-detail-time">{obj.fbtime}</p>
      </div>
    )
  };

  renderPictures = (obj) => {
    if (obj.images.length) {
      return (
        <Slider>
          {obj.images.map((picture, i) => {
            return (
              <Slider.Item
                key={i}>
                <img src={`http://eswjdg.com/${picture.image}`} />
              </Slider.Item>
            );
          })}
        </Slider>
      )
    }
  };

  renderPub =()=> {
    const { detail, catid } = this.props;
    if (catid) {
      if (detail.loadState.success) {
        const data = detail.detailObj.data[0];
        if (catid == '9' || catid == '12') { //卖车、出租
          return(
            <div>
              <p>品牌: {data.brand}</p>
              <p>型号: {data.version}</p>
              <p>车辆类型: {data.cartype}</p>
              <p>生产日期: {data.madetime}</p>
              <p>价格: {data.price}</p>
              <p>所在地区: {data.place}</p>
              <p>联系人: {data.contacts}</p>
              <p>联系电话: {data.phone}</p>
              <p>车辆描述: {data.description}</p>
            </div>
          );
        } else if (catid == '13' || catid == '14') { //买车、求租
          return(
            <div>
              <p>品牌: {data.brand}</p>
              <p>型号: {data.version}</p>
              <p>车辆类型: {data.cartype}</p>
              <p>所在地区: {data.place}</p>
              <p>联系人: {data.contacts}</p>
              <p>联系电话: {data.phone}</p>
              <p>车辆描述: {data.description}</p>
            </div>
          );
        } else if (catid == '10') {// 招聘
          return(
            <div>
              <p>公司名称: {data.companyname}</p>
              <p>职位: {data.jobtype}</p>
              <p>薪资待遇: {data.salary}</p>
              <p>工作经验: {data.workback}</p>
              <p>学历: {data.educational}</p>
              <p>工作地点: {data.place}</p>
              <p>联系电话: {data.phone}</p>
              <p>职位描述: {data.content}</p>
            </div>
          );

        } else if (catid == '11') {//求职
          return(
            <div>
              <p>姓名: {data.name}</p>
              <p>性别: {data.sex}</p>
              <p>学历: {data.educational}</p>
              <p>职位: {data.jobtype}</p>
              <p>工作经验: {data.jobback}</p>
              <p>期望薪资: {data.salary}</p>
              <p>联系电话: {data.phone}</p>
              <p>自我描述: {data.content}</p>
            </div>
          );
        }
      } else {
        return(
          <Loader
            className="cy-empty-loader"
            amStyle="primary"/>
        )
      }
    }
  };

  renderList = (evalution, count) => {
    if (count) {
      return(
        <List>
          {evalution.map((obj, i) => {
            const img = <img width="60" src={`http://eswjdg.com/${obj.hdimg}`} />;
            return (
              <List.Item
                title={obj.nickname}
                subTitle={obj.content}
                after={obj.evatime}
                target="_blank"
                media={img}
                key={i}
              />
            );
          })}
        </List>
      )
    } else {
      return(
        <div>
          <Divider/>
          <p className="cy-detail-eva-text">还没有评论,快下载App抢沙发哦!</p>
        </div>
      )
    }
  };

  renderDetail = () => {
    const { circles } = this.props;

    if (circles.loadState.success) {
      const {item} = this.props;
      const objArr = circles.array;
      const obj = objArr[item];

      let catidText;
      switch (obj.catid) {
        case '9': catidText = '---卖车信息---';
          break;
        case '13': catidText = '---买车信息---';
          break;
        case '14': catidText = '---求租信息---';
          break;
        case '12': catidText = '---出租信息---';
          break;
        case '10': catidText = '---招聘信息---';
          break;
        case '11': catidText = '---求职信息---';
          break;
        default:catidText = null;
          break;
      }

      return (
        <div>
          <Group>
            {/*头像、名字、时间*/}
            {this.renderHeader(obj)}

            <div className="cy-cricel-detail-main">
              {/*正文*/}
              <p>{obj.content}</p>

              <p className="cy-catid-detail-text">{catidText}</p>

              {/* 图片 相关的*/}
              {this.renderPictures(obj)}

              {/*是 发布的---需要有一些设定*/}
              {this.renderPub()}
              <p className="cy-sub-text">{obj.address}</p>

              <Divider/>

              <p>热门留言({obj.count})</p>
              {/*留言List*/}
              {this.renderList(obj.evalution, obj.count)}
            </div>
          </Group>
          <MyFooter />
        </div>
      )
    }
  };

  render() {
    return (
      <Container scrollable>
        {this.renderDetail()}
      </Container>
    );
  }
}

FriendDetail.propTypes = {
  circles: PropTypes.object.isRequired,
  detailActions: PropTypes.object.isRequired,
  item:PropTypes.string,
  catid:PropTypes.string,
  id:PropTypes.string,
  detail:PropTypes.object.isRequired,
};

