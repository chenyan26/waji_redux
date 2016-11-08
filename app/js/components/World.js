import React, { PropTypes } from 'react';
import {
  Container,
  List,
  Loader,
} from 'amazeui-touch';
import {
  // List,
  // ListItem,
  Image
} from 'amazeui-react'
import {
  Link,
} from 'react-router';

import { MyFooter } from '../components';
/*
    catid ---string
    卖车:9
    买车:13
    求租:14
    出租:12
    招聘:10
    求职:11
 */

export default class World extends React.Component {

  componentWillMount() {
    const { appActions, circleActions, circles} = this.props;
    appActions.setNavTitle('世界圈');
    //如没有 缓存 则 获取worlds
    if (! circles.loadState.success) {
      circleActions.getWorlds();
    }
  }

  renderHeaderAndList = ()=> {
    const { circles } = this.props;
    if (circles.loadState.success) {
      const objArr = circles.array;
      return (
          // 列表
          <div>
            <List>
              {objArr.map((obj, i) => {

                let catidText;
                //[发布] 的内容,是的->后续Detail需要二次请求
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

                const img = <img width="40" src={`http://eswjdg.com/${obj.hdimg}`} />;
                if (obj.images.length > 0) { //有图片的
                  return (
                    <List.Item
                      title={obj.nickname}
                      subTitle={obj.content || '无'}
                      after={obj.fbtime}
                      //desc={obj.address}
                      target="_blank"
                      media={img}
                      key={i}
                      linkComponent={Link}
                      linkProps={{to: {pathname: `/circle/${obj.id}`,query: {item: `${i}`, catid:obj.catid}}}}
                    >
                      <p className="cy-catid-text">{catidText}</p>
                      {
                        obj.images.map((img, m) => {
                          return (
                            <Image src={`http://eswjdg.com/${img.picthumb}`}
                                   width="80" height="80"
                                   className="cy-circle-img"
                                   radius
                                   key={m}/>
                          )
                      })
                      }
                      <p className="cy-sub-text">{obj.address}</p>
                    </List.Item>
                  );
                } else {  //没有图片的
                  return (
                    <List.Item
                      title={obj.nickname}
                      subTitle={obj.content}
                      after={obj.fbtime}
                      //desc={obj.address}
                      target="_blank"
                      media={img}
                      key={i}
                      linkComponent={Link}
                      linkProps={{to: {pathname: `/circle/${obj.id}`,query: {item: `${i}`, catid:obj.catid}}}}
                    >
                      <p className="cy-catid-text">{catidText}</p>
                      <p className="cy-sub-text">{obj.address}</p>
                    </List.Item>
                  );
                }
              })}
            </List>
            <MyFooter />
          </div>
      )
    }else {
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
        {this.renderHeaderAndList()}
      </Container>
    );
  }
}

World.propTypes = {
  circles: PropTypes.object.isRequired,
  circleActions: PropTypes.object.isRequired,
  appActions: PropTypes.object.isRequired
};


