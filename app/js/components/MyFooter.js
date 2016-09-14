import React from 'react';

export default class MyFooter extends React.Component {
  render() {
    return (
      <div>
        <p className="my-footer">下载 挖挖社交App 查看更多精彩</p>
        <p className="my-footer">
          <a href="http://fir.im/wwkj" title="安卓版" target="_blank">安卓版</a>|<a href="http://fir.im/wwkj" title="IOS版" target="_blank">IOS版</a>
        </p>
        <p className="my-footer">CopyRight©2016 长沙挖挖科技有限公司</p>
        {/*<p>京ICP备13033158</p>*/}
      </div>
    );
  }
}

