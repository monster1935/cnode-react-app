import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/zh-cn';
import logo from './logo.svg';
import './App.less';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      postList: [],
    };
  }

  componentWillMount() {
    console.log('compoent will mount');
    this.getPostData().then(res => {
      if (res.status === 200) {
        this.setState({
          postList: res.data.data,
        });
      } else {
        console.error(res.statusText);
      }
    }).catch(e => {
      console.warn(e);
    });
  }

  getPostData() {
    console.log('in getPostData function');
    return axios.get('https://cnodejs.org/api/v1/topics');
  }

  tabTypes(post) {
    const tab = post.tab;
    const map = {
      'top': '置顶',
      'share': '分享',
      'good': '精华',
      'ask': '问答',
    };
    if (post.top) {
      return map['top'];
    } else if (post.good) {
      return map['good'];
    } else {
      return map[tab];
    }
  }

  render() {
    const contentHtml = () => {
      return this.state.postList.map(post => (
          <div className="cell" key={post.id}>
            <a className="user-avatar pull-left">
              <img
                src={post.author.avatar_url} alt={post.author.loginname}
              />
            </a>
            <span className="reply-count pull-left" >
              <span
                className="count-of-replies"
                title="回复数"
              >
              {post.reply_count}
              </span>
              <span className="count-sperator">/</span>
              <span className="count-of-visits" title="点击数">
                {post.visit_count}
              </span>
            </span>
            <a className="last-time pull-right">
              <img className="user-small-avatar" src={post.author.avatar_url} alt={post.author.loginname}>
              </img>
              <span className="last-active-time">{moment(post.last_reply_at).fromNow()}</span>
            </a>
            <div className="topic-title-wrapper">
              <span className={(post.top || post.good) ? 'tag put-top': ' tag tab-common' }>{this.tabTypes(post)}</span>
              <a className="topic-title" title={post.title}>
                {post.title}
              </a>
            </div>
          </div>
        )
      );
    }
    return (
      <div className="App">
        <header className="App-header">
          <div className="header-wrapper">
            <a className="brand">
              <img src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg" />
            </a>
            <ul className="nav pull-right">
              <li><a href="/">首页</a></li>
              <li><a href="/">新手入门</a></li>
              <li><a href="/">API</a></li>
              <li><a href="/">关于</a></li>
              <li><a href="/">注册</a></li>
              <li><a href="/">登录</a></li>
            </ul>
          </div>

        </header>
        <div className="App-content">
          <div className="sidebar">
            siderbar
          </div>
          <div className="content">
            <div className="panel">
              <div className="header">
                header
              </div>
              <div className="inner no-padding">
                <div className="topic-list">

                  {contentHtml()}
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="App-footer">
          <div className="footer-wrapper">
            CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。
          </div>
        </div>
      </div>
    );
  }
}

export default App;
